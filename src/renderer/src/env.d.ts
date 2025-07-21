/// <reference types="vite/client" />
export { }

declare global {
    interface Window {
        electronAPI: {
            openBookDialog: () => Promise<string[]>
            // add other exposed APIs here if any
        }
    }
}