import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="min-h-svh bg-forest px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="text-cream/40 hover:text-cream/70 text-sm inline-block mb-8">← Back to Home</Link>
                <h1 className="text-4xl font-display text-cream mb-4">About CineMatch</h1>
                <p className="text-cream/70 text-lg mb-6">
                    CineMatch is a movie recommendation app built by <span className="text-amber">The Reggs Ltd</span>.
                    Our mission is to help you discover films you'll love.
                </p>
                <div className="space-y-4 text-cream/60">
                    <p>
                        We aggregate data from TMDB (The Movie Database) and use intelligent algorithms to suggest
                        movies based on your taste. Whether you're into action, drama, comedy, or sci-fi, we've got you covered.
                    </p>
                    <p>
                        This project is being developed in phases – from authentication and movie listing to detailed views,
                        state management, and CI/CD. Stay tuned for regular updates!
                    </p>
                    <p className="text-cream/40 text-sm">
                        © {new Date().getFullYear()} The Reggs Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;