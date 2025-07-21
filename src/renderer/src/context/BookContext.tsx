import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface Book {
    id: string
    path: string
    title: string
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
        const stored = localStorage.getItem(BOOKS_STORAGE_KEY)
        if (stored) {
            setBooks(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books))
    }, [books])

    const addBooks = async () => {
        const filePaths: string[] = await window.electronAPI.openBookDialog()
        if (filePaths.length === 0) return

        const newBooks = filePaths.map(path => ({
            id: crypto.randomUUID(),
            path,
            title: path.split(/[/\\]/).pop() || 'Unknown',
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