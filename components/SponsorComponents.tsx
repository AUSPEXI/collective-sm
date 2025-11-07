// Sponsor Badge Component
// Shows sponsor tier and unlocks premium features

'use client';

import { ReactNode } from 'react';

interface SponsorBadgeProps {
  tier: 'supporter' | 'champion' | 'builder' | 'institutional' | null;
  children: ReactNode;
  className?: string;
}

// Sponsor Tier Definitions
const SPONSOR_TIERS = {
  supporter: {
    name: 'Community Supporter',
    color: '#34C759',
    icon: '👤',
    benefits: [
      'Early feature access',
      'Private Discord',
      'README recognition'
    ]
  },
  champion: {
    name: 'Community Champion',
    color: '#007AFF',
    icon: '⭐',
    benefits: [
      'All Supporter benefits',
      'Website recognition',
      'Advanced analytics',
      'Custom templates',
      'Priority support'
    ]
  },
  builder: {
    name: 'Community Builder',
    color: '#FF9500',
    icon: '🏗️',
    benefits: [
      'All Champion benefits',
      'Builders wall recognition',
      'API access',
      'Strategy calls',
      'Beta features',
      'Custom branding'
    ]
  },
  institutional: {
    name: 'Institutional Partner',
    color: '#8E44AD',
    icon: '🏛️',
    benefits: [
      'All Builder benefits',
      'Custom development',
      'White-label options',
      'Dedicated support',
      'Co-marketing',
      'Quarterly reviews'
    ]
  }
};

export function SponsorBadge({ tier, children, className = '' }: SponsorBadgeProps) {
  if (!tier) {
    return <>{children}</>;
  }

  const tierInfo = SPONSOR_TIERS[tier];

  return (
    <div className={`relative group ${className}`}>
      {children}
      
      {/* Sponsor Badge */}
      <div 
        className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-neutral-900 flex items-center justify-center text-xs"
        style={{ backgroundColor: tierInfo.color }}
        title={`${tierInfo.name} - Active Sponsor`}
      >
        {tierInfo.icon}
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
        <div className="font-semibold" style={{ color: tierInfo.color }}>
          {tierInfo.name}
        </div>
        <div className="mt-1 text-neutral-300">
          {tierInfo.benefits.slice(0, 2).map((benefit, index) => (
            <div key={index}>• {benefit}</div>
          ))}
          {tierInfo.benefits.length > 2 && (
            <div>• +{tierInfo.benefits.length - 2} more benefits</div>
          )}
        </div>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800"></div>
      </div>
    </div>
  );
}

// Premium Feature Gate Component
interface PremiumGateProps {
  tier: 'supporter' | 'champion' | 'builder' | 'institutional' | null;
  requiredTier: 'supporter' | 'champion' | 'builder' | 'institutional';
  children: ReactNode;
  fallback?: ReactNode;
}

const TIER_HIERARCHY = {
  null: 0,
  supporter: 1,
  champion: 2,
  builder: 3,
  institutional: 4
};

export function PremiumGate({ tier, requiredTier, children, fallback }: PremiumGateProps) {
  const userTier = tier || null;
  const userLevel = TIER_HIERARCHY[userTier];
  const requiredLevel = TIER_HIERARCHY[requiredTier];
  
  const hasAccess = userLevel >= requiredLevel;
  
  if (hasAccess) {
    return <>{children}</>;
  }
  
  if (fallback) {
    return <>{fallback}</>;
  }
  
  return (
    <div className="p-4 border border-yellow-500/30 rounded-lg bg-yellow-500/5">
      <div className="flex items-center gap-2 text-yellow-400 mb-2">
        <span className="text-lg">🔒</span>
        <span className="font-semibold">Premium Feature</span>
      </div>
      <p className="text-neutral-300 text-sm mb-3">
        This feature requires {SPONSOR_TIERS[requiredTier].name} tier or higher.
      </p>
      <button className="px-4 py-2 bg-yellow-500 text-neutral-900 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-colors">
        Upgrade to {SPONSOR_TIERS[requiredTier].name}
      </button>
    </div>
  );
}

// Sponsor Status Component
interface SponsorStatusProps {
  tier: 'supporter' | 'champion' | 'builder' | 'institutional' | null;
  onUpgrade?: () => void;
}

