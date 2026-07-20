import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import App from './App';
import './index.css';
import { Auth0ProviderWithRedirect } from './lib/auth0';

console.log('🔍 Debug: Checking environment variables...');
console.log('VITE_TMDB_API_KEY:', import.meta.env.VITE_TMDB_API_KEY ? '✅ DEFINED' : '❌ MISSING');
console.log('VITE_AUTH0_DOMAIN:', import.meta.env.VITE_AUTH0_DOMAIN ? '✅ DEFINED' : '❌ MISSING');
console.log('VITE_AUTH0_CLIENT_ID:', import.meta.env.VITE_AUTH0_CLIENT_ID ? '✅ DEFINED' : '❌ MISSING');



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0ProviderWithRedirect>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0ProviderWithRedirect>
  </React.StrictMode>
);