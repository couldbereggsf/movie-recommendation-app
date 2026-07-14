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
        queryFn: () => movieService.getPopular(page).then(res => res.data),
    });
};

export const useSearchMovies = (query: string, page: number) => {
    return useQuery({
        queryKey: movieKeys.search(query, page),
        queryFn: () => movieService.searchMovies(query, page).then(res => res.data),
        enabled: !!query,
    });
};

export const useMovieDetails = (id: number) => {
    return useQuery({
        queryKey: movieKeys.details(id),
        queryFn: () => movieService.getMovieDetails(id).then(res => res.data),
    });
};