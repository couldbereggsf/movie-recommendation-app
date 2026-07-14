import { useAuth0 } from '@auth0/auth0-react';

export const AuthStatus = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <div className="flex items-center gap-4">
            {isAuthenticated ? (
                <>
                    <span className="text-cream">{user?.name}</span>
                    <button
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        className="px-4 py-2 bg-burnt text-cream rounded hover:opacity-80"
                    >
                        Log Out
                    </button>
                </>
            ) : (
                <button
                    onClick={() => loginWithRedirect()}
                    className="px-4 py-2 bg-amber text-forest font-bold rounded hover:opacity-80"
                >
                    Log In
                </button>
            )}
        </div>
    );
};