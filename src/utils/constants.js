// src/utils/constants.js

// Get base URL for assets (handles GitHub Pages base path)
const BASE_URL = import.meta.env.BASE_URL;
const NAME = "Ahmad Syukri Sazali";

export const personalInfo = {
  name: NAME,
  title: "Software Developer",
  email: "ahmdsyukri09@gmail.com",
  location: "Shah Alam, Malaysia",
  avatar: `${BASE_URL}avatar.jpg`,
  resume: `${BASE_URL}resume.pdf`,
  bio: {
    para1: `Hi! I'm ${NAME}, a system developer at HPCS Sdn. Bhd. building enterprise web applications with Laravel, ASP.NET Core, PHP, C#, Oracle, and MySQL.`,
    para2: "I design RESTful APIs, automate business processes, and build data-driven solutions for financial reporting systems. I care about clean, maintainable code and enjoy debugging and solving complex technical problems.",
    para3: "Outside work, I build full-stack and mobile side projects with React, ASP.NET Core, and Flutter, and I'm continuously learning modern practices like CI/CD, Docker, and AI integration.",
  },
  taglines: [
    "Building elegant solutions to complex problems",
    "Crafting digital experiences that matter",
    "Code that's clean, scalable, and maintainable",
    "Turning ideas into reality, one line at a time"
  ],
  stats: [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Built", value: "10+" },
    { label: "Technologies", value: "20+" },
    { label: "Public GitHub Repos", value: "10" }
  ]
};

export const socialLinks = {
  github: "https://github.com/anonyname5",
  linkedin: "https://www.linkedin.com/in/ahmad-syukri-sazali-427890319/",
  email: "mailto:ahmdsyukri09@gmail.com",
  twitter: "https://twitter.com/yourusername" // optional
};

