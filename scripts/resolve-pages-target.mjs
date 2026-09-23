import { appendFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// GitHub project sites need a repository path; custom-domain sites need root paths.
// Determine both values from GitHub's own Pages configuration before building.
export function resolvePagesTarget({ repository, domain = "" }) {
  const [owner, name, ...rest] = String(repository || "").split("/");
  if (!owner || !name || rest.length || !/^[a-zA-Z0-9._-]+$/.test(owner) || !/^[a-zA-Z0-9._-]+$/.test(name)) {
    throw new Error("Expected GITHUB_REPOSITORY in owner/repository form.");
  }

  const hostname = String(domain || "").trim().toLowerCase().replace(/\.$/, "");
  if (hostname) {
    if (!/^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(hostname)) {
      throw new Error("Invalid custom Pages domain. Set a DNS hostname without a URL scheme or path.");
    }
    return { basePath: "", siteUrl: "https://" + hostname + "/", mode: "custom-domain" };
  }
  return {
    basePath: "/" + name,
    siteUrl: "https://" + owner.toLowerCase() + ".github.io/" + name + "/",
    mode: "github-preview",
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const target = resolvePagesTarget({
    repository: process.env.GITHUB_REPOSITORY,
    domain: process.env.PAGES_CUSTOM_DOMAIN,
  });
  if (!process.env.GITHUB_ENV) throw new Error("GITHUB_ENV is required.");
  appendFileSync(
    process.env.GITHUB_ENV,
    ["NEXT_PUBLIC_BASE_PATH=" + target.basePath, "NEXT_PUBLIC_SITE_URL=" + target.siteUrl].join("\n") + "\n",
  );
  console.log("GitHub Pages target: " + target.mode + " → " + target.siteUrl);
}
