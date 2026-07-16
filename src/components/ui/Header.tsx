import { Link } from 'react-router-dom';
import { useMovieStore } from '../../store/movieStore';

const Header = () => {
    const { favorites } = useMovieStore();

    return (
        <header className="bg-forest-light/30 border-b border-cream/10 px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="font-display text-xl text-cream hover:text-amber transition-colors">
                    🎬 CineMatch
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/movies" className="text-cream/70 hover:text-cream transition-colors text-sm">
                        Movies
                    </Link>
                    <Link to="/favorites" className="relative text-cream/70 hover:text-cream transition-colors flex items-center gap-1">
                        ❤️
                        {favorites.length > 0 && (
                            <span className="absolute -top-2 -right-4 bg-amber text-forest text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {favorites.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;