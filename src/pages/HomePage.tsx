import { Link, useNavigate } from 'react-router-dom';
import { usePopularMovies } from '../features/movies/hooks/useMovies';
import { Loader } from '../components/ui/Loader';
import Footer from '../components/ui/Footer';
import Membership from '../components/ui/Membership';
import { useEffect, useState } from 'react';
import MovieCarousel from '../components/ui/MovieCarousel';

const HomePage = () => {
    const navigate = useNavigate();
    const { data, isLoading } = usePopularMovies(1);

    // Live counter states
    const [movieCount, setMovieCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [ratingCount, setRatingCount] = useState(0);

    // Target values (they will come from an API later on in my development, but for now, they are hardcoded)
    const TARGET_MOVIES = 12847;
    const TARGET_USERS = 4892;
    const TARGET_RATINGS = 27341;

    // Count-up animation effect
    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const interval = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setMovieCount(Math.round(TARGET_MOVIES * progress));
            setUserCount(Math.round(TARGET_USERS * progress));
            setRatingCount(Math.round(TARGET_RATINGS * progress));
            if (step >= steps) {
                setMovieCount(TARGET_MOVIES);
                setUserCount(TARGET_USERS);
                setRatingCount(TARGET_RATINGS);
                clearInterval(timer);
            }
        }, interval);
        return () => clearInterval(timer);
    }, []);

    const scrollToMembership = () => {
        const membershipSection = document.getElementById('membership-section');
        if (membershipSection) {
            membershipSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Mock stats (hardcoded for now, will be dynamic later)
    const stats = [
        { label: 'Movies in Database', value: '12,847' },
        { label: 'Active Users', value: '4,892' },
        { label: 'Ratings Submitted', value: '27,341' },
    ];

    // Mock staff picks (hardcoded for now)
    const staffPicks = [
        { id: 1, title: 'Inception', year: 2010 },
        { id: 2, title: 'The Matrix', year: 1999 },
        { id: 3, title: 'Interstellar', year: 2014 },
        { id: 4, title: 'The Dark Knight', year: 2008 },
    ];

    return (
        <div className="min-h-svh bg-forest">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-forest-light/30 to-transparent py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="uppercase tracking-[0.3em] text-amber text-xs font-body mb-4">
                        The Reggs Ltd
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl text-cream mb-6">
                        CineMatch
                    </h1>
                    <p className="font-body text-cream/70 max-w-2xl mx-auto text-lg mb-8">
                        Discover your next favorite movie. Curated recommendations, staff picks, and a community of film lovers.
                    </p>
                    <Link
                        to="/movies"
                        className="inline-block px-8 py-4 bg-amber text-forest font-bold rounded-2xl shadow-lg hover:shadow-amber/30 hover:scale-105 transition-all duration-300"
                    >
                        Browse All Movies
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-forest-light/30 backdrop-blur-sm p-6 rounded-2xl border border-cream/10">
                            <p className="text-3xl md:text-4xl font-display text-amber">{stat.value}</p>
                            <p className="text-cream/60 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trending Movies Carousel */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-display text-cream mb-6 flex items-center gap-3">
                        🔥 Trending Now
                        <span className="text-sm font-body text-cream/40 font-normal">(Popular this week)</span>
                    </h2>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {data?.results?.slice(0, 6).map((movie: any) => (
                                <Link
                                    key={movie.id}
                                    to={`/movie/${movie.id}`}
                                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-amber/20 hover:scale-105 transition-all duration-300"
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full aspect-[2/3] object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                        <p className="text-cream text-sm font-medium line-clamp-2">{movie.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Staff Picks */}
            <section className="py-12 px-4 bg-forest-light/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-display text-cream mb-6">
                        ⭐ Staff Picks
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {staffPicks.map((movie) => (
                            <div
                                key={movie.id}
                                className="bg-forest-light/40 p-6 rounded-2xl border border-cream/10 hover:border-amber/30 transition-all duration-300"
                            >
                                <h3 className="text-cream font-bold text-lg">{movie.title}</h3>
                                <p className="text-cream/50 text-sm">{movie.year}</p>
                                <p className="text-cream/70 text-sm mt-2">⭐ Recommended by our team</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Membership />

            {/* Call to Action */}
            <section className="py-16 px-4 text-center bg-gradient-to-t from-forest-light/20 to-transparent">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display text-cream mb-4">
                        Join The Reggs Community
                    </h2>
                    <p className="text-cream/70 mb-6">
                        Get personalized recommendations, rate movies, and connect with fellow film enthusiasts.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button 
                            onClick={() => navigate('/signup')}
                        className="px-6 py-3 bg-amber text-forest font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber/30">
                            Sign Up Free
                        </button>
                        <button 
                            onClick={scrollToMembership}
                        className="px-6 py-3 border border-cream/30 text-cream rounded-2xl hover:bg-cream/10 hover:scale-105 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;