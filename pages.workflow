name: Nekora quality and Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: nekora-pages
  cancel-in-progress: true

jobs:
  pages:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    env:
      NEXT_PUBLIC_BASE_PATH: /Nekora
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - name: Check static export and image assets
        shell: bash
        run: |
          set -euo pipefail
          test -s out/index.html
          test -s out/assets/lyudmila/master.webp
          test -s out/assets/lyudmila/portfolio/galery00002.webp
          test -s out/assets/lyudmila/portfolio/galery00007.webp
          test -s out/assets/lyudmila/shablonLED.webp
          cp out/index.html out/404.html
          touch out/.nojekyll
      - name: Check whether Pages is enabled
        id: pages-check
        env:
          GH_TOKEN: ${{ github.token }}
        run: |
          if gh api "repos/${{ github.repository }}/pages" >/dev/null 2>&1; then
            echo "enabled=true" >> "$GITHUB_OUTPUT"
          else
            echo "enabled=false" >> "$GITHUB_OUTPUT"
            echo "::notice::Enable Settings > Pages > GitHub Actions to publish this site."
          fi
      - if: steps.pages-check.outputs.enabled == 'true'
        uses: actions/configure-pages@v5
      - if: steps.pages-check.outputs.enabled == 'true'
        uses: actions/upload-pages-artifact@v4
        with:
          path: out
      - if: steps.pages-check.outputs.enabled == 'true'
        id: deployment
        uses: actions/deploy-pages@v4
