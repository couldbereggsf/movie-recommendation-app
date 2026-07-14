import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import App from './App';
import './index.css';
import { Auth0ProviderWithRedirect } from './lib/auth0';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0ProviderWithRedirect>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0ProviderWithRedirect>
  </React.StrictMode>
);