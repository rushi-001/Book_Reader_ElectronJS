/// <reference types="vite/client" />
export { }

declare global {
    interface Window {
        electronAPI: {
            openBookDialog: () => Promise<string[]>
            loadBooksCollection: () => Promise<Book[]>
            saveBooksCollection: (books: Book[]) => Promise<void>
        }
    }

    interface Book {
        id: string
        path: string
        fileName: string
        addedAt: number
    }
}