export const skills = [
  { name: "PHP", icon: "php", color: "#777BB4" },
  { name: "C#", icon: "csharp", color: "#239120" },
  { name: "SQL", icon: "sql", color: "#00758F" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Java", icon: "java", color: "#E76F00" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Dart", icon: "dart", color: "#0175C2" },
  { name: "HTML", icon: "html5", color: "#E34F26" },
  { name: "CSS", icon: "css3", color: "#1572B6" },
];

export const frameworks = [
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
  { name: "ASP.NET Core", icon: "dotnet", color: "#512BD4" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Flutter", icon: "flutter", color: "#02569B" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#38B2AC" },
];

export const databases = [
  { name: "Oracle Database", icon: "oracle", color: "#F80000" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "Firebase", icon: "firebase", color: "#FFCA28" },
  { name: "SQLite", icon: "sqlite", color: "#003B57" },
];

export const tools = [
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Nginx", icon: "nginx", color: "#009639" },
  { name: "Linux", icon: "linux", color: "#FCC624" },
  { name: "GitHub Actions", icon: "githubactions", color: "#2088FF" },
  { name: "VPS", icon: "vps", color: "#4B5563" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#6E7681" },
  { name: "GitLab", icon: "gitlab", color: "#FC6D26" },
  { name: "Postman", icon: "postman", color: "#FF6C37" },
  { name: "Laragon", icon: "laragon", color: "#0E83CD" },
  { name: "Visual Studio", icon: "visualstudio", color: "#5C2D91" },
  { name: "VS Code", icon: "vscode", color: "#007ACC" },
  { name: "Android Studio", icon: "androidstudio", color: "#3DDC84" },
];

export const projects = [
  {
    id: 6,
    title: "Sistem Pengurusan Fatwa Selangor",
    icon: "scroll",
    platform: "web",
    subtitle: "Fatwa management system for Selangor",
    description: "An ongoing organization (company) project to digitize the end-to-end fatwa workflow for Selangor — from submission and review to deliberation, approval, and publication. Built for internal committee use with role-based access, structured record management, and searchable archives to replace manual, paper-based processes.",
    image: "",
    tags: ["Laravel 13", "MySQL", "PHP", "Enterprise"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    status: "ongoing",
    organization: "HPCS Sdn Bhd"
  },
  {
    id: 7,
    title: "IWK Billing System",
    icon: "receipt",
    platform: "web",
    subtitle: "Enterprise billing system for Indah Water Konsortium",
    description: "Developed and maintained enterprise billing system modules for Indah Water Konsortium on an ASP.NET Core Web API (.NET 6) backend with a layered API, business logic, and data access architecture. Implemented business logic and Oracle database operations with EF Core and Dapper, and worked with system analysts and developers to deliver new features, enhancements, and production fixes.",
    image: "",
    tags: ["ASP.NET Core Web API", "C#", ".NET 6", "Oracle", "React"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    organization: "HPCS Sdn Bhd"
  },
  {
    id: 8,
    title: "Financial Report Comparison Tool",
    icon: "spreadsheet",
    platform: "web",
    subtitle: "Internal tool for IWK Report 15 (BRAIN vs BS)",
    description: "An internal Laravel application that automates comparison of monthly financial Excel reports between enterprise systems. Handles Excel import, data normalization, and cost-center level comparison, then exports color-coded discrepancy reports to cut manual verification effort.",
    image: "",
    tags: ["Laravel", "PHP", "MySQL", "Excel", "Docker"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    organization: "HPCS Sdn Bhd"
  },
  {
    id: 11,
    title: "End-of-Month Data Processing Pipeline",
    icon: "pipeline",
    platform: "web",
    subtitle: "IWK end-of-month billing pipeline",
    description: "A high-performance PHP and Oracle batch system that processes Indah Water Konsortium's monthly billing and financial data in staged runs: cleanup, PFILE processing, profile and rate transactions, cash receipts, and ageing generation. Built end-to-end, from the processing stages and API endpoints to a React interface for configuring and running each period.",
    image: "",
    tags: ["PHP", "Oracle", "OCI8", "React", "Batch Processing"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    organization: "HPCS Sdn Bhd"
  },
  {
    id: 9,
    title: "DevTrack",
    icon: "kanban",
    platform: "web",
    subtitle: "Project and task tracker with full CI/CD pipeline",
    description: "A full-stack project and task tracking app built to practice CI/CD end to end. React + Vite frontend, ASP.NET Core Web API (.NET 9) with JWT auth, MySQL, and xUnit tests, containerized with Docker Compose behind Nginx and deployed to a VPS through GitHub Actions.",
    image: "",
    tags: ["React", "ASP.NET Core Web API", "MySQL", "Docker", "GitHub Actions"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/DevTrack",
    featured: true
  },
  {
    id: 10,
    title: "SmartList",
    icon: "checklist",
    platform: "mobile",
    subtitle: "Project-based checklist and budget planner",
    description: "A Flutter Android app for project-based checklist planning with automatic totals, per-project budgets, target dates, and a calendar view. Works offline with Isar, syncs to Firebase, supports Google Sign-In with guest mode, and includes home screen widgets.",
    image: "",
    tags: ["Flutter", "Riverpod", "Isar", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/SmartList",
    featured: true
  },
  {
    id: 1,
    title: "LifeBalance Tracker",
    icon: "health",
    platform: "mobile",
    subtitle: "Personal wellness and finance management app",
    description: "A Flutter mobile app for healthier habits and financial wellness. Tracks water intake, meals, streaks, and wellness scores, alongside expenses, budgets with alerts, savings goals, recurring expenses, and CSV/PDF export.",
    image: `${BASE_URL}LifeBalance.png`,
    tags: ["Flutter", "Riverpod", "SQLite", "Material Design 3"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/lifebalance",
    featured: true
  },
  {
    id: 3,
    title: "FoodieHub",
    icon: "food",
    platform: "web",
    subtitle: "Restaurant and food review platform",
    description: "A Laravel restaurant review platform where users discover restaurants, write multi-rating reviews with photos, and save favorites. Includes a platform admin panel and a dashboard for restaurant owners to claim and manage their listings, with Google Maps location search.",
    image: `${BASE_URL}FoodieHub.png`,
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/foodiehub",
    featured: true
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    icon: "cart",
    platform: "web",
    subtitle: "Full-stack online shopping experience",
    description: "A Laravel 12 e-commerce platform with product catalog, session cart, buy now, order tracking, and multiple payment methods. The admin panel covers sales analytics, product and category management, stock tracking, and PDF invoices.",
    image: `${BASE_URL}Ecommerce.png`,
    tags: ["Laravel", "PHP", "Blade", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/E-Commerce",
    featured: false
  },
  {
    id: 2,
    title: "Crime Prediction",
    icon: "map",
    platform: "web",
    subtitle: "Crime hotspot mapping and risk assessment system",
    description: "A web-based system that analyzes historical crime data by location to predict hotspots and score risk. Features interactive heatmaps, analytics charts, CSV/Excel bulk import, and role-based admin/user access.",
    image: `${BASE_URL}crime.png`,
    tags: ["PHP", "MySQL", "Leaflet.js", "Chart.js", "Bootstrap"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/Crime-Prediction",
    featured: true
  },
  {
    id: 5,
    title: "TapNWear - QR-Based Shopping System",
    icon: "qr",
    platform: "mobile",
    subtitle: "Blueprint project for seamless retail shopping experience",
    description: "A blueprint project for a QR code-based shopping system. Customers scan QR codes from product tags to automatically add items to their cart. Features include online checkout with card and online banking payment options. After successful payment, customers receive a QR code to scan at the exit gate to complete their shopping experience.",
    image: `${BASE_URL}TapNWear.png`,
    tags: ["JavaScript", "HTML", "CSS", "QR Code"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/TapNWear",
    featured: false
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "System Developer",
    company: "HPCS Sdn. Bhd.",
    location: "Alam Budiman, Malaysia",
    period: "March 2025 - Present",
    description: "Building and maintaining enterprise web applications with Laravel, ASP.NET Core, PHP, C#, Oracle, and MySQL. Currently contributing to the Sistem Pengurusan Fatwa, and previously developed modules for the Indah Water Konsortium (IWK) Billing System with ASP.NET Core Web API and React.",
    achievements: [
      "Contributing to the development of the Sistem Pengurusan Fatwa Selangor, an enterprise web application built with Laravel",
      "Developed RESTful APIs and integrated Oracle Database for IWK Billing System modules using ASP.NET Core Web API (C#) and React",
      "Developed an internal Laravel application that automates financial report comparison by processing and validating uploaded Excel reports",
      "Designed and implemented background job pipelines for end-of-month financial data processing using PHP",
      "Collaborated with system analysts and cross-functional team members to implement business requirements and deliver new features",
      "Participated in debugging, testing, and maintaining production systems to ensure reliability and performance"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Science (Hons.) Netcentric Computing",
    company: "Universiti Teknologi MARA (UiTM), Shah Alam",
    location: "Shah Alam, Selangor",
    period: "2023 - 2025",
    achievements: [
      "CGPA: 3.00",
    ]
  },
  {
    id: 3,
    type: "education",
    title: "Diploma in Computer Science",
    company: "Universiti Teknologi MARA (UiTM), Kelantan Branch",
    location: "Machang, Kelantan",
    period: "2020 - 2023",
    achievements: [
      "CGPA: 3.30",
    ]
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

