# Book_Reader_ElectronJS
A feature-rich desktop application for discovering, managing, and reading free ebooks. Powered by free APIs, it allows users to search for ebooks, save favorites, track reading progress, and enjoy a customizable reading experience. Inspired by the "Moon+ Reader" mobile app.

<!-- File structure for this Project -->
## Command used to create the starter project
```bash
npm create @quick-start/electron
# or
yarn create @quick-start/electron
```

## Technology Used

- **React**  
- **Electron**  
- **TypeScript**  

### Styling and Build Tools

Command run for installing the tailwind postcss and autoprefixer dependencies, run:

```bash
npm install tailwindcss@3.4.14 postcss autoprefixer --save-dev
```
- **Tailwind CSS(V-3.4.14)**  
- **PostCSS**  
- **AutoPrefixer**
```bash
npm install @iconify/react clsx --save-dev
```
- **Iconify**
- **CLSX**


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
|-----|----|-----assets/
|-----|----|-----src/
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