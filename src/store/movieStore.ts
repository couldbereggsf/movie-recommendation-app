import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MovieStore {
    favorites: number[]; // Array of movie IDs
    toggleFavorite: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
}

export const useMovieStore = create<MovieStore>()(
    persist(
        (set, get) => ({
            favorites: [],
            toggleFavorite: (movieId) =>
                set((state) => ({
                    favorites: state.favorites.includes(movieId)
                        ? state.favorites.filter((id) => id !== movieId)
                        : [...state.favorites, movieId],
                })),
            isFavorite: (movieId) => get().favorites.includes(movieId),
        }),
        {
            name: 'movie-favorites', // unique name for the storage
        }
    )
);