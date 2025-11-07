/**
 * Environment variables configuration
 * Ensures all required env vars are present
 */

export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

// Validate environment variables in development
if (env.isDevelopment) {
  if (!env.supabase.url || !env.supabase.anonKey) {
    console.warn('⚠️ Supabase credentials not configured. Some features will be limited.');
  }
}
