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
    para1: `Hi! I'm ${NAME}, a junior software developer with 9 months of hands-on experience building web applications and mobile apps. I specialize in React, Node.js, and Flutter and love creating products that solve real problems.`,
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
    image: `${BASE_URL}LifeBalance.png`,
    tags: ["Flutter", "SQLite", "Provider", "Material Design"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/lifebalance",
    featured: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Crime Prediction",
    subtitle: "Data-driven crime analysis and prediction system",
    description: "A machine learning-based application that analyzes crime data patterns and provides predictive insights. Built to help law enforcement and city planners make data-driven decisions for public safety.",
    image: `${BASE_URL}crime.png`,
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/crime-prediction",
    featured: true,
    gradient: "from-red-500 to-orange-500"
  },
  {
    id: 3,
    title: "FoodieHub",
    subtitle: "Restaurant and food review platform",
    description: "A comprehensive food review application where users can discover restaurants, read reviews, rate their dining experiences, and share food photos. Features include location-based search, rating system, and social interactions.",
    image: `${BASE_URL}FoodieHub.png`,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/food-review",
    featured: true,
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    subtitle: "Full-stack online shopping experience",
    description: "A complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Built with React frontend and Node.js backend with MongoDB database.",
    image: `${BASE_URL}Ecommerce.png`,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/ecommerce",
    featured: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 5,
    title: "TapNWear - QR-Based Shopping System",
    subtitle: "Blueprint project for seamless retail shopping experience",
    description: "A blueprint project for a QR code-based shopping system. Customers scan QR codes from product tags to automatically add items to their cart. Features include online checkout with card and online banking payment options. After successful payment, customers receive a QR code to scan at the exit gate to complete their shopping experience.",
    image: `${BASE_URL}TapNWear.png`,
    tags: ["QR Code", "E-Commerce", "Payment Gateway", "Blueprint"],
    liveUrl: "",
    githubUrl: "https://github.com/anonyname5/TapNWear",
    featured: false,
    gradient: "from-indigo-500 to-purple-500"
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
    description: "Currently working as a Junior Software Developer at HPCS Sdn Bhd, contributing to the IWK Billing System with the HPCS team. Developing Billing System for Indah Water Konsortium Sdn Bhd using .Net for Backend and React for Frontend. Collaborated with senior developers on feature implementation and bug fixes. Participated in development, enhancement and bug fixes.",
    achievements: [
      "Built Comparison Tools: Report 15 - an excel report comparison tool for Indah Water Konsortium Sdn Bhd",
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

