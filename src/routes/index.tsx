import { createBrowserRouter } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import MovieDetailsPage from './MovieDetailsPage';
import TestPage from '../pages/TestPage';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import FavoritesPage from '../pages/FavoritesPage';
import ErrorFallback from '../components/ui/ErrorFallback';

export const router = createBrowserRouter([
    { 
        path: '/', 
        element: <HomePage />, 
        errorElement: <ErrorFallback />,
    },
    {
        path: '/movies',
        element: <MovieListPage />,
        errorElement: <ErrorFallback />,
    },
    {
        path: '/movie/:id',
        element: <MovieDetailsPage />,
        errorElement: <ErrorFallback />,
    },
      { 
        path: '/test', 
        element: <TestPage />, 
        errorElement: <ErrorFallback />,
    },
    { 
        path: '/signup', 
        element: <SignUpPage />, 
        errorElement: <ErrorFallback />,
    },
    { 
        path: '/about', 
        element: <AboutPage />, 
        errorElement: <ErrorFallback />,
    },
    { 
        path: '/login', 
        element: <LoginPage />, 
        errorElement: <ErrorFallback />,
    },
    { 
        path: '/favorites', 
        element: <FavoritesPage />, 
        errorElement: <ErrorFallback />,
    },
]);