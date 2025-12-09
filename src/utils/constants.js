// src/utils/constants.js

// Get base URL for assets (handles GitHub Pages base path)
const BASE_URL = import.meta.env.BASE_URL;

export const personalInfo = {
  name: "Ahmad Syukri Sazali",
  title: "Software Developer",
  email: "ahmdsyukri09@gmail.com",
  location: "Shah Alam, Malaysia",
  avatar: `${BASE_URL}avatar.jpg`,
  resume: `${BASE_URL}resume.pdf`,
  bio: {
    para1: "Hi! I'm [Name], a software developer with 9 months of hands-on experience building web applications and mobile apps. I specialize in React, Node.js, and Flutter and love creating products that solve real problems.",
    para2: "I focus on writing clean, maintainable code and building user-friendly interfaces. Whether it's a complex web application or a simple landing page, I approach every project with attention to detail and a commitment to quality.",
    para3: "When I'm not coding, you'll find me learning new technologies and contributing to open source. I'm always looking to grow as a developer and collaborate on interesting projects.",
  },
  taglines: [
    "Building elegant solutions to complex problems",
    "Crafting digital experiences that matter",
    "Code that's clean, scalable, and maintainable",
    "Turning ideas into reality, one line at a time"
  ],
  stats: [
    { label: "Experience", value: "9+ Months" },
    { label: "Projects Completed", value: "12+" },
    { label: "Technologies", value: "15+" },
    { label: "GitHub Repos", value: "25+" }
  ]
};

export const socialLinks = {
  github: "https://github.com/anonyname5",
  linkedin: "https://www.linkedin.com/in/ahmad-syukri-sazali-427890319/",
  email: "mailto:ahmdsyukri09@gmail.com",
  twitter: "https://twitter.com/yourusername" // optional
};

export const skills = [
  { name: "HTML", icon: "html5", color: "#E34F26" },
  { name: "CSS", icon: "css3", color: "#1572B6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "PHP", icon: "php", color: "#777BB4" },
  { name: "C#", icon: "csharp", color: "#239120" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Dart", icon: "dart", color: "#0175C2" }
];

export const frameworks = [
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
  { name: ".NET", icon: "dotnet", color: "#512BD4" },
  { name: "Flutter", icon: "flutter", color: "#02569B" },
  { name: "React", icon: "react", color: "#61DAFB" }
];

export const projects = [
  {
    id: 1,
    title: "LifeBalance Tracker",
    subtitle: "Personal wellness and finance management app",
    description: "A Flutter mobile application that helps users build better eating habits, stay hydrated, and manage their monthly budget effectively. Features include meal tracking, water intake monitoring, expense logging, and budget allocation with visual insights.",
    image: `${BASE_URL}projects/lifebalance.png`,
    tags: ["Flutter", "SQLite", "Provider", "Material Design"],
    liveUrl: "https://play.google.com/store/apps/details?id=your.app",
    githubUrl: "https://github.com/yourusername/lifebalance",
    featured: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Full-stack online shopping experience",
    description: "A complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with React frontend and Node.js backend with MongoDB database.",
    image: `${BASE_URL}projects/ecommerce.png`,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://your-ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    subtitle: "Kanban-style project management tool",
    description: "A drag-and-drop task management application inspired by Trello. Features include board creation, task cards, labels, due dates, and team collaboration tools.",
    image: `${BASE_URL}projects/taskmanager.png`,
    tags: ["React", "Redux", "Firebase", "DnD"],
    liveUrl: "https://your-taskmanager-demo.com",
    githubUrl: "https://github.com/yourusername/taskmanager",
    featured: false,
    gradient: "from-green-500 to-emerald-500"
  },
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Junior Software Developer (Full Stack)",
    company: "HPCS Sdn Bhd",
    location: "Alam Budiman, Malaysia",
    period: "March 2025 - Present",
    description: "Currently working as a Junior Software Developer at HPCS Sdn Bhd, developing Billing System for Indah Water Konsortium Sdn Bhd using .Net for Backend and React for Frontend. Collaborated with senior developers on feature implementation and bug fixes. Participated in development, enhancement and bug fixes.",
    achievements: [
      "Built a excel report comparison tool for Indah Water Konsortium Sdn Bhd",
      "Reduced page load time by 30%",
      "Mentored 2 interns"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Science (Netcentric)",
    company: "Universiti Teknologi MARA",
    location: "Shah Alam, Malaysia",
    period: "2023 - 2025",
    description: "Graduated with Second Class Honours (Upper Division). Specialized in Software Engineering and Web Technologies.",
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

