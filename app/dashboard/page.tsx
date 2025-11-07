import Link from 'next/link';
import {
  Search,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  Target,
  Bell,
  Settings,
  Activity,
} from 'lucide-react';

// Mock data - will be replaced with Supabase queries
const mockInitiatives = [
  {
    id: '1',
    title: 'Community Solar Garden Initiative',
    description: 'Install solar panels in public spaces to power community centers and reduce energy costs.',
    location: 'Portland, OR',
    goal: 2000,
    current_participants: 1247,
    momentum_score: 87,
    categories: ['Environment', 'Community'],
    timeline: '6 months',
  },
  {
    id: '2',
    title: 'Affordable Housing Coalition',
    description: 'Advocate for zoning reform and increased affordable housing development in the metro area.',
    location: 'San Francisco, CA',
    goal: 1500,
    current_participants: 892,
    momentum_score: 76,
    categories: ['Housing', 'Social Justice'],
    timeline: '1 year',
  },
  {
    id: '3',
    title: 'Public Transit Expansion Campaign',
    description: 'Push for expanded bus routes and increased frequency in underserved neighborhoods.',
    location: 'Austin, TX',
    goal: 3000,
    current_participants: 2156,
    momentum_score: 92,
    categories: ['Transportation', 'Democracy'],
    timeline: '9 months',
  },
  {
    id: '4',
    title: 'Digital Literacy Program',
    description: 'Free coding and computer skills classes for low-income youth and seniors.',
    location: 'Chicago, IL',
    goal: 1000,
    current_participants: 634,
    momentum_score: 68,
    categories: ['Education', 'Technology'],
    timeline: '3 months',
  },
];

const recentActivity = [
  { user: 'Sarah Chen', action: 'joined Community Solar Garden', time: '2 min ago' },
  { user: 'Marcus Johnson', action: 'completed action item for Transit Campaign', time: '8 min ago' },
  { user: 'Emily Rodriguez', action: 'started Digital Literacy Program', time: '15 min ago' },
  { user: 'David Kim', action: 'shared Affordable Housing Coalition', time: '23 min ago' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            The <span className="gradient-text">Digital Dome</span>
          </h1>
          <p className="text-xl text-neutral-300">
            Real-time view of all active initiatives. No algorithms—see everything.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-[250px_1fr_300px] gap-6">
          {/* Left Sidebar - Tools */}
          <aside className="space-y-4">
            <div className="glass rounded-xl p-4">
              <h3 className="font-bold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Coordination Tools
              </h3>
              <nav className="space-y-2">
                <Link href="/organize" className="block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  Start Initiative
                </Link>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  My Initiatives
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  Action Items
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  Resources
                </button>
              </nav>
            </div>

            <div className="glass rounded-xl p-4">
              <h3 className="font-bold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-primary" />
                Preferences
              </h3>
              <div className="space-y-3 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span>Desktop alerts</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span>Weekly digest</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content - Initiatives */}
          <main>
            {/* Search & Filters */}
            <div className="glass rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search initiatives by title, location, or category..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-neutral-400"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['All', 'Environment', 'Housing', 'Transportation', 'Education', 'Healthcare'].map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                      cat === 'All'
                        ? 'bg-primary text-white'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Initiatives Grid */}
            <div className="space-y-4">
              {mockInitiatives.map((initiative) => {
                const progressPercentage = (initiative.current_participants / initiative.goal) * 100;

                return (
                  <Link
                    key={initiative.id}
                    href={`/initiative/${initiative.id}`}
                    className="block glass rounded-xl p-6 glass-hover transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{initiative.title}</h3>
                        <p className="text-neutral-300 mb-3">{initiative.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {initiative.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {initiative.timeline}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {initiative.current_participants.toLocaleString()} participants
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-success">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-xl font-bold">{initiative.momentum_score}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-neutral-400">Progress to goal</span>
                        <span className="font-mono">
                          {initiative.current_participants.toLocaleString()} / {initiative.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-success transition-all"
                          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {initiative.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </main>

          {/* Right Sidebar - Activity */}
          <aside className="space-y-4">
            <div className="glass rounded-xl p-4">
              <h3 className="font-bold mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-primary" />
                Network Status
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Active Initiatives</span>
                  <span className="font-bold">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Total Participants</span>
                  <span className="font-bold">54,392</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Actions Completed</span>
                  <span className="font-bold">8,621</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Momentum Score</span>
                  <span className="font-bold text-success">82%</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-4">
              <h3 className="font-bold mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-primary" />
                Real-time Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-neutral-200">
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-neutral-500 text-xs mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
