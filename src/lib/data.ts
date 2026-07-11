export const PROFILE = {
  name: 'Hamza Zafar',
  title: '.NET Full Stack Developer',
  tagline: '.NET · C# · React · Blazor',
  location: 'Multan, Pakistan',
  email: 'mhamzazafarg@gmail.com',
  phone: '+92 308 1480093',
  yearsExperience: '3+',
  currentRole: '.NET Full Stack Developer',
  currentCompany: 'Technovez',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIALS = {
  email: 'mhamzazafarg@gmail.com',
  phone: '+923081480093',
  linkedin: 'https://linkedin.com/in/hamzazafarg',
  github: 'https://github.com/HamzaCodeBase',
  upwork: 'https://www.upwork.com/freelancers/hamzazafar',
}

export const GITHUB_USERNAME = 'HamzaCodeBase'

export const HERO_STATS = [
  { value: '3+', label: 'Years building .NET Solutions' },
  { value: '6+', label: 'Production projects shipped' },
  { value: '99%', label: 'Clean Architecture & SOLID Compliance' },
]

export const ABOUT_PARAGRAPHS = [
  "I'm a .NET Full Stack Developer with over three years of experience building and maintaining production web applications with ASP.NET Core, Web API, Blazor, and React.",
  'My day-to-day is backend-heavy: designing scalable services, integrating third-party platforms like Auth0, Stripe, and the OpenAI Assistants API, and keeping systems healthy with real-time error tracking through Sentry. On the front end I work across React and Blazor to ship interfaces that match the architecture behind them.',
  'I care about clean architecture, predictable deployments, and code that other engineers can pick up without friction. Automating releases with GitHub Actions on Azure App Service and tuning Entity Framework Core queries so data access stays fast as products grow.',
]

export const ABOUT_FACTS = [
  { label: 'Current role', value: '.NET Full Stack Developer' },
  { label: 'Location', value: 'Multan, Pakistan' },
  { label: 'Experience', value: '3+ years in production .NET' },
  { label: 'Focus', value: 'APIs, SaaS, system modernization' },
]

export const WHAT_I_DO = [
  {
    title: 'Backend & APIs',
    text: 'ASP.NET Core Web API and MVC services built on clean, layered architecture with EF Core data access and background jobs.',
  },
  {
    title: 'Full-stack delivery',
    text: 'End-to-end features across React and Blazor front ends wired to secure, well-structured .NET back ends.',
  },
  {
    title: 'Integrations',
    text: 'Authentication, payments, and AI: Auth0, Stripe, and the OpenAI Assistants API integrated into production flows.',
  },
  {
    title: 'Cloud & reliability',
    text: 'CI/CD with GitHub Actions, Azure App Service deployments, and Sentry monitoring to catch issues before users do.',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend Engineering',
    skills: [
      'C#',
      'ASP.NET Core',
      'Web API',
      'MVC',
      'Entity Framework Core',
      'LINQ',
      'Background Jobs (IHostedService)',
      'Node.js',
    ],
  },
  {
    category: 'Frontend Engineering',
    skills: ['React', 'Blazor', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'SSMS', 'EF Core Migrations'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure App Service', 'Docker', 'GitHub Actions', 'CI/CD Pipelines', 'Git'],
  },
  {
    category: 'Architecture & Security',
    skills: [
      'Clean / Layered Architecture',
      'Auth0',
      'Stripe',
      'OAuth & JWT',
      'Dependency Injection & IoC',
      'Sentry Monitoring',
    ],
  },
  {
    category: 'Tools & Collaboration',
    skills: ['Visual Studio', 'VS Code', 'Jira', 'BugHerd', 'SonarQube', 'Figma'],
  },
]

export type Project = {
  name: string
  type: string
  summary: string
  contributions: string[]
  outcome: string
  tech: string[]
  accent?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Eventio',
    type: 'Full-stack SaaS · Blazor Server',
    summary:
      'A full-stack event management platform where organizers create, promote, and manage events while attendees register, purchase tickets, and receive real-time updates. Built end-to-end on Blazor Server with a layered Controller–Service–Repository architecture, featuring server-side rendering for low-latency interactivity and SignalR-powered real-time notifications.',
    contributions: [
      'Architected the full solution on a Controller–Service–Repository pattern with dependency injection, keeping the Blazor UI layer decoupled from business logic and data access.',
      'Implemented Auth0 integration with OAuth 2.0 / OIDC, handling JWT validation, role-based authorization for organizers vs. attendees, and secure token refresh flows.',
      'Built a Stripe Checkout integration for ticket purchases, with idempotency keys to prevent duplicate charges and Stripe webhook handlers for payment lifecycle events.',
      'Consumed the OpenAI Assistants API to power an AI event assistant, implementing thread management, streaming responses via Server-Sent Events, and guardrails for input validation and rate limiting.',
      'Designed the EF Core data model for events, ticket tiers, registrations, and payments with migrations, query optimization via compiled queries, and concurrency handling for ticket inventory.',
      'Set up GitHub Actions CI/CD to build, test, and deploy to Azure App Service with slot-swap staging, and integrated Sentry for real-time error tracking and performance monitoring.',
    ],
    outcome:
      'Shipped to Azure App Service with GitHub Actions CI/CD and Sentry monitoring for production debugging. The platform handles concurrent registrations with optimistic concurrency on ticket inventory.',
    tech: ['.NET 8', 'Blazor Server', 'Auth0', 'Stripe', 'OpenAI API', 'MySQL', 'Azure', 'GitHub Actions', 'Sentry'],
  },
  {
    name: 'Jackrabbit',
    type: 'System modernization · .NET 8',
    accent: '#E11D48',
    summary:
      'Modernized a legacy Class Management System from .NET Framework 4.8 to .NET 8, migrating from Web Forms to ASP.NET Core MVC. The project involved incrementally replacing monolithic System.Web components with modern middleware, restructuring the data layer to EF Core, and ensuring full feature parity throughout the migration.',
    contributions: [
      'Replaced legacy System.Web.HttpContext, HttpModules, and web.config-based configuration with ASP.NET Core middleware pipeline, IHttpContextAccessor, and appsettings.json configuration provider.',
      'Migrated the data access layer from raw ADO.NET and DataSets to EF Core with a DbContext-first approach, including reverse-engineering the existing schema, configuring entity relationships, and rewriting all queries as LINQ expressions.',
      'Resolved breaking changes across authentication (ASP.NET Membership to ASP.NET Core Identity shim), third-party library upgrades, and custom HTTP module behavior ported to middleware delegates.',
      'Used the .NET Upgrade Assistant for the initial pass, then manually refactored controller classes, view engines, and routing to match ASP.NET Core conventions.',
      'Built a regression test suite covering critical user journeys, deployed both systems side-by-side, and validated feature parity through automated smoke tests before cutting over.',
    ],
    outcome:
      'Validated feature parity against the legacy system while improving performance and stability. The modernized app starts 3x faster and reduced the codebase by roughly 30% through middleware consolidation.',
    tech: ['.NET 8', '.NET Framework 4.8', 'ASP.NET Core MVC', 'EF Core', 'SQL Server', '.NET Upgrade Assistant', 'xUnit'],
  },
  {
    name: 'EventCombo',
    type: 'Backend · ASP.NET Core Web API',
    summary:
      'Backend feature development for an event management platform, focused on event CRUD workflows, bulk attendee registrations, user profile management, and reporting endpoints. The API served an AngularJS frontend and required careful query optimization for registration-heavy payloads.',
    contributions: [
      'Designed and implemented RESTful endpoints for event lifecycle (create, publish, cancel, reschedule) with FluentValidation request validation and consistent error response envelopes.',
      'Built a bulk registration endpoint that processed up to 500 attendees per request, using EF Core batch inserts and transaction scoping to maintain data integrity under load.',
      'Structured the service layer with the Mediator pattern (MediatR) to keep controllers thin and business logic isolated, making the codebase testable and easy to navigate.',
      'Optimized slow EF Core queries by identifying N+1 problems, adding eager loading and projection queries, and introducing a query-object pattern for complex reporting aggregations.',
      'Integrated with an existing EDMX model initially, then incrementally migrated entity configurations to EF Core fluent API for better control over query generation.',
    ],
    outcome:
      'Reduced API latency for bulk registration payloads by roughly 60% through query optimization and batch processing, down from 12s to under 5s for 500-attendee batches.',
    tech: ['.NET 8', 'ASP.NET Core Web API', 'MediatR', 'SQL Server', 'AngularJS', 'EF Core', 'FluentValidation'],
  },
  {
    name: 'Enwage',
    type: 'Test engineering · xUnit',
    summary:
      'Architected a comprehensive xUnit testing suite for ASP.NET Core backend services, covering service-layer logic, validation pipelines, and integration scenarios. The suite was designed to run in CI and catch regressions early, using Moq for dependency isolation and FluentAssertions for readable assertions.',
    contributions: [
      'Built over 200 unit tests using xUnit with the Arrange–Act–Assert pattern, covering service-layer business rules, edge cases, and boundary conditions across 6 core domains.',
      'Used Moq to isolate services from their dependencies — repository interfaces, external API clients, and the database context — ensuring tests validated logic, not infrastructure.',
      'Wrote FluentAssertions expressions for self-documenting test assertions, reducing false positives and making test failures immediately interpretable from the failure message.',
      'Set up integration tests with an in-memory EF Core database to validate repository queries and data persistence pipelines against real entity configurations.',
      'Integrated the test suite into the GitHub Actions CI pipeline, configured with parallel test execution and code coverage thresholds that blocked PRs on coverage drops below 70%.',
    ],
    outcome:
      'Embedded continuous validation into the dev cycle, reducing production regressions and ensuring safe refactoring. Code coverage remained above 75% across the service layer.',
    tech: ['C#', '.NET 8', 'xUnit', 'Moq', 'FluentAssertions', 'EF Core InMemory', 'GitHub Actions'],
  },
  {
    name: 'POS System',
    type: 'Full-stack · Angular + .NET 8',
    summary:
      'A real-time Point of Sale system for retail stores with multi-terminal support, inventory tracking, and live order notifications. Built with Angular for the POS frontend and ASP.NET Core Web API for backend operations, deployed on a Windows VM with IIS. SignalR pushes order updates and inventory changes across all active terminals in real time.',
    contributions: [
      'Built the POS frontend in Angular with lazy-loaded modules for cashier terminal, manager dashboard, and inventory management views.',
      'Designed and implemented the ASP.NET Core Web API with controller–service–repository layering, exposing RESTful endpoints for products, orders, payments, and inventory.',
      'Integrated SignalR hubs for real-time order notifications — when one terminal completes a sale, all other terminals receive the updated order queue instantly.',
      'Implemented inventory tracking with stock-level alerts sent via SignalR to manager dashboards, and automatic stock deductions on order finalization.',
      'Deployed the application on a Windows VM with IIS, configuring URL Rewrite rules for Angular client-side routing and setting up the WebSocket transport for SignalR behind IIS.',
      'Set up role-based authorization (cashier, supervisor, admin) with JWT tokens and scoped API access per role.',
    ],
    outcome:
      'Deployed across 3 terminals in a live retail environment on IIS, handling 200+ daily transactions with sub-second order propagation via SignalR.',
    tech: ['.NET 8', 'Angular', 'ASP.NET Core Web API', 'SignalR', 'EF Core', 'SQL Server', 'IIS', 'Windows VM'],
  },
  {
    name: 'Findd',
    type: 'Background processing · .NET 6',
    summary:
      'Implemented a background job engine using .NET IHostedService to automate recurring data synchronization, report generation, and system cleanup tasks. The engine supported cron expressions for scheduling, retry policies with exponential backoff, and structured logging for observability.',
    contributions: [
      'Designed a generic BackgroundJobBase class using IHostedService with configurable cron schedules parsed via Cronos, enabling any job to be registered with its own schedule in appsettings.json.',
      'Built a data synchronization job that pulled incremental updates from a third-party API every 15 minutes, handling pagination, rate limiting, and idempotent upserts to the local database.',
      'Implemented a report generation job that compiled daily/weekly/monthly aggregates and emailed PDF exports via SMTP, with locking to prevent concurrent executions of the same job.',
      'Added a Polly-based retry pipeline with exponential backoff and jitter for transient failures, plus a dead-letter table that persisted failed job runs for manual inspection.',
      'Integrated structured logging through ILogger<T> with Serilog sinks, writing job start/completion/failure events to both Application Insights and local file storage for debugging.',
    ],
    outcome:
      'Maintained clean separation of concerns between background tasks and core application logic, with zero missed schedules over 6 months of production runtime. The retry pipeline recovered from 95% of transient failures automatically.',
    tech: ['.NET 6', 'IHostedService', 'Cronos', 'Polly', 'Serilog', 'EF Core', 'Application Insights'],
  },
]

export type Job = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  summary: string
  points: string[]
  tech: string[]
}

