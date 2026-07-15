import { createBrowserRouter } from 'react-router-dom';
import MovieListPage from './MovieListPage'; 

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MovieListPage />,
    },
    {
        path: '/movie/:id',
        element: <div />, // placeholder
    },
]);