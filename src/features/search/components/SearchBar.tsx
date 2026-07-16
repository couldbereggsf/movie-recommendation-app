import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SearchBarProps {
    onSearch: (query: string) => void;
    initialQuery?: string;
    favorites?: any[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery = '', favorites = [] }) => { 
    const [query, setQuery] = useState(initialQuery);

    const handleSubmit = (e: React.FormEvent) => { // Prevent the default form submission behavior
        e.preventDefault();
        onSearch(query);
    };
    const handleClear = () => {
        setQuery('');
        onSearch(''); // Call onSearch with an empty string to clear the search results
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
            <div className="absolute right-1 top-1 flex gap-1 items-center">
                <Link
                    to="/favorites"
                    className="relative px-2 py-2 text-cream/60 hover:text-cream transition-colors flex items-center gap-1"
                    title="View Favorites"
                >
                    ❤️
                    {favorites.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-amber text-forest text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                            {favorites.length}
                        </span>
                    )}
                </Link>
                {query && (
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-2 text-cream/60 hover:text-cream transition-colors"
          >
            ✕
          </button>
                )}
            <button
                type="submit"
                className="px-4 py-2 bg-amber text-forest font-bold rounded hover:opacity-80"
            >
                Search
            </button>
            </div>
        </form>
    );
};

export default SearchBar;