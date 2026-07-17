import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../features/movies/hooks/useMovies';
import { Loader } from '../components/ui/Loader';
import { Link } from 'react-router-dom';
import { useMovieStore } from '../store/movieStore';

const MovieDetailsPage = () => {
    const { toggleFavorite, isFavorite } = useMovieStore();
    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);
    const { data: movie, isLoading, isError } = useMovieDetails(movieId);

    const favorited = isFavorite(movieId);

    if (isLoading) return <Loader />;
        if (isError) return <p className="text-burnt text-center py-8">Failed to load movie details.</p>;
    if (!movie) return <p className="text-cream/70 text-center py-8">Movie not found.</p>;


    const handleFavoriteToggle = () => {
        toggleFavorite(movieId);
    };


    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
        : '/placeholder-poster.png';

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/" className="text-amber hover:underline mb-4 inline-block">&larr; Back</Link>
            <div className="flex flex-col md:flex-row gap-8">
                <img src={posterUrl} alt={movie.title} className="w-64 h-auto rounded shadow-lg" />
                <div className="flex-1">
                    <h1 className="text-4xl font-display text-cream">{movie.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-cream/70 mt-2">
                        <span>{movie.release_date}</span>
                        <span>{movie.runtime} min</span>
                        <span>⭐ {movie.vote_average.toFixed(1)}</span>
                    </div>
                    <p className="mt-4 text-cream/90">{movie.overview}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {movie.genres?.map((g: { id: number; name: string }) => (
                            <span key={g.id} className="px-3 py-1 bg-olive rounded-full text-xs text-cream">
                                {g.name}
                            </span>
                        ))}
                    </div>
                    {/* Cast */}
                    {movie.credits?.cast && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-display text-amber">Cast</h2>
                            <div className="flex overflow-x-auto gap-4 py-4">
                                {movie.credits.cast.slice(0, 10).map((member: { id: number; name: string; profile_path: string; character: string }) => (
                                    <div key={member.id} className="shrink-0 w-24 text-center">
                                        <img
                                            src={
                                                member.profile_path
                                                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                                                    : '/placeholder-avatar.png'
                                            }
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full object-cover mx-auto"
                                        />
                                        <p className="text-xs text-cream mt-1">{member.name}</p>
                                        <p className="text-xs text-cream/60">{member.character}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Crew (director) */}
                    {movie.credits?.crew && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-display text-amber">Crew</h2>
                            <div className="flex flex-wrap gap-4 mt-2">
                                {movie.credits.crew.filter((m: { job: string }) => m.job === 'Director').map((member: { id: number; name: string; job: string }) => (
                                    <div key={member.id} className="text-cream">
                                        <span className="font-bold">{member.name}</span> — {member.job}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <button
                        onClick={handleFavoriteToggle}
                        className={`
    group relative px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300
    ${favorited
                                ? 'bg-linear-to-r from-rose-500/20 to-rose-600/20 text-rose-300 border-2 border-rose-400/50 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-500/20'
                                : 'bg-linear-to-r from-amber-500 to-amber-600 text-forest border-2 border-amber-400/50 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105'
                            }
    flex items-center gap-3
  `}
                    >
                        <span className="text-xl">
                            {favorited ? '❤️' : '🤍'}
                        </span>
                        <span>
                            {favorited ? 'Remove from Favorites' : 'Add to Favorites'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default MovieDetailsPage;