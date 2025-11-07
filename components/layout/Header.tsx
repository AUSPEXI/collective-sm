'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Users, Target, Heart } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold gradient-text">Collective</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/dashboard')
                  ? 'text-primary'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/organize"
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/organize')
                  ? 'text-primary'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Organize</span>
            </Link>
            <Link
              href="/funding"
              className={`flex items-center space-x-2 transition-colors ${
                isActive('/funding')
                  ? 'text-primary'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Support Us</span>
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors shadow-lg shadow-primary/30"
          >
            Enter the Digital Dome
          </Link>
        </div>
      </div>
    </header>
  );
}
