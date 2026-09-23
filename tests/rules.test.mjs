import assert from "node:assert/strict";
import test from "node:test";
import {
  bookingMode,
  categoryMode,
  chooseInitialLocale,
  contactOptions,
  experienceMode,
  serviceBookingUrl,
  specialtyMode,
} from "../template-rules.mjs";

const makeSite = (overrides = {}) => ({
  template: { specialty: "", ...overrides.template },
  master: { experienceYears: null, ...overrides.master },
  contacts: { phoneDisplay: "", phoneHref: "", messenger: null, ...overrides.contacts },
  links: { bookingUrl: "", ...overrides.links },
  services: { groups: [], ...overrides.services },
  i18n: { locales: [{ code: "ru", label: "RU" }, { code: "en", label: "EN" }], ...overrides.i18n },
});

test("category modes follow 1 / 2 / 3+ rules", () => {
  const group = (id) => ({ id, label: id, services: [{ name: id }] });
  assert.equal(categoryMode(makeSite({ services: { groups: [group("a")] } })), "single");
  assert.equal(categoryMode(makeSite({ services: { groups: [group("a"), group("b")] } })), "two");
  assert.equal(categoryMode(makeSite({ services: { groups: [group("a"), group("b"), group("c")] } })), "many");
});

test("direct booking wins and service-specific link wins over generic", () => {
  const site = makeSite({ links: { bookingUrl: "https://booking.example/master" } });
  assert.equal(bookingMode(site), "direct");
  assert.equal(serviceBookingUrl({ url: "https://booking.example/service" }, site), "https://booking.example/service");
  assert.equal(serviceBookingUrl({ url: "" }, site), "https://booking.example/master");
});

test("phone alone is a valid contact fallback and Instagram is filtered", () => {
  const phoneOnly = makeSite({ contacts: { phoneDisplay: "+7 000", phoneHref: "tel:+7000", messenger: null } });
  assert.equal(bookingMode(phoneOnly), "contact");
  assert.deepEqual(contactOptions(phoneOnly).map((item) => item.kind), ["phone"]);

  const instagram = makeSite({ contacts: { phoneDisplay: "+7 000", phoneHref: "tel:+7000", messenger: { type: "instagram", label: "Instagram", url: "https://instagram.com/test" } } });
  assert.deepEqual(contactOptions(instagram).map((item) => item.kind), ["phone"]);
});

test("locale detection honors saved locale, then system locale, then English", () => {
  const armenia = makeSite({ i18n: { locales: [{ code: "hy", label: "HY" }, { code: "ru", label: "RU" }, { code: "en", label: "EN" }] } });
  assert.equal(chooseInitialLocale(armenia, ["en-US"], "ru"), "ru");
  assert.equal(chooseInitialLocale(armenia, ["hy-AM"], ""), "hy");
  assert.equal(chooseInitialLocale(armenia, ["de-DE"], ""), "en");
});

test("experience and specialty are explicit data-driven states", () => {
  assert.equal(experienceMode(makeSite()), "unknown");
  assert.equal(experienceMode(makeSite({ master: { experienceYears: "8" } })), "known");
  assert.equal(specialtyMode(makeSite({ template: { specialty: "hair" } })), "hair");
  assert.equal(specialtyMode(makeSite({ template: { specialty: "nails" } })), "nails");
  assert.equal(specialtyMode(makeSite({ template: { specialty: "lashes" } })), "lashes");
  assert.equal(specialtyMode(makeSite({ template: { specialty: "brows" } })), "generic");
});
