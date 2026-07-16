import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
    favorites: number[];
    toggleFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set, get) => ({
            favorites: [],
            toggleFavorite: (id) => {
                const current = get().favorites;
                if (current.includes(id)) {
                    set({ favorites: current.filter((fid) => fid !== id) });
                } else {
                    set({ favorites: [...current, id] });
                }
            },
            isFavorite: (id) => get().favorites.includes(id),
        }),
        { name: 'favorites-storage' }
    )
);