import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  Share2,
  Heart,
  Clock,
  Eye,
  Shield,
} from 'lucide-react';

// Mock data - will be replaced with Supabase query
const mockInitiative = {
  id: '1',
  title: 'Community Solar Garden Initiative',
  description:
    'Install solar panels in public spaces to power community centers and reduce energy costs. This initiative aims to make renewable energy accessible to all community members while reducing our collective carbon footprint.',
  location: 'Portland, OR',
  goal: 2000,
  current_participants: 1247,
  momentum_score: 87,
  categories: ['Environment', 'Community'],
  timeline: '6 months',
  created_at: '2025-01-15',
  creator: {
    name: 'Sarah Chen',
    avatar: null,
  },
};

const timelineItems = [
  {
    date: '2025-02-01',
    title: 'Community Meeting',
    description: 'First public gathering to discuss project scope',
    status: 'completed',
  },
  {
    date: '2025-03-15',
    title: 'Site Selection',
    description: 'Identify and evaluate potential installation locations',
    status: 'in_progress',
  },
  {
    date: '2025-04-01',
    title: 'Fundraising Campaign',
    description: 'Launch crowdfunding to cover installation costs',
    status: 'pending',
  },
  {
    date: '2025-05-15',
    title: 'Installation Begins',
    description: 'Start solar panel installation at selected sites',
    status: 'pending',
  },
];

const actionItems = [
  {
    title: 'Attend Community Rally',
    description: 'Join us at Pioneer Courthouse Square on March 20th',
    type: 'event',
    deadline: '2025-03-20',
  },
  {
    title: 'Share on Social Media',
    description: 'Help spread the word about our initiative',
    type: 'share',
  },
  {
    title: 'Donate to Fund',
    description: 'Contribute to equipment and installation costs',
    type: 'donation',
  },
];

export default async function InitiativeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Extract id from params (will be used for Supabase query)
  const { id } = await params;
  console.log('Initiative ID:', id); // Temporary logging for development
  
  const progressPercentage =
    (mockInitiative.current_participants / mockInitiative.goal) * 100;

  return (
    <div className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-neutral-900/50 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Digital Dome
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{mockInitiative.title}</h1>
              <p className="text-xl text-neutral-300 mb-4">
                {mockInitiative.description}
              </p>
              <div className="flex flex-wrap gap-4 text-neutral-400">
                <span className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {mockInitiative.location}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {mockInitiative.timeline}
                </span>
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  {mockInitiative.current_participants.toLocaleString()} participants
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-success text-2xl">
              <TrendingUp className="w-8 h-8" />
              <span className="font-bold">{mockInitiative.momentum_score}%</span>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-neutral-400">Progress to goal</span>
              <span className="font-mono font-bold">
                {mockInitiative.current_participants.toLocaleString()} /{' '}
                {mockInitiative.goal.toLocaleString()}
              </span>
            </div>
            <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-success transition-all"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Categories & Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            {mockInitiative.categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-600 transition-all shadow-lg">
              Join Initiative
            </button>
            <button className="px-6 py-3 glass glass-hover rounded-full transition-all flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
            <button className="px-6 py-3 glass glass-hover rounded-full transition-all flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Support</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-primary" />
                Timeline
              </h2>
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          item.status === 'completed'
                            ? 'bg-success'
                            : item.status === 'in_progress'
                            ? 'bg-primary'
                            : 'bg-neutral-700'
                        }`}
                      >
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <Clock className="w-5 h-5 text-white" />
                        )}
                      </div>
                      {index < timelineItems.length - 1 && (
                        <div className="w-0.5 h-20 bg-neutral-700 my-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-sm text-neutral-400 mb-1">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-neutral-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Items */}
            <div className="glass rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">How You Can Help</h2>
              <div className="space-y-4">
                {actionItems.map((action, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <h3 className="font-bold mb-2">{action.title}</h3>
                    <p className="text-sm text-neutral-300 mb-3">{action.description}</p>
                    {action.deadline && (
                      <div className="flex items-center text-sm text-neutral-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(action.deadline).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organizer */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-4">Organized By</h3>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">{mockInitiative.creator.name}</div>
                  <div className="text-sm text-neutral-400">Lead Coordinator</div>
                </div>
              </div>
            </div>

            {/* Transparency Metrics */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-4">Transparency Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-neutral-300">
                    <Eye className="w-5 h-5 mr-2 text-success" />
                    Visibility
                  </span>
                  <span className="font-bold text-success">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-neutral-300">
                    <Shield className="w-5 h-5 mr-2 text-success" />
                    Shadow Bans
                  </span>
                  <span className="font-bold text-success">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-neutral-300">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Coordinators
                  </span>
                  <span className="font-bold">2,341</span>
                </div>
              </div>
            </div>

            {/* Participants Preview */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold mb-4">Recent Participants</h3>
              <div className="flex -space-x-2 mb-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-700 border-2 border-neutral-950 flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <button className="w-full px-4 py-2 glass glass-hover rounded-lg text-sm transition-all">
                View All Participants
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
