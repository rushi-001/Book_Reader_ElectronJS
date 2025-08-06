/// <reference types="vite/client" />
export { };

declare global {
    interface Window {
        electronAPI: {
            invoke: (channel: string, ...args: any[]) => Promise<any>
            openBookDialog: () => Promise<{ filePath: string; coverPath: string }[]>
            loadBooksCollection: () => Promise<Book[]>
            saveBooksCollection: (books: Book[]) => Promise<void>
        }
    }

    interface Book {
        id: string
        path: string
        fileName: string
        cover?: string
        addedAt: number
    }
}