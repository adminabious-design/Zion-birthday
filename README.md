# Zion Birthday

This repository contains a small static birthday website in the `birthday/` folder.

## Render deployment

The site is configured for Render static deployment using `render.yaml`.

### What happens on build

- `npm run build` generates `birthday/env-config.js` from Render environment variables.
- The static site files are served from the `birthday/` directory.

### Environment variables

The Render service is configured with the following example environment variables:

- `WHATSAPP_NUMBER` — the WhatsApp phone number to use for the gift button.
- `BIRTHDAY_DATE` — the default birthday date shown in the site, e.g. `08/07`.

If you want to deploy locally, copy `.env.example` to `.env` and update values.

## GitHub / push setup

If you want to connect this repository to GitHub, run:

```bash
cd c:\Users\mis\Desktop\zion
git init
git add .
git commit -m "Add Render deployment config and env-driven birthday site"
git branch -M main
git remote add origin https://github.com/adminabious-design/Zion-birthday.git
git push -u origin main
```

If you already have the repository initialized, just add the remote and push:

```bash
git remote add origin https://github.com/adminabious-design/Zion-birthday.git
git push -u origin main
```

## Deployment procedure

1. Create a Render account at https://render.com.
2. Create a new **Static Site** and connect to the GitHub repository `adminabious-design/Zion-birthday`.
3. Use branch `main`.
4. Set the **Build Command** to:

```bash
node ./build-config.js
```

5. Set the **Publish Directory** to:

```bash
./birthday
```

6. Add the same environment variables on Render if you want to customize them:

-- `WHATSAPP_NUMBER = +256 743 960764`
- `BIRTHDAY_DATE = 08/07`

7. Deploy.

## Local preview

Install Node.js if needed, then run:

```bash
cd c:\Users\mis\Desktop\zion
node ./build-config.js
```

Then open `birthday/index.html` in your browser or serve the `birthday/` folder with a static file server.
