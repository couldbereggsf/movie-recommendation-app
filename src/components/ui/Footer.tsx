import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // I will store in localStorage for now (then send to API later)
            const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
            subscribers.push(email);
            localStorage.setItem('subscribers', JSON.stringify(subscribers));
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-forest-light/30 border-t border-cream/10 py-12 px-4 mt-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-display text-2xl text-cream mb-2">CineMatch</h3>
                        <p className="text-cream/50 text-sm">Your personal movie recommendation engine.</p>
                    </div>
                    <div>
                        <h4 className="text-cream font-bold mb-2">Quick Links</h4>
                        <ul className="space-y-1 text-cream/50 text-sm">
                            <li><Link to="/movies" className="hover:text-cream transition-colors">Browse Movies</Link></li>
                            <li><Link to="/" className="hover:text-cream transition-colors">Home</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-cream font-bold mb-2">Subscribe to Our Newsletter</h4>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-4 py-2 rounded-xl bg-forest-light/50 text-cream border border-cream/20 focus:border-amber focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-amber text-forest font-bold rounded-xl hover:bg-amber/80 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        {subscribed && (
                            <p className="text-green-400 text-sm mt-2">✓ Subscribed successfully!</p>
                        )}
                    </div>
                </div>
                <div className="border-t border-cream/10 mt-8 pt-6 text-center text-cream/30 text-xs">
                    © {new Date().getFullYear()} The Reggs Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;