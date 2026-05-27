# Grayjay Guide Website

The official website for the Grayjay Guide, built with Jekyll and hosted on GitHub Pages.

Visit: [b-risk.github.io/Grayjay-Guide](https://b-risk.github.io/Grayjay-Guide)

## About

A community-driven guide for getting the best experience with [Grayjay](https://grayjay.app), covering topics from client usage to YouTube workarounds and plugin configuration.

## Tech Stack

- [Jekyll](https://jekyllrb.com/) — Static site generator
- Custom SCSS — Dark-first theme with blue accents
- Vanilla JavaScript — Theme toggle, sidebar navigation, smooth scroll
- GitHub Pages — Hosting

## Local Development

Prerequisites: Ruby + Bundler

```bash
cd docs
bundle install
bundle exec jekyll serve
```

## Project Structure

```
.
├── docs/              # Jekyll site source
│   ├── _layouts/      # HTML layouts
│   ├── _includes/     # Reusable components
│   ├── _sass/         # Stylesheets
│   ├── assets/        # Images, CSS, JS
│   └── *.md           # Content pages
├── Development/       # Original source files
│   ├── Pages/         # Legacy markdown content
│   └── README.md      # Original guide content
└── .omo/              # OpenCode workspace
```

## Credits

- Guide content by [Freeb](https://github.com/b-risk)
- Website built with [OpenCode](https://opencode.ai)