import { useSearchParams } from 'react-router-dom';
import { usePopularMovies, useSearchMovies } from '../features/movies/hooks/useMovies';
import { MovieList } from '../features/movies/components/MovieList';
import { Pagination } from '../features/movies/components/Pagination';
import { Loader } from '../components/ui/Loader';
import SearchBar from '../features/search/components/SearchBar';
import { useNavigate } from 'react-router-dom';

const MovieListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const page = Number(searchParams.get('page')) || 1;
    const navigate = useNavigate();

    const popularQuery = usePopularMovies(page);
    const searchQuery = useSearchMovies(query, page);

    const { data, isLoading, isError, error } = query ? searchQuery : popularQuery;
    console.log('MovieListPage data:', data);

    const handleSearch = (q: string) => {
        setSearchParams({ query: q, page: '1' });
    };

    const handlePageChange = (newPage: number) => {
        setSearchParams((prev) => {
            prev.set('page', String(newPage));
            return prev;
        });
    };

    const handleMovieClick = (id: number) => {
        navigate(`/movie/${id}`);
    };

    const handleGoHome = () => {
        navigate('/');
    };

    if (isLoading) return <Loader />;
    if (isError) {
        console.error('API Error:', error);
        return <p className="text-burnt text-center py-8">Failed to load movies.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Back to Home button */}
            <button
                onClick={handleGoHome}
                className="mb-6 text-cream/50 hover:text-cream transition-colors flex items-center gap-2"
            >
                ← Back to Home
            </button>

            <div className="flex flex-col items-center gap-6 mb-8">
                <SearchBar onSearch={handleSearch} initialQuery={query} />
            </div>

            <h1 className="text-2xl font-display text-cream mb-6">
                {query ? `Results for "${query}"` : 'All Movies'}
            </h1>

            <MovieList movies={data?.results} onMovieClick={handleMovieClick} />

            {data && (
                <Pagination
                    currentPage={data.page}
                    totalPages={Math.min(data.total_pages, 500)}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default MovieListPage;