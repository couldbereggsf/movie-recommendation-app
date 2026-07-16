import { useMovieStore } from '../store/movieStore';
import { usePopularMovies } from '../features/movies/hooks/useMovies';
import { MovieList } from '../features/movies/components/MovieList';
import { Loader } from '../components/ui/Loader';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
    const { favorites } = useMovieStore();
    const navigate = useNavigate();

    // Fetches all movies (or use a hook that fetches by IDs)
    const { data, isLoading } = usePopularMovies(1);

    const favoriteMovies = data?.results?.filter((movie: any) =>
        favorites.includes(movie.id)
    ) || [];

    const handleMovieClick = (id: number) => {
        navigate(`/movie/${id}`);
    };

    if (isLoading) return <Loader />;

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => navigate('/')}
                className="mb-6 text-cream/50 hover:text-cream transition-colors flex items-center gap-2"
            >
                ← Back to Home
            </button>

            <h1 className="text-3xl font-display text-cream mb-6">
                ❤️ Your Favorites ({favorites.length})
            </h1>

            {favorites.length === 0 ? (
                <p className="text-cream/70 text-center py-8">
                    You haven't added any favorites yet. Start exploring movies!
                </p>
            ) : (
                <MovieList movies={favoriteMovies} onMovieClick={handleMovieClick} />
            )}
        </div>
    );
};

export default FavoritesPage;