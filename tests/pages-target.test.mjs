import assert from "node:assert/strict";
import test from "node:test";
import { resolvePagesTarget } from "../scripts/resolve-pages-target.mjs";

test("default GitHub Pages preview uses exactly one case-sensitive repository prefix", () => {
  assert.deepEqual(resolvePagesTarget({ repository: "ichAEY/Nekora" }), {
    basePath: "/Nekora",
    siteUrl: "https://ichaey.github.io/Nekora/",
    mode: "github-preview",
  });
});

test("custom subdomain uses root-relative assets and its own HTTPS canonical URL", () => {
  assert.deepEqual(resolvePagesTarget({ repository: "ichAEY/Nekora", domain: "Lyudmila-Nekora.Tanem.Ru." }), {
    basePath: "",
    siteUrl: "https://lyudmila-nekora.tanem.ru/",
    mode: "custom-domain",
  });
});

test("invalid custom domains and malformed repository names are rejected", () => {
  assert.throws(() => resolvePagesTarget({ repository: "ichAEY/Nekora", domain: "https://example.com" }), /Invalid/);
  assert.throws(() => resolvePagesTarget({ repository: "ichAEY/Nekora", domain: "*.tanem.ru" }), /Invalid/);
  assert.throws(() => resolvePagesTarget({ repository: "ichAEY/Nekora/other" }), /Expected/);
});
