import { apiClient } from './apiClient';

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
}

export interface MovieDetails extends Movie {
    runtime: number;
    genres: { id: number; name: string }[];
    credits?: {
        cast: CastMember[];
        crew: CrewMember[];
    };
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface CrewMember {
    id: number;
    name: string;
    job: string;
    department: string;
}

export interface ApiResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

export const movieService = {
    getPopular: (page = 1) =>
        apiClient.get<ApiResponse<Movie>>('/movie/popular', { params: { page } }),

    searchMovies: (query: string, page = 1) =>
        apiClient.get<ApiResponse<Movie>>('/search/movie', { params: { query, page } }),

    getMovieDetails: (id: number) =>
        apiClient.get<MovieDetails>(`/movie/${id}`, { params: { append_to_response: 'credits' } }),
};