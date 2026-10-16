# Authoria website

The website reads the existing README.md, GameplayGuide.md,
Authoria_Tool_Running_Guide.md, and Changelog.md on every build.
Keep editing those files as usual. There is no second copy to keep in sync.

## Preview locally

Open a terminal in this repository:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/Authoria-Requiem-Reforged/.
Restart the server after editing `_config.yml` or `_plugins/guide_pages.rb`.

## Publish

1. Push the website files to this repository's `main` branch.
2. In the repository's Settings → Pages → Build and deployment,
   select **GitHub Actions** as the source.
3. In Actions, run **Publish guidebook** if it has not already started.

Website: https://drheisen1.github.io/Authoria-Requiem-Reforged/

Use the Actions source, rather than Deploy from a branch: this website
generates its guide pages using a small Jekyll plugin.

## Design and images

- Colors and responsive layout: `assets/site.css`.
- Homepage: `index.html`.
- Shared navigation: `_data/navigation.yml`.
- Page layouts: `_layouts/`.
- Generated guides and link conversion: `_plugins/guide_pages.rb`.
- Scenic images: `assets/images/`, sourced from the README screenshot section.
- Tool screenshots retain their original position beside the relevant steps.
- Riften comparison is intentionally not used.

## Check a build

```sh
bundle exec jekyll build
bundle exec ruby scripts/check_site.rb
```
