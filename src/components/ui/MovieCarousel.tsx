import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

interface MovieCarouselProps {
    movies: Movie[];
    title: string;
    subtitle?: string;
    viewAllLink?: string;
}

const MovieCarousel = ({ movies, title, subtitle, viewAllLink }: MovieCarouselProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth / 2;
            const newPosition = direction === 'left'
                ? scrollPosition - scrollAmount
                : scrollPosition + scrollAmount;

            containerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth',
            });
            setScrollPosition(newPosition);
        }
    };

    if (!movies || movies.length === 0) return null;

    return (
        <div className="py-8">
            <div className="flex justify-between items-center mb-6 px-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display text-cream flex items-center gap-3">
                        {title}
                        {subtitle && (
                            <span className="text-sm font-body text-cream/40 font-normal">{subtitle}</span>
                        )}
                    </h2>
                </div>
                {viewAllLink && (
                    <Link
                        to={viewAllLink}
                        className="text-amber hover:text-amber/80 text-sm font-medium transition-colors"
                    >
                        View All →
                    </Link>
                )}
            </div>

            <div className="relative group">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2"
                    aria-label="Scroll left"
                >
                    ‹
                </button>

                {/* Carousel Container */}
                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-4 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {movies.map((movie) => (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            className="flex-shrink-0 w-48 snap-start group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-amber/20 hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full aspect-[2/3] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-cream text-sm font-medium line-clamp-2">{movie.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 mr-2"
                    aria-label="Scroll right"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default MovieCarousel;