export function SponsorStatus({ tier, onUpgrade }: SponsorStatusProps) {
  if (!tier) {
    return (
      <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800/50">
        <div className="flex items-center gap-2 text-neutral-400 mb-2">
          <span className="text-lg">👤</span>
          <span className="font-semibold">Community Member</span>
        </div>
        <p className="text-neutral-400 text-sm mb-3">
          Support Collective to unlock premium features and help keep the platform sustainable.
        </p>
        <button 
          onClick={onUpgrade}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold text-sm hover:bg-primary-600 transition-colors"
        >
          Become a Sponsor
        </button>
      </div>
    );
  }
  
  const tierInfo = SPONSOR_TIERS[tier];
  
  return (
    <div className="p-4 border border-primary-500/30 rounded-lg bg-primary-500/5">
      <div className="flex items-center gap-2 text-primary-400 mb-2">
        <span className="text-lg">{tierInfo.icon}</span>
        <span className="font-semibold">{tierInfo.name}</span>
      </div>
      <p className="text-neutral-300 text-sm mb-3">
        Thank you for supporting Collective! You have access to:
      </p>
      <ul className="text-neutral-300 text-sm space-y-1 mb-3">
        {tierInfo.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-primary-400">✓</span>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="text-xs text-neutral-500">
        Thanks for making Collective sustainable! 🏛️
      </div>
    </div>
  );
}

// Advanced Analytics Component (Champion+)
export function AdvancedAnalytics() {
  return (
    <PremiumGate tier={null} requiredTier="champion">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary-400">Advanced Analytics</h3>
        
        {/* Engagement Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-neutral-800 rounded-lg">
            <div className="text-2xl font-bold text-success-500">87%</div>
            <div className="text-sm text-neutral-400">Cross-Community Bridge Building</div>
            <div className="text-xs text-neutral-500 mt-1">+12% from last month</div>
          </div>
          
          <div className="p-3 bg-neutral-800 rounded-lg">
            <div className="text-2xl font-bold text-primary-500">2.3x</div>
            <div className="text-sm text-neutral-400">Initiative Success Rate</div>
            <div className="text-xs text-neutral-500 mt-1">vs. individual posts</div>
          </div>
          
          <div className="p-3 bg-neutral-800 rounded-lg">
            <div className="text-2xl font-bold text-warning-500">156</div>
            <div className="text-sm text-neutral-400">Active Coordinators</div>
            <div className="text-xs text-neutral-500 mt-1">This month</div>
          </div>
        </div>
        
        {/* Momentum Trends */}
        <div className="p-4 bg-neutral-800 rounded-lg">
          <h4 className="font-semibold mb-2">Momentum Trends</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-300">Environmental Action</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-neutral-700 rounded">
                  <div className="w-4/5 h-full bg-success-500 rounded"></div>
                </div>
                <span className="text-sm text-success-500">85%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-300">Digital Rights</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-neutral-700 rounded">
                  <div className="w-3/5 h-full bg-primary-500 rounded"></div>
                </div>
                <span className="text-sm text-primary-500">67%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-300">Community Support</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-neutral-700 rounded">
                  <div className="w-full h-full bg-warning-500 rounded"></div>
                </div>
                <span className="text-sm text-warning-500">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PremiumGate>
  );
}

// Custom Templates Component (Champion+)
export function CustomTemplates() {
  return (
    <PremiumGate tier={null} requiredTier="champion">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-primary-400">Custom Initiative Templates</h3>
          <button className="px-3 py-1 text-xs bg-primary-500 text-white rounded hover:bg-primary-600">
            Create New Template
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Template Card */}
          <div className="p-4 bg-neutral-800 rounded-lg border border-primary-500/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🌱</span>
              <h4 className="font-semibold">Environmental Action Template</h4>
            </div>
            <p className="text-sm text-neutral-400 mb-3">
              Pre-configured for environmental initiatives with location tracking and resource sharing.
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-success-500 text-white rounded hover:bg-success-600">
                Use Template
              </button>
              <button className="px-3 py-1 text-xs border border-neutral-600 text-neutral-300 rounded hover:border-neutral-500">
                Edit
              </button>
            </div>
          </div>
          
          {/* Template Card */}
          <div className="p-4 bg-neutral-800 rounded-lg border border-primary-500/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📚</span>
              <h4 className="font-semibold">Education Campaign Template</h4>
            </div>
            <p className="text-sm text-neutral-400 mb-3">
              Designed for educational initiatives with progress tracking and resource library.
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-success-500 text-white rounded hover:bg-success-600">
                Use Template
              </button>
              <button className="px-3 py-1 text-xs border border-neutral-600 text-neutral-300 rounded hover:border-neutral-500">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </PremiumGate>
  );
}

// Priority Support Component (Builder+)
export function PrioritySupport() {
  return (
    <PremiumGate tier={null} requiredTier="builder">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary-400">Priority Support</h3>
        
        <div className="p-4 bg-neutral-800 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-success-500 rounded-full"></div>
            <span className="text-sm font-semibold text-success-400">Active Support Channel</span>
          </div>
          
          <p className="text-neutral-300 text-sm mb-3">
            As a Community Builder, you have direct access to our support team and priority issue resolution.
          </p>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-400">Average Response Time</span>
              <span className="text-success-400">2.3 hours</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-400">Resolution Rate</span>
              <span className="text-success-400">94%</span>
            </div>
          </div>
          
          <button className="mt-3 w-full px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold text-sm hover:bg-primary-600">
            Contact Support Team
          </button>
        </div>
      </div>
    </PremiumGate>
  );
}

export { SPONSOR_TIERS, TIER_HIERARCHY };