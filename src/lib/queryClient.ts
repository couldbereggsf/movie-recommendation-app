import { QueryClient } from '@tanstack/react-query';

// Central React Query client — this is our data-fetching cache layer.
// staleTime keeps movie data fresh for 5 minutes before a background refetch,
// gcTime keeps unused cache entries around for 30 minutes so pagination/back
// navigation doesn't re-fetch already-seen pages.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
