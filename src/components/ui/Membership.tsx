import { useNavigate } from 'react-router-dom';


const Membership = () => {
    const navigate = useNavigate();
    const tiers = [
        {
            name: 'Free',
            price: '$0',
            features: ['Browse movies', 'Basic search', 'Read reviews'],
            button: 'Current Plan',
            popular: false,
        },
        {
            name: 'Premium',
            price: '$4.99',
            features: ['Everything in Free', 'Ad-free experience', 'Personalized recommendations', 'Watchlist'],
            button: 'Upgrade',
            popular: true,
        },
        {
            name: 'Pro',
            price: '$9.99',
            features: ['Everything in Premium', 'Early access to new features', 'Exclusive content', 'Priority support'],
            button: 'Upgrade',
            popular: false,
        },
    ];

    return (
        <section className="py-16 px-4 bg-linear-to-b from-forest-light/20 to-transparent">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display text-cream mb-4">
                    Choose Your Plan
                </h2>
                <p className="text-cream/70 mb-12">Unlock the full CineMatch experience</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`bg-forest-light/30 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 ${tier.popular
                                    ? 'border-amber shadow-2xl shadow-amber/20 scale-105'
                                    : 'border-cream/10 hover:border-cream/30'
                                }`}
                        >
                            {tier.popular && (
                                <p className="text-amber text-xs uppercase tracking-widest mb-2">Most Popular</p>
                            )}
                            <h3 className="text-2xl font-display text-cream">{tier.name}</h3>
                            <p className="text-4xl font-display text-amber mt-4">{tier.price}</p>
                            <p className="text-cream/50 text-sm">per month</p>
                            <ul className="mt-6 space-y-2 text-cream/70 text-sm">
                                {tier.features.map((feature) => (
                                    <li key={feature}>✓ {feature}</li>
                                ))}
                            </ul>
                            <button
                                onClick={() => navigate('/signup')}
                                className={`mt-8 w-full py-3 rounded-2xl font-bold transition-all duration-300 ${tier.popular
                                    ? 'bg-amber text-forest hover:shadow-lg hover:shadow-amber/30 hover:scale-105'
                                    : 'border border-cream/30 text-cream hover:bg-cream/10 hover:scale-105'
                                }`}
                            >
                                {tier.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Membership;