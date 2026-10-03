/* ── Master Data accurate to Resume ── */

export const meta = {
  name:        'Pranesh Karthi M S',
  initials:    'MSPK',
  role:        'Software Engineer',
  tagline:     'Building & Deploying Scalable Production Systems',
  tagline2:    'Multi-Tenant Architecture · System Design · Fullstack & DevOps',
  summary:     'Pre-final year Artificial Intelligence and Data Science undergraduate with hands-on experience building and deploying production systems. Independently built 4 production systems, including a multi-tenant task management platform handling 128,000+ daily API calls for 347 users across 3 organizations, and a self-published authentication-as-a-service npm package powering SSO for multiple production applications. Proficient in Node.js, React, React Native, PostgreSQL/MySQL, Docker, and Jenkins CI/CD, with experience in system design, RBAC/ACL security, and multi-tenant architecture.',
  location:    'Erode, Tamil Nadu, India',
  phone:       '+91 82704 26785',
  email:       'praneshkarthims@gmail.com',
  secondaryEmail: 'mspk@mspk.in',
  github:      'https://github.com/mspk5196',
  linkedin:    'https://linkedin.com/in/mspk5196',
  website:     'https://mspk.in',
  appsDomain:  'https://mspkapps.in',
  authDomain:  'https://authservices.mspkapps.in',
  year:        '2026',
}

export const stats = [
  { value: '128K+', label: 'Daily API Calls' },
  { value: '2,315+', label: 'Students + Staff Managed' },
  { value: '₹1.74 Cr+', label: 'Fee Transactions' },
  { value: '4', label: 'Production Systems' },
]

export const skillsCategories = [
  {
    category: 'Programming Languages',
    icon: '💻',
    items: ['JavaScript (ES6+)', 'Java', 'SQL', 'Bash / Shell Scripting'],
  },
  {
    category: 'Frontend & Mobile',
    icon: '🎨',
    items: ['React 19', 'React Native', 'Vite', 'Zustand', 'TailwindCSS', 'Responsive UI Design'],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    items: ['Node.js', 'Express.js 5', 'RESTful API Design', 'JWT Authentication', 'OAuth 2.0', 'WebSockets', 'Socket.io', 'Sequelize ORM'],
  },
  {
    category: 'Databases & Caching',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'System & Security Architecture',
    icon: '🛡️',
    items: ['Multi-Tenant Architecture', 'System Design', 'Data Modeling', 'RBAC / ACL', 'AES-256-CTR Encryption', 'Data Isolation'],
  },
  {
    category: 'DevOps & Infrastructure',
    icon: '☁️',
    items: ['Docker', 'Linux (Ubuntu)', 'Nginx / SSL', 'Jenkins CI/CD', 'Cloudflare Tunnel', 'Grafana'],
  },
  {
    category: 'Tools & Integrations',
    icon: '🚀',
    items: ['Git & GitHub', 'Razorpay Payment Gateway', 'Firebase Cloud Messaging (FCM)', 'node-cron', 'Production Deployment'],
  },
]

export const skills = skillsCategories

export const tickerItems = [
  'React 19', 'React Native', 'Node.js', 'Express 5', 'MySQL', 'PostgreSQL',
  'Redis', 'Docker', 'Linux', 'Nginx', 'Jenkins CI/CD', 'Cloudflare Tunnel',
  'Multi-Tenant Architecture', 'RBAC & ACL', 'AES-256 Encryption', 'Socket.io',
  'Grafana', 'Razorpay', 'Vite', 'Zustand', 'OAuth 2.0',
]

