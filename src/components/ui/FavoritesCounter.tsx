import { Link } from 'react-router-dom';
import { useMovieStore } from '../../store/movieStore';

const FavoritesCounter = () => {
    const { favorites } = useMovieStore();

    return (
        <Link to="/favorites" className="relative inline-flex items-center">
            ❤️
            {favorites.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-amber text-forest text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                </span>
            )}
        </Link>
    );
};

export default FavoritesCounter;