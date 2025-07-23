import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface Book {
    id: string
    path: string
    fileName: string
    addedAt: number
}

interface BooksContextType {
    books: Book[]
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
    addBooks: () => Promise<void>
}

const BOOKS_STORAGE_KEY = 'my_books_collection'

const BooksContext = createContext<BooksContextType | undefined>(undefined)

export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        window.electronAPI.loadBooksCollection().then((loadedBooks: Book[]) => {
            setBooks(loadedBooks)
        })
    }, [])

    useEffect(() => {
        window.electronAPI.saveBooksCollection(books)
    }, [books])

    const addBooks = async () => {
        const filePaths: string[] = await window.electronAPI.openBookDialog()
        if (filePaths.length === 0) return

        const newBooks = filePaths.map(path => ({
            id: crypto.randomUUID(),
            path,
            fileName: path.split(/[/\\]/).pop() || 'Unknown',
            addedAt: Date.now()
        }))

        setBooks(prev => [...prev, ...newBooks])
    }

    return (
        <BooksContext.Provider value={{ books, setBooks, addBooks }}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooks = () => {
    const context = useContext(BooksContext)
    if (!context) {
        throw new Error('useBooks must be used within a BooksProvider')
    }
    return context
}