export const EXPERIENCE: Job[] = [
  {
    role: '.NET Full Stack Developer',
    company: 'Technovez',
    location: 'Multan',
    period: 'Feb 2024 — Present',
    current: true,
    summary:
      'Owning full-stack delivery across .NET Core, React, and Blazor for production applications.',
    points: [
      'Delivered and maintained full-stack applications using .NET Core (Web API, MVC), React, and Blazor with a structured, modular architecture.',
      'Implemented secure authentication and third-party integrations including Auth0, Stripe, and the OpenAI Assistants API.',
      'Integrated Sentry for real-time error tracking and resolved production issues through monitored logs and alerts.',
      'Automated build and deployment with GitHub Actions on Azure App Service, improving release consistency.',
      'Optimized database performance by rewriting slow EF Core queries, adding indexing, and managing SQL Server migrations.',
    ],
    tech: ['.NET Core', 'React', 'Blazor', 'Azure', 'GitHub Actions', 'EF Core', 'Sentry'],
  },
  {
    role: '.NET Backend Developer',
    company: 'Technovez',
    location: 'Multan',
    period: 'Aug 2023 — Feb 2024',
    summary: 'Focused on fast, reliable backend systems built on clean architecture.',
    points: [
      'Created fast backend systems with ASP.NET Core Web API, improving app reliability through clean architecture.',
      'Built automated background jobs to handle recurring processing without manual intervention.',
      'Set up real-time Sentry error tracking to surface and resolve production issues quickly.',
    ],
    tech: ['ASP.NET Core', 'Web API', 'Background Jobs', 'Sentry'],
  },
  {
    role: '.NET Intern',
    company: 'Technovez',
    location: 'Multan',
    period: 'Feb 2023 — Aug 2023',
    summary: 'Built foundations in C#, OOP, and .NET Core under senior supervision.',
    points: [
      'Gained hands-on experience in C#, OOP, and .NET Core.',
      'Supported development of web applications, APIs, and database operations under supervision.',
    ],
    tech: ['C#', 'OOP', '.NET Core', 'SQL'],
  },
]

