import { contextBridge, ipcRenderer } from 'electron';

if (!process.contextIsolated) {
  throw new Error('contextlsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld("electronAPI", {
    openBookDialog: () => ipcRenderer.invoke('dialog:openBook'),
    loadBooksCollection: () => ipcRenderer.invoke('booksCollection:load'),
    saveBooksCollection: (books) => ipcRenderer.invoke('booksCollection:save', books),
    invoke: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
  })
} catch (error) {
  console.error(error)
}