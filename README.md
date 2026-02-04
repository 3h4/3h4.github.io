# PhD Documentation

A simple [Docusaurus](https://docusaurus.io/) site for PhD documentation, set up to publish at **https://3h4.github.io** on every push to `main`.

## Local development

```bash
npm install
npm run start
```

Open http://localhost:3000.

## Deploy to GitHub Pages

1. **Create the repo**  
   On GitHub, create a repository named **`3h4.github.io`** (for a user site at `https://3h4.github.io`).

2. **Push this project**
   ```bash
   git remote add origin https://github.com/3h4/3h4.github.io.git
   git add .
   git commit -m "Deploy PhD docs with Docusaurus"
   git push -u origin main
   ```

3. **Repo settings**
   - **Settings → Actions → General**  
     Under **Workflow permissions**, choose **Read and write permissions**. Save.
   - **Settings → Pages**  
     **Build and deployment**: Source = **Deploy from a branch**.  
     Branch = **gh-pages**, Folder = **/(root)**. Save.

4. **Automatic deploys**  
   After the first push, the workflow runs: it builds the site and deploys to the `gh-pages` branch. The site will be at **https://3h4.github.io** (may take 1–2 minutes).

## Project layout

- `docs/` – Markdown documentation (sidebar is auto-generated).
- `blog/` – Blog posts.
- `src/pages/` – React pages (e.g. homepage).
- `docusaurus.config.js` – Site title, URL, navbar, etc.

Edit Markdown in `docs/` or `blog/`, push to `main`, and the site updates after the next workflow run.