export const projects = [
  {
    id: 1,
    key: 'mspk-cloud',
    featured: true,
    category: 'Personal / Cloud Infrastructure',
    title: 'MSPK Cloud Storage',
    subtitle: 'Self-hosted privacy-focused cloud storage platform with AES-256-CTR encryption',
    period: 'Jun 2026 – Present (In Development)',
    link: 'https://mspkapps.in',
    status: 'In Development (3+ months)',
    tags: ['React', 'React Native', 'Go', 'Wails v2', 'AES-256-CTR', 'MSPK Auth SSO', 'Android / iOS'],
    metrics: ['Zero-knowledge client encryption', 'Self-hosted on user hardware', 'Cross-platform Desktop & Mobile'],
    bullets: [
      'Founded and developed a self-hosted cloud storage platform, in development for 3+ months ahead of launch, keeping files on users’ own hardware.',
      'Created an AES-256-CTR encryption model and specified the desktop Storage Connector architecture using Go + Wails v2.',
      'Directed development of a React dashboard and companion Android/iOS app, connected to MSPK Auth Service for single sign-on.',
    ],
  },
  {
    id: 2,
    key: 'school-erp',
    featured: true,
    category: 'Client Platform / Administration & Finance',
    title: 'School ERP Platform',
    subtitle: 'Complete institutional ERP serving 2,315 active students & staff with automated ₹1.74 Cr+ payments',
    period: 'Mar 2026 – Jun 2026',
    client: 'Secondary School Administration',
    link: null,
    status: 'Production Deployed',
    tags: ['React 19', 'Express 5', 'Sequelize', 'MySQL', 'Socket.io', 'Razorpay', 'Docker', 'Nginx'],
    metrics: ['2,315 Active Students & Staff (Grades 1–12)', '₹1.74 Cr+ Tracked Fees Automated', '1,590+ Tracked Staff Audit Actions', '4 User Tiers RBAC'],
    bullets: [
      'Constructed a school administration ERP over a 4-month cycle, serving 2,315 active students across grades 1–12.',
      'Automated dues calculation and receipts via Razorpay, eliminating manual reconciliation for ₹1.74 Cr+ in tracked fees.',
      'Enforced role-based access across 4 user tiers with audit logging capturing 1,590+ tracked staff actions.',
      'Configured the backend API using Express 5 and Sequelize/MySQL with Socket.io updates, containerized via Docker and Nginx.',
      'Delivered a React 19 web portal and Android/iOS mobile client for administrators, staff, and parents.',
    ],
  },
  {
    id: 3,
    key: 'task-app',
    featured: true,
    category: 'Enterprise / Multi-Tenant Platform',
    title: 'TaskApp Multi-Tenant Workflow',
    subtitle: 'Scalable multi-tenant task engine handling 128,000+ daily API calls across 3 organizations',
    period: 'Jan 2026 – Present',
    partner: '3+ Partner Organizations',
    link: null,
    status: 'Production (8+ Months Live)',
    tags: ['Node.js', 'Express', 'MySQL', 'React', 'Vite', 'React Native', 'FCM', 'Docker', 'Jenkins CI/CD'],
    metrics: ['128,000+ Daily API Calls', '98.8% Reliability SLA', '347 Active Users (200+ Employees, 2,000+ Students)', '4 Workflow Types'],
    bullets: [
      'Architected a multi-tenant task platform live for 8+ months across 3 organizations, serving 200+ employees and 2,000+ students.',
      'Implemented per-organization data isolation and a hierarchical escalation engine for unresponsive tasks.',
      'Engineered 4 workflow types — direct assignment, sequential packages, recurring schedules, and task-bidding — plus a leaderboard scoring engine.',
      'Developed the REST API using Node.js/Express/MySQL and a React + Vite admin portal, with CI/CD pipelines via Docker and Jenkins.',
      'Launched a React Native mobile companion with FCM notifications and Google OAuth SSO for Android and iOS.',
      'Instrumented an API analytics dashboard monitoring 128,000+ daily calls across 4 organizations and 347 users at 98.8% reliability.',
    ],
  },
  {
    id: 4,
    key: 'auth-service',
    featured: true,
    category: 'Production Platform / Authentication Infrastructure',
    title: 'Authentication-as-a-Service Platform',
    subtitle: 'Self-published npm package & SSO auth service in production powering multi-tenant applications',
    period: 'Nov 2025 – Present (Production)',
    link: 'https://authservices.mspkapps.in',
    status: 'Production (Live)',
    tags: ['npm Package', 'JWT', 'Google OAuth 2.0', 'Redis', 'Docker', 'Nginx', 'Cloudflare Tunnel', 'Jenkins CI/CD'],
    metrics: ['Public npm Package', 'Powers 3 Production Apps', '30–40 Active Users', 'One-Command Release Pipeline'],
    bullets: [
      'Published an Authentication-as-a-Service platform as a public npm package, in production since January 2026 across 3 self-built applications.',
      'Integrated JWT authentication, Google OAuth 2.0 SSO, and Redis session caching for 30–40 active users.',
      'Deployed the service via Docker, Nginx, Cloudflare Tunnel, and Jenkins CI/CD for continuous, one-command releases.',
    ],
  },
  {
    id: 5,
    key: 'academic-mgmt',
    featured: false,
    category: 'Institutional Platform',
    title: 'Role-Based Academic Management System',
    subtitle: 'Comprehensive campus management system serving 3,000+ users',
    period: '2025 – 2026',
    link: null,
    status: 'Production',
    tags: ['Node.js', 'React', 'MySQL', 'REST APIs', 'RBAC'],
    metrics: ['3,000+ Users Served', '80+ Backend API Endpoints', 'Multi-role Portal'],
    bullets: [
      'Shipped a role-based Academic Management System in production, serving 3,000+ users through 80+ backend endpoints.',
      'Engineered granular permissions for students, faculty, and administrative staff with comprehensive audit logging.',
    ],
  },
  {
    id: 6,
    key: 'cctv-ai',
    featured: false,
    category: 'AI & Machine Learning Prototype',
    title: 'Voice-Controlled AI CCTV Playback Controller',
    subtitle: 'Whisper and transformer models for multilingual narration & smart playback',
    period: 'In Progress',
    link: null,
    status: 'Prototyping',
    tags: ['Whisper AI', 'Transformer Models', 'Python', 'Computer Vision', 'Audio Processing'],
    metrics: ['Multilingual Voice Control', 'Natural Language Video Search', 'Automated Event Narration'],
    bullets: [
      'Prototyping a voice-controlled AI CCTV playback controller using Whisper and transformer models for multilingual narration.',
      'Enables natural language queries to search, jump, and summarize surveillance video streams in real time.',
    ],
  },
  {
    id: 7,
    key: 'dialcare',
    featured: false,
    category: 'Mobile Application',
    title: 'dialCare Mobile App',
    subtitle: 'Published on Google Play Store with self-hosted backend on Ubuntu Linux',
    period: 'Production',
    link: 'https://play.google.com/store/apps/dev?id=5913381804494964279',
    status: 'Live on Google Play',
    tags: ['React Native', 'Ubuntu Linux', 'Nginx', 'SSL', 'Mobile UI'],
    metrics: ['Google Play Store Published', 'Ubuntu Self-Hosted Server', 'Nginx SSL Security'],
    bullets: [
      'Released "dialCare" cross-platform application on the Google Play Store.',
      'Self-hosts production backends and services on Ubuntu Linux with hardened Nginx and SSL configurations.',
    ],
  },
]

export const education = {
  degree: 'B.Tech, Artificial Intelligence and Data Science',
  institution: 'Bannari Amman Institute of Technology',
  location: 'Erode, Tamil Nadu, India',
  graduationYear: 'Expected 2028',
  cgpa: '7.84 / 10',
  highlights: [
    'Core Focus: System Design, Distributed Systems, Data Structures & Algorithms, Machine Learning',
    'Independently deployed multiple production systems on self-managed Linux infrastructure',
  ],
}

export const languages = [
  { name: 'Tamil', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Professional Working Proficiency', percentage: 90 },
]