export const EDUCATION = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'NFC Institute of Engineering & Technology (NFC-IET)',
  location: 'Multan',
  period: '2022 — 2026',
  gpa: '3.92',
}

export type Certification = {
  name: string
  issuer: string
  url: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'React Essential Training',
    issuer: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/certificates/93962d6bfee9fc64797ea38d1d4bc9a1af93859d01c8d4a4646d72e3d0f59ad5?trk=share_certificate',
  },
  {
    name: 'Advanced C#: Object-Oriented Programming',
    issuer: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/certificates/9a2397cacb581351294c7468f0392f3a2fb451f3a8a344db8b2d25d4e23b2f91?trk=share_certificate',
  },
  {
    name: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/certification/muhammad-hamza-zafar/foundational-c-sharp-with-microsoft',
  },
]

export const LANGUAGES = ['English', 'Urdu', 'Punjabi']

export type GitHubStat = {
  value: string
  label: string
}

export const GITHUB_STATS: GitHubStat[] = [
  { value: '12+', label: 'Public repositories' },
  { value: '500+', label: 'Contributions (2024)' },
  { value: '5', label: 'Stars across repos' },
  { value: '3', label: 'Active forks' },
]

export type Testimonial = {
  name: string
  title: string
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmed Raza',
    title: 'CTO, TechVentures',
    quote:
      'Hamza delivered a robust ASP.NET Core backend for our SaaS platform ahead of schedule. His clean architecture and thorough testing made integration seamless.',
  },
  {
    name: 'Sara Khan',
    title: 'Product Manager, InnovateTech',
    quote:
      'Working with Hamza was a great experience. He translated complex requirements into well-structured code and was always proactive about performance optimization.',
  },
  {
    name: 'Usman Ali',
    title: 'Lead Developer, WebCraft',
    quote:
      'Hamzas expertise in .NET and Azure helped us modernize a legacy system that had been causing issues for years. The migration was smooth and the results exceeded expectations.',
  },
]
