import type { Movie } from '../../../services/movieService';

interface Props {
    movie: Movie;
    onClick?: () => void;
}

export const MovieCard = ({ movie, onClick }: Props) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : '/placeholder-poster.png';

    return (
        <div
            onClick={onClick}
            className="bg-forest-light rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
        >
            <img src={posterUrl} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="font-display text-xl text-cream">{movie.title}</h3>
                <p className="text-sm text-amber">{movie.release_date?.slice(0, 4)}</p>
                <p className="text-sm text-cream/80 line-clamp-3 mt-2">{movie.overview}</p>
            </div>
        </div>
    );
};