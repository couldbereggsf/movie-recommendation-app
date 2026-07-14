import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

export const Auth0ProviderWithRedirect = ({ children }: { children: React.ReactNode }) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const callbackUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId) {
        throw new Error('Auth0 environment variables are missing');
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: callbackUrl,
                audience: import.meta.env.VITE_AUTH0_AUDIENCE || undefined,
            }}
        >
            {children}
        </Auth0Provider>
    );
};