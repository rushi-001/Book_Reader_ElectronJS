# Book_Reader_ElectronJS
A feature-rich desktop application for discovering, managing, and reading free ebooks. Powered by free APIs, it allows users to search for ebooks, save favorites, track reading progress, and enjoy a customizable reading experience. Inspired by the "Moon+ Reader" mobile app.

<!-- File structure for this Project -->
## Command used to create the project
```bash
npm create @quick-start/electron
# or
yarn create @quick-start/electron
```

## File Structure

```
Book_Reader_ElectronJS/
|-----build/
|-----resources/
|-----src
|-----|----main/
|-----|----|-----index.ts
|-----|----preload/
|-----|----|-----index.d.ts
|-----|----|-----index.ts
|-----|----renderer/
|-----|----|-----src/
|-----|----|-----|-----assets/
|-----|----|-----|-----components/
|-----|----|-----|-----App.tsx
|-----|----|-----|-----env.d.ts
|-----|----|-----|-----main.tsx
|-----|----|-----index.html
|-----.editorconfig
|-----.gitignore
|-----.prettierignore
|-----.prettierrc.yaml
|-----electron-builder.yml
|-----eslint.config.mjs
|-----package.json
|-----README.md
|-----tsconfig.json
|-----tsconfig.node.json
|-----tsconfig.web.json