import { createBrowserRouter } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import { MovieDetailsPage } from './MovieDetailsPage';
import TestPage from '../pages/TestPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MovieListPage />,
    },
    {
        path: '/movie/:id',
        element: <MovieDetailsPage />,
    },
      { 
        path: '/test', 
        element: <TestPage /> 
    },
]);