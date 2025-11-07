import Link from 'next/link';
import { ArrowRight, Users, Target, BarChart3, Lock, Eye, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Social Media for{' '}
            <span className="gradient-text">Collective Action</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto">
            Organize, coordinate, and achieve real-world change. No algorithms. No shadow bans. 
            Just transparent tools for movements that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-600 transition-all shadow-glass-lg flex items-center space-x-2 group"
            >
              <span className="text-lg font-semibold">Enter the Digital Dome</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/organize"
              className="px-8 py-4 glass glass-hover rounded-full transition-all flex items-center space-x-2"
            >
              <span className="text-lg font-semibold">Start Organizing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            A Different Kind of Social Platform
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Social Media */}
            <div className="glass rounded-2xl p-8 border-2 border-error/30">
              <h3 className="text-2xl font-bold mb-4 text-error">Traditional Social Media</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-error mr-2">✗</span>
                  <span>Algorithms prioritize engagement over impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">✗</span>
                  <span>Shadow bans and content suppression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">✗</span>
                  <span>Coordination tools are afterthoughts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">✗</span>
                  <span>Data sold to advertisers and third parties</span>
                </li>
              </ul>
            </div>

            {/* Collective */}
            <div className="glass rounded-2xl p-8 border-2 border-success/30">
              <h3 className="text-2xl font-bold mb-4 text-success">Collective</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>No algorithms—you see everything</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>100% visibility guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Purpose-built coordination tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✓</span>
                  <span>Community-funded, fully transparent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built for <span className="gradient-text">Real Change</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-8 hover:shadow-glass-lg transition-all">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Digital Dome</h3>
              <p className="text-neutral-300">
                Real-time visualization of all active initiatives. See momentum, track participation, 
                and discover movements aligned with your values.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:shadow-glass-lg transition-all">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Coordination Tools</h3>
              <p className="text-neutral-300">
                Action items, timelines, resource sharing, and role assignment. 
                Everything you need to turn plans into reality.
              </p>
            </div>

            <div className="glass rounded-xl p-8 hover:shadow-glass-lg transition-all">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Momentum Tracking</h3>
              <p className="text-neutral-300">
                Watch your initiative grow in real-time. Transparent metrics show 
                participation, engagement, and progress toward goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Radically <span className="gradient-text">Transparent</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Visibility</h3>
              <p className="text-neutral-300">Every post reaches every follower. No exceptions.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">0 Shadow Bans</h3>
              <p className="text-neutral-300">Your voice is never silenced or suppressed.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-2xl mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community-Funded</h3>
              <p className="text-neutral-300">No ads. No data selling. Funded by users who care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join thousands of organizers using Collective to coordinate real-world change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary-600 transition-all shadow-glass-lg"
            >
              Explore Active Initiatives
            </Link>
            <Link
              href="/funding"
              className="px-8 py-4 glass glass-hover rounded-full transition-all"
            >
              Support the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-neutral-400">
          <p>© 2025 Collective. Community-funded, radically transparent.</p>
          <div className="mt-4 space-x-6">
            <Link href="/funding" className="hover:text-primary transition-colors">Support Us</Link>
            <Link href="/organize" className="hover:text-primary transition-colors">Start Organizing</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Digital Dome</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
