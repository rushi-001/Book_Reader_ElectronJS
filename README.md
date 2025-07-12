# Book_Reader_ElectronJS
A feature-rich desktop application for discovering, managing, and reading free ebooks. Powered by free APIs, it allows users to search for ebooks, save favorites, track reading progress, and enjoy a customizable reading experience. Inspired by the "Moon+ Reader" mobile app.

<!-- File structure for this Project -->
## Command used to create the starter project
```bash
npm create @quick-start/electron
# or
yarn create @quick-start/electron
```


## Technology used
### React
### Electron
### Typescript
```
npm install -D tailwindcss@3.4.14 postcss autoprefixer
```
### Tailwindcss
### Postcss
### Typescript

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
|-----package-lock.json
|-----package.json
|-----postcss.config.js
|-----README.md
|-----tailwind.config.js
|-----tsconfig.json
|-----tsconfig.node.json
|-----tsconfig.web.json