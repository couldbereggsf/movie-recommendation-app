import { useQuery } from '@tanstack/react-query';
import { movieService } from '../../../services/movieService';

export const movieKeys = {
    all: ['movies'] as const,
    popular: (page: number) => [...movieKeys.all, 'popular', page] as const,
    search: (query: string, page: number) => [...movieKeys.all, 'search', query, page] as const,
    details: (id: number) => [...movieKeys.all, 'details', id] as const,
};

export const usePopularMovies = (page: number) => {
    return useQuery({
        queryKey: movieKeys.popular(page),
        queryFn: () => movieService.getPopular(page).catch((err) => {
            console.error('usePopularMovies error:', err);
            throw err; // Still throw so React Query knows it failed
          }),
    });
};

export const useSearchMovies = (query: string, page: number) => {
    return useQuery({
        queryKey: movieKeys.search(query, page),
        queryFn: () => movieService.searchMovies(query, page).catch((err) => {
            console.error('useSearchMovies error:', err);
            throw err;
          }),
          enabled: !!query, // Only run this query if there's a search query
    });
};

export const useMovieDetails = (id: number) => {
    return useQuery({
        queryKey: movieKeys.details(id),
        queryFn: () => movieService.getMovieDetails(id).catch((err) => {
            console.error('useMovieDetails error:', err);
            throw err;
        }),
    });
};