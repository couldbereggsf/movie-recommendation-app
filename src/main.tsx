import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import App from './App';
import './index.css';
dev
import { Auth0ProviderWithRedirect } from './lib/auth0';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
dev
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Auth0ProviderWithRedirect>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Auth0ProviderWithRedirect>

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    main
 main
  </React.StrictMode>
);