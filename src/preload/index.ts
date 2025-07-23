import { contextBridge, ipcRenderer } from 'electron';

if (!process.contextIsolated) {
  throw new Error('contextlsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld("electronAPI", {
    openBookDialog: () => ipcRenderer.invoke('dialog:openBook'),
    loadBooksCollection: () => ipcRenderer.invoke('booksCollection:load'),
    saveBooksCollection: (books) => ipcRenderer.invoke('booksCollection:save', books),
  })
} catch (error) {
  console.error(error)
}