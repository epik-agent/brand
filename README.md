# Branding

This package contains design tokens for Epik Agent's branding, such as colors,
typography, and spacing. It is published as an `npm` package to GitHub
Packages, allowing consumers to easily install and use the tokens in their
projects.

Consumers add `@epik-agent:registry=https://npm.pkg.github.com` to their
`.npmrc` and run

`npm install @epik-agent/brand`

Then import tokens from JS or link `brand.css` for CSS custom properties.

To create a release, push the contents of this directory to a
`epik-agent/brand` repository, create a release (e.g., `v1.0.0`), and the
GitHub Action will handle the publishing process.

 
