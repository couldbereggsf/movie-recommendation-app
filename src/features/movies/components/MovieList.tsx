import type { Movie } from '../../../services/movieService';
import { MovieCard } from './MovieCard';

interface Props {
    movies?: Movie[]; // make it optional
    onMovieClick: (id: number) => void;
}

export const MovieList = ({ movies = [], onMovieClick }: Props) => {
    // Guard: if movies is undefined or not an array, treat as empty
    if (!Array.isArray(movies) || movies.length === 0) {
        return <p className="text-cream/70 text-center py-8">No movies found.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => onMovieClick(movie.id)}
                />
            ))}
        </div>
    );
};' '

export default MovieList;