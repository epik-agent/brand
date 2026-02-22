<picture>
  <source media="(prefers-color-scheme: dark)"
          srcset="assets/logo-full-dark.svg">
  <source media="(prefers-color-scheme: light)"
          srcset="assets/logo-full-light.svg">
  <img alt="epik" src="assets/logo-full-light.svg" height="40">
</picture>

> You describe it. We build it.

# Branding

This package contains design elements of Epik's branding, such as palettes,
typography, and logos. It is published as an `npm` package to GitHub
Packages, allowing consumers to easily incorporate Epik's branding into their
own projects.

Consumers add `@epik-agent:registry=https://npm.pkg.github.com` to their
`.npmrc` and run

`npm install @epik-agent/brand`

Then import tokens from JS or link `brand.css` for CSS custom properties.

When a new release of this repository is created, the GitHub Action will
automatically publish the package to GitHub Packages. The package name is
`@epik-agent/brand`, and the version is determined by the release tag
(e.g., `v1.0.0`).
