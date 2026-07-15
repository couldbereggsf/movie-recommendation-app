import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-svh bg-forest flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-forest-light/30 backdrop-blur-sm p-8 rounded-2xl border border-cream/10">
                <h1 className="text-3xl font-display text-cream text-center mb-2">Welcome Back</h1>
                <p className="text-cream/60 text-center mb-6">Log in to your CineMatch account</p>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl bg-forest-light/50 text-cream border border-cream/20 focus:border-amber focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-xl bg-forest-light/50 text-cream border border-cream/20 focus:border-amber focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-amber text-forest font-bold rounded-xl hover:bg-amber/80 transition-colors"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-cream/50 text-center text-sm mt-4">
                    Don't have an account? <Link to="/signup" className="text-amber hover:underline">Sign Up</Link>
                </p>
                <div className="mt-6 text-center">
                    <Link to="/" className="text-cream/40 hover:text-cream/70 text-sm">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;