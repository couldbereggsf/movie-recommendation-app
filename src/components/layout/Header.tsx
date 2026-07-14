import { AuthStatus } from '../../features/auth/components/AuthStatus';

export const Header = () => {
    return (
        <header className="bg-forest-light border-b border-olive py-4 px-6 flex justify-between items-center">
            <h1 className="font-display text-2xl text-amber">CineMatch</h1>
            <AuthStatus />
        </header>
    );
};