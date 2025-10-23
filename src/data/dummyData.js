export const personalInfo = {
  name: "Heri Setiawan",
  title: "Fullstack Developer",
  description:
    "I am a passionate web developer dedicated to creating innovative and efficient digital solutions using the latest technologies.",
  location: "Jakarta, Indonesia",
  email: "herisetiawan.dev@gmail.com",
  phone: "+62 877 7547 7657",
  website: "www.herisetiawan.com",
  experience: "5+ Years",
  freelance: "Available",
  languages: "Indonesian, English",
};

export const technicalSkills = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "Node.js", percentage: 78 },
  { name: "PostgreSQL", percentage: 80 },
];

export const professionalSkills = [
  { name: "Communication", percentage: 90 },
  { name: "Teamwork", percentage: 92 },
  { name: "Project Management", percentage: 85 },
  { name: "Problem Solving", percentage: 88 },
  { name: "Creativity", percentage: 87 },
];

export const technologies = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
  { name: "React", icon: "fab fa-react", color: "text-blue-400" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
  { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-600" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
  { name: "Figma", icon: "fab fa-figma", color: "text-purple-500" },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Complete e-commerce platform with payment system, product management, and admin dashboard.",
    fullDescription:
      "E-commerce platform developed using React.js for frontend and Node.js for backend. Features include integrated payment system, inventory management, analytics dashboard, and real-time notification system. This project helped increase sales conversion by 40% for retail clients.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    githubLink: "#",
    demoLink: "#",
    featured: true,
    category: "Web Development",
    client: "Maju Jaya Online Store",
    duration: "3 Months",
    challenges: [
      "Secure payment system integration",
      "Performance optimization for fast load times",
      "Complex state management for shopping cart",
    ],
    solutions: [
      "Microservices architecture implementation",
      "Redis caching implementation",
      "Lazy loading and code splitting implementation",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Task management application with team collaboration features, notifications, and progress tracking.",
    fullDescription:
      "Collaborative task management application that enables teams to coordinate effectively. Equipped with real-time updates, file attachments, timeline tracking, and calendar integration. Increased team productivity by 35% based on user feedback.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "JWT"],
    githubLink: "#",
    demoLink: "#",
    featured: true,
    category: "Productivity",
    client: "Indonesian Tech Startup",
    duration: "4 Months",
    challenges: [
      "Real-time synchronization between multiple users",
      "Complex permission management",
      "Database query optimization for performance",
    ],
    solutions: [
      "WebSocket implementation for real-time features",
      "Role-based access control system",
      "Database indexing and query optimization",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1139&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    ],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Analytics dashboard with interactive data visualization for business and e-commerce.",
    fullDescription:
      "Analytics dashboard that provides business insights through interactive data visualization. Integrated with multiple data sources and provides custom reports, predictive analytics, and automated reporting. Helps clients in data-driven decision making.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    technologies: ["React", "Firebase", "Chart.js", "D3.js", "Python"],
    githubLink: "#",
    demoLink: "#",
    featured: true,
    category: "Data Visualization",
    client: "FinTech Company",
    duration: "5 Months",
    challenges: [
      "Processing large datasets efficiently",
      "Creating responsive and interactive charts",
      "Data security and privacy concerns",
    ],
    solutions: [
      "Web Workers implementation for data processing",
      "Custom chart components with D3.js",
      "Encryption and access control systems",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in",
    url: "#",
    color: "bg-blue-500",
  },
  { name: "GitHub", icon: "fab fa-github", url: "#", color: "bg-gray-800" },
  { name: "Twitter", icon: "fab fa-twitter", url: "#", color: "bg-blue-400" },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    url: "#",
    color: "bg-pink-500",
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Visualization",
  "Productivity",
  "Education",
];
