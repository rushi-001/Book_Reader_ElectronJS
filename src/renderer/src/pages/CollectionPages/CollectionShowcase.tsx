import { useBooks } from "@/context";

export const CollectionShowcase = () => {
    const { books } = useBooks();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Book Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map(book => (
                    <div key={book.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                        <h2 className="text-lg font-semibold">{book.fileName}</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Added on: {new Date(book.addedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}