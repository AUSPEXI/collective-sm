import Link from 'next/link';
import { Heart, DollarSign, Users, TrendingUp, Shield, Eye, Github, ExternalLink } from 'lucide-react';

const sponsorshipTiers = [
  {
    name: 'Community Supporter',
    price: '$5',
    period: '/month',
    description: 'Help keep the lights on and support transparent organizing.',
    features: [
      'Supporter badge on profile',
      'Early access to new features',
      'Community forum access',
      'Monthly impact reports',
    ],
    color: 'from-primary-700 to-primary-600',
  },
  {
    name: 'Community Champion',
    price: '$15',
    period: '/month',
    description: 'Power the platform and amplify collective action.',
    features: [
      'Everything in Supporter',
      'Champion badge with custom color',
      'Priority support',
      'Vote on feature roadmap',
      'Quarterly video updates',
    ],
    color: 'from-primary-600 to-primary-500',
    popular: true,
  },
  {
    name: 'Community Builder',
    price: '$50',
    period: '/month',
    description: 'Become a cornerstone of the movement.',
    features: [
      'Everything in Champion',
      'Custom builder badge',
      'Direct line to dev team',
      'Annual in-person meetup invite',
      'Name in credits',
      'Exclusive swag package',
    ],
    color: 'from-primary-500 to-primary-400',
  },
];

const costBreakdown = [
  { category: 'Hosting & Infrastructure', percentage: 40, amount: '$2,400' },
  { category: 'Backend Services (Supabase)', percentage: 35, amount: '$2,100' },
  { category: 'Development Tools', percentage: 15, amount: '$900' },
  { category: 'Community Support', percentage: 10, amount: '$600' },
];

const whySupport = [
  {
    icon: Shield,
    title: 'No Compromises',
    description: 'Community funding means we answer to you, not advertisers or investors.',
  },
  {
    icon: Eye,
    title: 'Total Transparency',
    description: 'See exactly where every dollar goes. Open books, open source, open communication.',
  },
  {
    icon: Users,
    title: 'Build Together',
    description: 'Sponsors help shape the roadmap and direction of the platform.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Stable funding allows us to focus on impact, not monetization schemes.',
  },
];

export default function FundingPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support <span className="gradient-text">Collective</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Help us build a social platform that puts people and movements first. 
            Community-funded, radically transparent, and built for real change.
          </p>
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <Heart className="w-5 h-5 text-error animate-pulse" />
            <span>Funded by 2,341 community members</span>
          </div>
        </div>
      </div>

      {/* Sponsorship Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass rounded-2xl p-8 relative ${
                  tier.popular ? 'border-2 border-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`h-2 rounded-full bg-gradient-to-r ${tier.color} mb-6`} />
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-neutral-400 ml-1">{tier.period}</span>
                </div>
                <p className="text-neutral-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-success mr-2">✓</span>
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-bold transition-all ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/30'
                      : 'glass glass-hover'
                  }`}
                >
                  Become a {tier.name.split(' ')[1]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-time Options */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prefer a One-Time Contribution?</h2>
          <p className="text-neutral-300 mb-8">
            Every dollar helps. Support us through your favorite platform:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sponsors"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover rounded-full transition-all flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Sponsors</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://opencollective.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover rounded-full transition-all flex items-center justify-center space-x-2"
            >
              <DollarSign className="w-5 h-5" />
              <span>Open Collective</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://patreon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass glass-hover rounded-full transition-all flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Patreon</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Where Your Money Goes</h2>
          <p className="text-center text-neutral-300 mb-12 max-w-2xl mx-auto">
            Complete transparency. Here&apos;s exactly how we allocate funds (based on $6,000/month budget):
          </p>
          <div className="glass rounded-2xl p-8">
            <div className="space-y-6">
              {costBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.category}</span>
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-neutral-400">{item.amount}/mo</span>
                      <span className="font-bold text-primary">{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-400 transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex justify-between text-xl font-bold">
                <span>Total Monthly Costs</span>
                <span className="text-primary">$6,000</span>
              </div>
              <p className="text-sm text-neutral-400 mt-2">
                Updated monthly. View detailed breakdown in our{' '}
                <Link href="/costs" className="text-primary hover:underline">
                  transparency report
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why <span className="gradient-text">Community Funding</span> Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whySupport.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass rounded-xl p-6">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Thank You to Our Sponsors</h2>
          <p className="text-neutral-300 mb-12">
            These amazing people and organizations make Collective possible:
          </p>
          <div className="glass rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center"
                >
                  <Users className="w-8 h-8 text-primary" />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-neutral-400 mb-4">Your logo could be here</p>
              <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-600 transition-all">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Every contribution, no matter the size, helps us build a better platform for organizing change.
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-600 transition-all shadow-glass-lg text-lg font-semibold">
            Start Supporting Today
          </button>
        </div>
      </section>
    </div>
  );
}
