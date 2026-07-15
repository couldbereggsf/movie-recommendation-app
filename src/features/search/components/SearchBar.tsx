import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    initialQuery?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
                className="flex-1 px-4 py-2 rounded bg-forest-light text-cream border border-olive focus:outline-none focus:border-amber"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-amber text-forest font-bold rounded hover:opacity-80"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;