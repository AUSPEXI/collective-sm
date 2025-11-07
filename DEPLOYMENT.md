# Deployment Guide

This guide will help you deploy Collective to Vercel with a complete backend setup using Supabase.

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/collective)

## Prerequisites

Before deploying, ensure you have:

- **GitHub account** with your repository
- **Vercel account** (free tier works great)
- **Supabase account** (free tier includes everything you need)
- **Domain name** (optional, Vercel provides free subdomains)

## 🗄️ Step 1: Supabase Setup

### Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Note your project URL and anon key from Settings → API

### Database Schema

Create the following tables in your Supabase SQL editor:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  location TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Initiatives (collective actions)
CREATE TABLE public.initiatives (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT,
  category TEXT[],
  goal INTEGER DEFAULT 100,
  timeline TEXT,
  created_by UUID REFERENCES public.profiles(id),
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Initiative participants
CREATE TABLE public.participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  initiative_id UUID REFERENCES public.initiatives(id),
  user_id UUID REFERENCES public.profiles(id),
  role TEXT DEFAULT 'participant',
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(initiative_id, user_id)
);

-- Activity tracking
CREATE TABLE public.activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  initiative_id UUID REFERENCES public.initiatives(id),
  user_id UUID REFERENCES public.profiles(id),
  activity_type TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.initiatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed)
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Initiatives are viewable by everyone" ON public.initiatives FOR SELECT USING (true);
CREATE POLICY "Users can create initiatives" ON public.initiatives FOR INSERT WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Initiative creators can update" ON public.initiatives FOR UPDATE USING (auth.uid() = created_by);

CREATE POLICY "Participants are viewable" ON public.participants FOR SELECT USING (true);
CREATE POLICY "Users can join initiatives" ON public.participants FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can leave initiatives" ON public.participants FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Activities are viewable" ON public.activities FOR SELECT USING (true);
CREATE POLICY "Users can create activities" ON public.activities FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Enable real-time for live updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.initiatives;
ALTER PUBLICATION supabase_realtime ADD TABLE public.participants;
ALTER PUBLICATION supabase_realtime ADD TABLE public.activities;
```

## 🔧 Step 2: Vercel Deployment

### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com) and sign up
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**
   
   Add these environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

3. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at the provided URL

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: collective (or your choice)
# - In which directory? ./
# - Override settings? N
```

## 🔐 Step 3: Authentication Setup

### Enable Auth Providers in Supabase

1. Go to Authentication → Settings in Supabase dashboard
2. Enable Email authentication
3. Optionally enable OAuth providers (Google, GitHub, etc.)
4. Configure redirect URLs for your Vercel domain

### Update Allowed Origins

In Supabase Authentication settings:
- **Site URL**: `https://your-domain.vercel.app`
- **Additional Redirect URLs**: `https://your-domain.vercel.app/**`

## 🎨 Step 4: Custom Domain (Optional)

### Add Custom Domain to Vercel

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Update Supabase Settings

Update your Supabase authentication settings to include your custom domain.

## 📊 Step 5: Analytics & Monitoring

### Vercel Analytics

1. Go to Analytics tab in Vercel dashboard
2. Enable Web Analytics
3. View traffic and performance metrics

### Error Monitoring (Optional)

Add Sentry for error tracking:

```bash
npm install @sentry/nextjs
```

Configure in `sentry.client.config.ts` and `sentry.server.config.ts`.

## 🔄 Step 6: CI/CD Pipeline

Your Vercel deployment is automatically set up with:

- **Automatic deployments** on push to main branch
- **Preview deployments** for pull requests
- **Build optimization** and CDN distribution

## 📈 Step 7: Performance Optimization

### Vercel Optimization Features

- **Image Optimization**: Automatic with Next.js
- **Edge Network**: Global CDN distribution
- **Edge Functions**: Serverless functions at the edge
- **Bundle Analysis**: Available in dashboard

### Recommended Settings

1. **Enable Compression** (automatic)
2. **Configure Caching** headers in Next.js
3. **Use Static Generation** where possible
4. **Optimize Images** with Next.js Image component

## 🛡️ Security Configuration

### Environment Variables

Never commit sensitive data. Use Vercel's environment variable management.

### Security Headers

Add security headers in `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
```

## 🚀 Step 8: Launch Checklist

Before going live:

- [ ] Supabase database is set up and populated
- [ ] All environment variables are configured
- [ ] Authentication is working correctly
- [ ] Real-time features are functioning
- [ ] Error monitoring is active
- [ ] Custom domain is configured (if applicable)
- [ ] Analytics are tracking correctly
- [ ] Performance metrics are acceptable
- [ ] Security headers are in place
- [ ] Backups are configured in Supabase

## 🔍 Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review build logs for specific errors

**Database Connection Issues**
- Verify Supabase URL and keys
- Check Row Level Security policies
- Ensure real-time is enabled

**Authentication Problems**
- Check redirect URLs in Supabase
- Verify environment variables
- Test with different browsers

**Real-time Not Working**
- Enable real-time in Supabase
- Check RLS policies
- Verify WebSocket connections

### Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Supabase Documentation**: [supabase.com/docs](https://supabase.com/docs)
- **GitHub Issues**: Report bugs and feature requests

## 🎉 Success!

Congratulations! Your Collective platform is now live and ready to enable collective action in your community.

Next steps:
- Share your deployed platform
- Invite early users and community organizers
- Gather feedback and iterate
- Join our community of contributors

---

**Need help?** Open an issue on GitHub or reach out through our community channels.