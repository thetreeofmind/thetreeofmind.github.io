# The Tree of Mind

Personal blog at [thetreeofmind.github.io](https://thetreeofmind.github.io).

## Tech stack

- Next.js 15 (static export)
- React 19
- Sass (CSS modules)
- ButterCMS (headless content)

## Development

```bash
cp .env.example .env.local  # add your ButterCMS API key
npm install
npm run dev
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.

To deploy, add `BUTTERCMS_API_KEY` as a repository secret in GitHub Settings > Secrets > Actions.
