# Contributing to Collective

Thank you for your interest in contributing to Collective! This document provides guidelines and information for contributors.

## 🤝 Our Commitment

Collective is built on the principle that social media should enable collective action, not algorithmically divide communities. Every contribution should align with this mission of creating tools for genuine coordination and community building.

## 🚀 Getting Started

### Prerequisites

Before contributing, please ensure you have:

- Node.js 18+ installed
- Git knowledge and GitHub account
- Basic understanding of React, Next.js, and TypeScript
- Alignment with Collective's mission and values

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/collective.git
   cd collective
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment**
   ```bash
   cp .env.example .env.local
   # Fill in your Supabase credentials
   ```

4. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Types of Contributions

### 🐛 Bug Reports
- Use the "Bug Report" issue template
- Include steps to reproduce
- Provide environment details
- Be specific about expected vs actual behavior

### ✨ Feature Requests
- Use the "Feature Request" issue template
- Explain how it serves collective action goals
- Consider user experience and community impact
- Discuss implementation feasibility

### 💻 Code Contributions

#### Code Style
- Follow existing code patterns and conventions
- Use TypeScript for type safety
- Write clean, readable, and well-commented code
- Follow the established component structure

#### Commit Messages
Use conventional commits format:
```
feat: add real-time momentum updates
fix: resolve participant count display bug
docs: update API documentation
style: improve button hover effects
refactor: simplify initiative card component
test: add unit tests for coordination tools
```

#### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clear, focused commits
   - Test your changes thoroughly
   - Update documentation if needed

3. **Run Tests**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

4. **Create Pull Request**
   - Use the provided PR template
   - Reference related issues
   - Include screenshots for UI changes
   - Describe testing performed

### 🎨 Design Contributions

#### Design Principles
- Prioritize collective action over individual engagement
- Maintain transparency in all UI elements
- Create inclusive, accessible designs
- Focus on coordination and community building

#### Design Files
- Figma designs for major features
- SVG icons and illustrations
- Component design specifications
- User flow diagrams

### 📖 Documentation

#### Areas Needing Documentation
- API endpoints and usage
- Component library
- Deployment guides
- Community organizing best practices
- Feature explanations

#### Documentation Standards
- Clear, concise writing
- Code examples where relevant
- Screenshots for complex features
- Beginner-friendly explanations

## 🧪 Testing Guidelines

### Test Coverage
- Aim for 80%+ test coverage
- Focus on critical user flows
- Test both positive and negative scenarios
- Include integration tests for real-time features

### Testing Types
- **Unit Tests**: Individual component functionality
- **Integration Tests**: Feature workflows
- **E2E Tests**: Complete user journeys
- **Performance Tests**: Load and real-time features

### Test Structure
```typescript
// Example test structure
describe('InitiativeCard', () => {
  it('displays momentum progress correctly', () => {
    // Test implementation
  });
  
  it('handles participant joining', () => {
    // Test implementation
  });
});
```

## 🏗️ Architecture Guidelines

### Component Organization
```
components/
├── ui/              # Base components (Button, Input, etc.)
├── forms/           # Form-specific components
├── features/        # Feature-specific components
└── layout/          # Layout components
```

### State Management
- Use Zustand for global state
- Keep local state in components
- Leverage React Server Components where possible
- Minimize unnecessary re-renders

### API Design
- RESTful endpoints for CRUD operations
- Real-time subscriptions for live updates
- Proper error handling and validation
- Consistent response formats

## 🌍 Internationalization

### Supported Languages
- English (primary)
- Spanish
- French
- German
- Additional languages welcome!

### Translation Process
1. Use the internationalization system
2. Add new language files
3. Test in different locales
4. Update language selection UI

## 🔒 Security Considerations

### Data Privacy
- Never log sensitive user data
- Implement proper authentication
- Use HTTPS everywhere
- Follow data minimization principles

### Platform Integrity
- Prevent spam and abuse
- Implement rate limiting
- Validate all user inputs
- Protect against XSS and CSRF

## 📋 Issue Management

### Priority Levels
- **Critical**: Platform-breaking bugs
- **High**: Major feature issues
- **Medium**: Minor bugs and improvements
- **Low**: Nice-to-have features

### Labels
- `bug`, `enhancement`, `documentation`
- `good-first-issue`, `help-wanted`
- `community`, `design`, `backend`, `frontend`
- `ready-for-review`, `in-progress`

## 🎯 Community Guidelines

### Code Reviews
- Be constructive and respectful
- Focus on the contribution, not the person
- Ask questions to understand intent
- Suggest improvements, don't just criticize

### Communication
- Use GitHub Discussions for general questions
- Keep issues focused and actionable
- Be patient with new contributors
- Celebrate successes and milestones

### Community Values
- **Inclusion**: Welcome contributors from all backgrounds
- **Transparency**: Open about decisions and changes
- **Respect**: Value diverse perspectives and experiences
- **Action**: Focus on building tools that enable change

## 📞 Getting Help

### Development Questions
- GitHub Issues for bugs and features
- GitHub Discussions for general questions
- Code review comments for specific code

### Project Coordination
- Weekly development meetings (link TBD)
- Monthly community calls
- Slack/Discord channel for real-time chat

## 🏆 Recognition

### Contributors
- All contributors listed in README
- Special recognition for significant contributions
- Contributor badges in GitHub
- Swag for major contributors (future)

### Contribution Types
- Code contributions
- Documentation improvements
- Design work
- Testing and QA
- Community building
- Research and analysis

### Sponsors Recognition

We deeply appreciate our sponsors who make Collective possible! Sponsors are recognized in several ways:

#### Sponsor Tiers & Recognition
- **🥉 Community Supporter ($5/month)**: Listed in README.md sponsors section
- **🥈 Community Champion ($15/month)**: Name on website + advance features
- **🥇 Community Builder ($50/month)**: Logo/name on "Community Builders" wall + API access
- **🏛️ Institutional Partner (Custom)**: Custom development opportunities

#### How Sponsors Help
- **Fund Infrastructure**: Cover hosting, database, and storage costs
- **Enable Development**: Allow maintainers to focus on building features
- **Support Community**: Enable community support and documentation
- **Drive Innovation**: Sponsor development of new collective action tools

#### Sponsor Benefits
- Priority feature requests
- Direct input on roadmap
- Access to private Discord channels
- Early access to new features
- API access for Community Builder tier and above

#### Becoming a Sponsor
Visit [FUNDING.md](FUNDING.md) for detailed sponsorship tiers and information on supporting Collective. Every contribution, regardless of size, directly helps us build better tools for collective action.

#### Transparency
- All sponsor information is publicly available
- Sponsorship money is used only for project development and infrastructure
- Quarterly reports on how sponsorship funds are used
- Open discussions about funding priorities

Thank you to all our sponsors who make Collective possible! 🏛️

## 📅 Development Process

### Sprint Structure
- 2-week development cycles
- Sprint planning meetings
- Regular standup updates
- Sprint retrospectives

### Release Process
- Semantic versioning
- Release candidates
- Beta testing periods
- Changelog maintenance

---

Thank you for contributing to Collective! Together, we're building tools that enable genuine collective action and community coordination.

**Questions?** Don't hesitate to reach out through GitHub Discussions or create an issue with the "question" label.