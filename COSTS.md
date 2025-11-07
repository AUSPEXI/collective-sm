# Collective Infrastructure Costs

This document provides transparency about the costs required to run Collective and how community funding covers these expenses.

## Cost Structure Overview

### Current Monthly Costs (Development Phase)

| Service | Purpose | Cost | Notes |
|---------|---------|------|-------|
| **Vercel Pro** | Hosting, edge functions, CDN | $20/month | Scales with usage |
| **Supabase Pro** | Database, auth, storage, realtime | $25/month | 50GB database, 1GB file storage |
| **Domain & SSL** | collective.app domain | $2/month | Annual $24 |
| **Monitoring** | Uptime and performance | $5/month | Various monitoring tools |
| **Email Service** | Transactional emails | $3/month | SendGrid/Resend |
| **Backup Service** | Database backups | $5/month | Additional redundancy |
| **Total Base Costs** | | **$60/month** | Base infrastructure |

### Scaling Costs (Production with Growth)

| User Tier | Estimated Users | Additional Costs | Total Monthly |
|-----------|----------------|------------------|---------------|
| **Beta (100 users)** | 100 active | Base costs only | $60 |
| **Growing (500 users)** | 500 active | +$15 (supabase limits) | $75 |
| **Scaling (1,000 users)** | 1,000 active | +$25 (vercel limits) | $85 |
| **Established (5,000 users)** | 5,000 active | +$50 (storage/bandwidth) | $135 |
| **Mature (10,000+ users)** | 10,000+ active | +$100 (enhanced monitoring) | $185 |

## Community Funding Strategy

### Sponsorship Targets

To maintain sustainable operations at different user levels:

#### Target: Beta Phase (100 users)
- **Goal**: $60/month to cover base costs
- **Required Sponsors**:
  - 6 Community Builders ($50/month) OR
  - 12 Community Champions ($15/month) OR
  - 60 Community Supporters ($5/month) OR
  - Mix of tiers totaling $60

#### Target: Growing Phase (500 users)
- **Goal**: $150/month (cover costs + 2 hours development time)
- **Required Sponsors**:
  - 2 Community Builders + 3 Community Champions
  - OR 8 Community Champions
  - OR 30 Community Supporters

#### Target: Scaling Phase (1,000+ users)
- **Goal**: $300/month (cover costs + 8 hours development time)
- **Required Sponsors**:
  - 4 Community Builders + 4 Community Champions
  - OR 20 Community Champions
  - OR Mix equaling $300

### Funding Sources Diversification

#### Individual Sponsors (60% of funding)
- Community Supporters: $5/month recurring
- Community Champions: $15/month recurring
- Community Builders: $50/month recurring

#### Institutional Partners (30% of funding)
- Custom sponsorship packages
- Development partnerships
- Co-marketing opportunities

#### One-time Donations (10% of funding)
- Fundraising campaigns
- Grant applications
- Event-based donations

## Cost Breakdown by Service

### Vercel Pro - $20/month base
**What it covers**:
- 100GB bandwidth
- 1,000 edge function invocations
- 1,000 build minutes
- 1,000 deployments
- Analytics and insights
- Branch previews

**Scaling costs**:
- Additional bandwidth: $0.10/GB
- Additional build minutes: $0.018/minute
- Additional deployments: $0.50/deployment

### Supabase Pro - $25/month base
**What it covers**:
- 50GB database storage
- 1GB file storage
- 50MB database backup storage
- 500MB/month database transfer
- 100,000 monthly active users
- 100 concurrent connections
- 2 million Edge Function invocations

**Scaling costs**:
- Additional database storage: $0.125/GB/month
- Additional file storage: $0.021/GB/month
- Additional transfer: $0.09/GB
- Additional Edge Function invocations: $0.000001/invocation

### Additional Services

#### Email Service - $3/month
- Up to 40,000 emails
- Transactional and onboarding emails
- Open/click tracking

#### Monitoring & Analytics - $5/month
- Uptime monitoring
- Performance tracking
- Error logging and alerts

#### Security & Backup - $5/month
- Automated database backups
- Security monitoring
- SSL certificate management

## Development Time Funding

Beyond infrastructure costs, community funding enables paid development time:

### Hourly Rate Calculation
- **Junior Developer**: $25/hour
- **Senior Developer**: $50/hour
- **Project Manager**: $35/hour

### Development Budget Examples
- **$100/month** = 4 hours of development time
- **$250/month** = 10 hours of development time
- **$500/month** = 20 hours of development time

### What Development Time Funds
- New feature development
- Bug fixes and improvements
- Security updates
- Performance optimization
- Community support
- Documentation updates

## Transparency Commitment

### Monthly Reports
We commit to providing monthly transparency reports including:
- Exact costs for each service
- Total funding received
- Development time purchased
- Next month's funding goals
- Major updates and improvements

### Public Budget Tracking
- GitHub Discussions for budget discussions
- Public roadmap updates
- Community calls with financial updates
- Open book approach to spending

### Adjustment Process
- Community input on budget priorities
- Transparent decision-making for major changes
- Flexibility to adjust pricing based on growth
- Regular review of cost optimization opportunities

## Goal: Community Sustainability

### Short-term Goals (3-6 months)
- Establish consistent base funding ($150/month)
- Build sponsor community (20-30 active sponsors)
- Create predictable development schedule
- Achieve operational self-sufficiency

### Medium-term Goals (6-12 months)
- Scale to 1,000+ active users
- Achieve $500+ monthly funding
- Establish institutional partnerships
- Build core team of maintainers

### Long-term Goals (1+ years)
- Full-time development team
- Major feature development
- International expansion
- Impact measurement and reporting

---

**Questions about costs or funding?** Reach out through GitHub Discussions or join our community calls.

**Last updated**: November 2025