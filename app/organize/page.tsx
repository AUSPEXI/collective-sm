'use client';

import { useState } from 'react';
import { Target, MapPin, Users, Calendar, Tag, FileText } from 'lucide-react';

const categories = [
  'Environment',
  'Social Justice',
  'Technology',
  'Housing',
  'Healthcare',
  'Education',
  'Democracy',
];

const locations = [
  'Portland, OR',
  'San Francisco, CA',
  'Austin, TX',
  'Chicago, IL',
  'New York, NY',
  'Seattle, WA',
  'Boston, MA',
  'Denver, CO',
];

const timelines = ['3 months', '6 months', '9 months', '1 year', '18 months', '2 years'];

export default function OrganizePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [goal, setGoal] = useState(1000);
  const [timeline, setTimeline] = useState('6 months');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase when credentials are available
    console.log({
      title,
      description,
      location,
      goal,
      timeline,
      categories: selectedCategories,
    });
    alert('Initiative created! (Mock - will integrate with Supabase)');
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Organize</span> Your Initiative
          </h1>
          <p className="text-xl text-neutral-300">
            Turn your vision into action. Create a new initiative and start building momentum.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div className="glass rounded-xl p-6">
              <label className="flex items-center text-lg font-bold mb-3">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Initiative Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Community Solar Garden Initiative"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Description */}
            <div className="glass rounded-xl p-6">
              <label className="flex items-center text-lg font-bold mb-3">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your initiative, its goals, and why it matters..."
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                required
              />
              <p className="text-sm text-neutral-400 mt-2">
                {description.length} / 500 characters
              </p>
            </div>

            {/* Location */}
            <div className="glass rounded-xl p-6">
              <label className="flex items-center text-lg font-bold mb-3">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                required
              >
                <option value="">Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="bg-neutral-900">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Goal */}
            <div className="glass rounded-xl p-6">
              <label className="flex items-center text-lg font-bold mb-3">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Participant Goal: <span className="ml-2 text-primary">{goal.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="10"
                max="10000"
                step="10"
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-neutral-400 mt-2">
                <span>10</span>
                <span>10,000</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass rounded-xl p-6">
              <label className="flex items-center text-lg font-bold mb-3">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Timeline
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timelines.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      timeline === t
                        ? 'bg-primary text-white'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="glass rounded-xl p-6">
              <label className="flex items-center text-lg font-bold mb-3">
                <Tag className="w-5 h-5 mr-2 text-primary" />
                Categories
              </label>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategories.includes(cat)
                        ? 'bg-primary text-white'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <p className="text-sm text-neutral-400 mt-3">
                Selected: {selectedCategories.length} / 7
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 px-6 py-3 glass glass-hover rounded-full transition-all"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-600 transition-all shadow-lg shadow-primary/30"
              >
                Launch Initiative
              </button>
            </div>
          </form>

          {/* Sidebar - Best Practices */}
          <aside className="space-y-6">
            <div className="glass rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Best Practices</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-primary mb-1">Clear Goals</h4>
                  <p className="text-neutral-300">
                    Define specific, measurable objectives that participants can rally around.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Realistic Timeline</h4>
                  <p className="text-neutral-300">
                    Choose a timeframe that allows for meaningful progress without losing momentum.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Actionable Steps</h4>
                  <p className="text-neutral-300">
                    Break down your initiative into concrete actions people can take immediately.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Transparency</h4>
                  <p className="text-neutral-300">
                    Regular updates and open communication build trust and engagement.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Community First</h4>
                  <p className="text-neutral-300">
                    Listen to feedback and be willing to adapt based on participant input.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm text-neutral-300">
                  Need help? Our community coordinators are available 24/7 to assist with 
                  initiative planning and strategy.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
