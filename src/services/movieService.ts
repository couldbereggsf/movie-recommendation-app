//import { apiClient } from './apiClient';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

if (!API_KEY) {
  console.error('❌ VITE_TMDB_API_KEY is missing!');
}

const BASE_URL = 'https://api.themoviedb.org/3';
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
    getPopular: (page: number = 1) => {
        return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
            .then((res) => {
                if (!res.ok) {
                    console.error('TMDB API error:', res.status, res.statusText);
                    return res.text().then(text => {
                        console.error('Error body:', text);
                        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                    });
                }
                return res.json();
            });
              },

    searchMovies: (query: string, page: number = 1) => {
        return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`)
            .then((res) => {
                if (!res.ok) {
                    console.error('TMDB API error:', res.status, res.statusText);
                    return res.text().then(text => {
                        console.error('Error body:', text);
                        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                    });
                }
                return res.json();
            });
    },

    getMovieDetails: (id: number) => {
        return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
            .then((res) => {
                if (!res.ok) {
                    console.error('TMDB API error:', res.status, res.statusText);
                    return res.text().then(text => {
                        console.error('Error body:', text);
                        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
                    });
                }
                return res.json();
            });
    },
};