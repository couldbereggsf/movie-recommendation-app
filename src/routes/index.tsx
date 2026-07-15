import { createBrowserRouter } from 'react-router-dom';
import MovieListPage from './MovieListPage';
import { MovieDetailsPage } from './MovieDetailsPage';
import TestPage from '../pages/TestPage';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import AboutPage from '../pages/AboutPage';


export const router = createBrowserRouter([
    { 
        path: '/', 
        element: <HomePage /> 
    },
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
    { 
        path: '/signup', 
        element: <SignUpPage /> 
    },
    { 
        path: '/about', 
        element: <AboutPage /> 
    },
]);