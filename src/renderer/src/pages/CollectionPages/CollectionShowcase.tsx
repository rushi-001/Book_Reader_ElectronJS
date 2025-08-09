import { BR_Link, PopupLayout } from "@/components";
import type { Book } from "@/context";
import { useBooks } from "@/context";
import { useState } from "react";

export const CollectionShowcase = () => {
    const { books } = useBooks();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Book Collection</h1>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4">
                {books.map(book => (
                    <div
                        key={book.id}
                        className="bg-[#D9D9D9] dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                        onClick={() => setSelectedBook(book)}
                    >
                        <img
                            src={book.cover ? `file://${book.cover}` : '../../resources/no-book-cover.png'}
                            alt="_cover"
                            draggable={false}
                            className="w-auto h-60 max-w-auto mx-auto select-none rounded-md mb-2 object-contain"
                        />
                        <h2 className="text-lg font-semibold truncate">{book.fileName.replace(/\.[^/.]+$/, "")}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Added on: {new Date(book.addedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>

            <PopupLayout
                isOpen={!!selectedBook}
                titleButtons={
                    <>
                        <BR_Link
                            book={selectedBook}
                            toolTipText="Open Book"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" className="text-gray-700 dark:text-gray-300">
                                    <path fill="currentColor" d="M204.055 213.905q-18.12-5.28-34.61-9a146 146 0 0 1-6.78-44.33c0-65.61 42.17-118.8 94.19-118.8s94.15 53.14 94.15 118.76a146.3 146.3 0 0 1-6.16 42.32q-20.52 4.3-43.72 11.05c-22 6.42-39.79 12.78-48.56 16.05c-8.72-3.27-26.51-9.63-48.51-16.05m-127.95 84.94a55.16 55.16 0 1 0 55.16 55.15a55.16 55.16 0 0 0-55.16-55.15m359.79 0a55.16 55.16 0 1 0 55.16 55.15a55.16 55.16 0 0 0-55.15-55.15zm-71.15 55.15a71.24 71.24 0 0 1 42.26-65v-77.55c-64.49 0-154.44 35.64-154.44 35.64s-89.95-35.64-154.44-35.64v74.92a71.14 71.14 0 0 1 0 135.28v7c64.49 0 154.44 41.58 154.44 41.58s89.99-41.55 154.44-41.55v-9.68a71.24 71.24 0 0 1-42.26-65" />
                                </svg>
                            }
                            className="flex items-center justify-center bg-icon-bg-light dark:bg-icon-bg-dark text-icon-light dark:text-icon-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                        />
                        <BR_Link
                            book={selectedBook}
                            toolTipText="Details"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.35l-2.862 2.861a3.7 3.7 0 0 1-1.712.97l-1.83.457a2.08 2.08 0 0 1-2.29-.938H7.75a.75.75 0 0 1 0-1.5h3.293l.021-.093l.458-1.83c.162-.648.497-1.24.97-1.712L16.355 10H14a2 2 0 0 1-2-2m6.695-.305q-.156.123-.301.267l-.538.538H14a.5.5 0 0 1-.5-.5V2.5zm.405.974l-5.903 5.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 8.669" /></svg>
                            }
                            className="flex items-center justify-center p-2 bg-icon-bg-light dark:bg-icon-bg-dark text-icon-light dark:text-icon-dark hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                        />
                    </>
                }
                onClose={() => setSelectedBook(null)}
                title={"Information Overview"}>
                {selectedBook && (
                    <>
                        <div className="flex space-x-8 p-4">
                            <div className="relative">
                                <img
                                    src={selectedBook.cover ? `file://${selectedBook.cover}` : '../../resources/no-book-cover.png'}
                                    alt="book cover"
                                    className="w-48 h-74 object-cover select-none rounded-lg shadow-md"
                                    draggable={false}
                                />
                            </div>
                            <div className="flex flex-col justify-start space-y-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {selectedBook.fileName.replace(/\.[^/.]+$/, "")}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Author:</span> {selectedBook?.author || 'Unknown'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Summary:</span> {selectedBook?.summary || 'No summary available'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Pages:</span> {selectedBook?.pages || 0}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Progress:</span> {selectedBook?.progress || 0}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">File Type:</span> {selectedBook?.path.split('.').pop() || 'Unknown'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Your Rating:</span> {selectedBook?.yourRating || 'Unknown'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Internet Rating:</span> {selectedBook?.internetRating || 'Unknown'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 break-all">
                                    <span className="font-semibold">File Location:</span> {selectedBook?.path.substring(0, selectedBook.path.lastIndexOf('/')) || 'Unknown'}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Added on:</span> {selectedBook?.addedAt ? new Date(selectedBook?.addedAt).toLocaleDateString() : 'Unknown'}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </PopupLayout>
        </div >
    );
};