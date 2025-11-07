/**
 * Database types for Collective platform
 * These types represent the Supabase database schema
 */

export interface Initiative {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  location: string;
  goal: number;
  current_participants: number;
  timeline: string;
  categories: string[];
  status: 'draft' | 'active' | 'completed' | 'archived';
  creator_id: string;
  momentum_score: number;
  // Relations
  creator?: UserProfile;
  actions?: Action[];
  participants?: Participant[];
}

export interface UserProfile {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  is_sponsor: boolean;
  sponsor_tier: 'community_supporter' | 'community_champion' | 'community_builder' | null;
  // Relations
  initiatives?: Initiative[];
  participations?: Participant[];
}

export interface Action {
  id: string;
  created_at: string;
  initiative_id: string;
  title: string;
  description: string;
  type: 'event' | 'task' | 'donation' | 'share' | 'other';
  deadline: string | null;
  status: 'pending' | 'in_progress' | 'completed';
  // Relations
  initiative?: Initiative;
}

export interface Participant {
  id: string;
  created_at: string;
  initiative_id: string;
  user_id: string;
  role: 'coordinator' | 'participant' | 'supporter';
  // Relations
  initiative?: Initiative;
  user?: UserProfile;
}

export interface ActivityFeed {
  id: string;
  created_at: string;
  user_id: string;
  initiative_id: string | null;
  action_type: 'joined' | 'created' | 'completed' | 'shared' | 'commented';
  content: string;
  // Relations
  user?: UserProfile;
  initiative?: Initiative;
}

// Request/Response types
export interface CreateInitiativeInput {
  title: string;
  description: string;
  location: string;
  goal: number;
  timeline: string;
  categories: string[];
}

export interface UpdateInitiativeInput {
  title?: string;
  description?: string;
  location?: string;
  goal?: number;
  timeline?: string;
  categories?: string[];
  status?: Initiative['status'];
}

export interface JoinInitiativeInput {
  initiative_id: string;
  role?: Participant['role'];
}
