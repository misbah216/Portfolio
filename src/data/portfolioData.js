export const personalData = {
  name: "Misbah Saifi",
  title: "Full-Stack Developer & Creative Engineer",
  badge: "B.Tech CSE '27 • CGPA 8.38 • Sheryians Cohort 2.0",
  bio: "Full-Stack Developer with strong fundamentals in Data Structures, Algorithms, and Object-Oriented Programming. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js) and Python, building scalable, high-performance web applications with real-time features, secure authentication, and dynamic 3D experiences.",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "saifimisbah7@gmail.com",
  phone: "+91 9520342975",
  linkedin: "https://linkedin.com/in/misbah-saifi",
  github: "https://github.com/misbah216",
  resumeUrl: "/Misbah_Saifi_Resume.pdf",
  photoUrl: "/formal-photo.jpg",
  status: "Available for Software Engineer Intern Roles",
  stats: [
    { label: "CGPA (B.Tech CSE)", value: "8.38 / 10" },
    { label: "Full-Stack Projects", value: "Production Ready" },
    { label: "Sheryians Cohort", value: "Web Dev 2.0" },
    { label: "Core Foundation", value: "DSA & MERN" },
  ]
};

export const skillsData = [
  {
    category: "Frontend & 3D Web",
    orbit: "Inner Orbit",
    color: "#00F0FF",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react" },
      { name: "Three.js / WebGL", level: "Creative 3D", icon: "box" },
      { name: "Tailwind CSS", level: "Advanced", icon: "palette" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "code" },
      { name: "HTML5 & CSS3", level: "Mastery", icon: "layout" },
      { name: "Responsive UI", level: "Mastery", icon: "smartphone" },
    ]
  },
  {
    category: "Backend & Systems",
    orbit: "Mid Orbit",
    color: "#8B5CF6",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "server" },
      { name: "Express.js", level: "Advanced", icon: "cpu" },
      { name: "REST APIs & Middleware", level: "Advanced", icon: "network" },
      { name: "JWT Authentication", level: "Security", icon: "shield-check" },
      { name: "Python", level: "Proficient", icon: "terminal" },
      { name: "C Language", level: "Fundamentals", icon: "file-code" },
    ]
  },
  {
    category: "Databases & Cloud",
    orbit: "Outer Orbit",
    color: "#10B981",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "database" },
      { name: "Mongoose ODM", level: "Advanced", icon: "layers" },
      { name: "Schema & Query Optimization", level: "High-Perf", icon: "zap" },
      { name: "SQL", level: "Proficient", icon: "table" },
      { name: "Render & Vercel", level: "DevOps", icon: "cloud" },
    ]
  },
  {
    category: "AI, Integrations & Tools",
    orbit: "Exo Orbit",
    color: "#F59E0B",
    skills: [
      { name: "Razorpay Gateway", level: "Payments", icon: "credit-card" },
      { name: "MediaPipe AI Vision", level: "Face Detection", icon: "scan-face" },
      { name: "Git & GitHub", level: "Version Control", icon: "git-branch" },
      { name: "Postman API", level: "Testing", icon: "send" },
      { name: "VS Code & Compass", level: "Tooling", icon: "tool" },
    ]
  },
  {
    category: "Core CS Fundamentals",
    orbit: "Cosmic Core",
    color: "#EC4899",
    skills: [
      { name: "Data Structures", level: "Strong", icon: "binary" },
      { name: "Algorithms", level: "Strong", icon: "workflow" },
      { name: "OOPs Concepts", level: "Architecture", icon: "box-select" },
      { name: "DBMS & Transactions", level: "Deep", icon: "database" },
      { name: "Operating Systems", level: "Core", icon: "monitor" },
      { name: "Computer Networks", level: "Protocols", icon: "wifi" },
    ]
  }
];

export const projectsData = [
  {
    id: "moodify",
    title: "Moodify - AI Mood-Based Music Recommendation",
    tagline: "Real-time webcam facial expression detection playing emotion-matched soundtracks with Razorpay payments.",
    description: "Full-stack MERN application with real-time facial expression recognition via MediaPipe AI. Automatically detects user emotional state (Happy, Calm, Focused, Energetic) and streams curated playlists. Features JWT authentication, personalized mood journal with timestamped emotion logs, favorites manager, and integrated Razorpay Checkout to unlock premium audio tiers with backend verification.",
    category: "AI Vision + Full-Stack MERN",
    tech: ["React.js", "MediaPipe AI", "Node.js", "Express", "MongoDB", "Razorpay", "Tailwind CSS", "JWT"],
    liveUrl: "https://moodify-nine-lilac.vercel.app/",
    githubUrl: "https://github.com/misbah216/Moodify",
    color: "from-purple-500/20 via-cyan-500/10 to-transparent",
    accentColor: "#00F0FF",
    metrics: ["Real-Time Face AI", "Razorpay Checkout", "Persistent Journaling", "Vercel Deployed"],
    highlights: [
      "Webcam emotion recognition using MediaPipe vision model with zero latency",
      "Full-stack MERN architecture with JWT tokens and secure cookies",
      "Razorpay payment gateway integration with cryptographic signature verification",
      "Refactored backend architecture to database-driven case-insensitive indexing"
    ]
  },
  {
    id: "prabandh-pro",
    title: "PrabandhPro - Enterprise Employee Management System",
    tagline: "Comprehensive role-based enterprise management suite with salary engines & OTP auth.",
    description: "Production-grade employee administration dashboard built with the MERN stack. Features role-based access control (RBAC), bcrypt password encryption, email OTP-based password recovery, real-time employee payroll & compensation computation, instant analytics, employee directory with full CRUD operations, and smooth dark/light cosmic UI toggle.",
    category: "Full-Stack Enterprise MERN",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Render"],
    liveUrl: "https://employee-management-system-clbz.onrender.com",
    githubUrl: "https://github.com/misbah216",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#8B5CF6",
    metrics: ["Role-Based Auth (RBAC)", "Email OTP Reset", "Payroll Engine", "Render Cloud"],
    highlights: [
      "Secured with JSON Web Tokens, auth middleware guards, and robust error handlers",
      "Dynamic compensation & salary breakdown calculator with live department metrics",
      "Email OTP verification service for bulletproof credential recovery",
      "Deployed with high-availability microservices on Render cloud infrastructure"
    ]
  }
];

export const experienceData = [
  {
    role: "Full Stack Development Intern",
    company: "Codveda Technologies",
    period: "July 2026 - August 2026",
    badge: "Internship",
    description: "Engineered production-grade web applications focusing on security, resilient database operations, and scalable modular code architecture. Collaborated closely with senior engineers to implement authentication pipelines and RESTful microservices.",
    skills: ["Full-Stack MERN", "REST APIs", "Application Security", "Scalable Architecture"]
  },
  {
    role: "Web Development Training - Cohort 2.0",
    company: "Sheryians Coding School",
    period: "September 2025 - Present",
    badge: "Specialized Training",
    description: "Intensive training program mastering advanced Data Structures & Algorithms, full-stack web engineering (HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB), advanced UI motion & canvas animations, authentication mechanics, REST design, and Generative AI application engineering.",
    skills: ["DSA", "Full-Stack MERN", "Interactive Animations", "Gen AI Integration", "System Design"]
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "RKGIT, Ghaziabad",
    period: "Expected May 2027",
    badge: "CGPA: 8.38 / 10",
    description: "Undergraduate computer science degree with academic excellence in core fundamentals: Object-Oriented Programming, Data Structures, Algorithms, Database Management Systems, Computer Networks, and Operating Systems.",
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"]
  }
];

export const certificationsData = [
  {
    title: "Gen AI for Software Development",
    issuer: "Coursera",
    verificationUrl: "https://coursera.org/verify/U488HBEMSO2V",
    id: "U488HBEMSO2V",
    badge: "Generative AI",
    date: "Certified"
  },
  {
    title: "Build a Free Website with WordPress",
    issuer: "Coursera",
    verificationUrl: "https://coursera.org/verify/PX7IXCMY0LB2",
    id: "PX7IXCMY0LB2",
    badge: "Web Development",
    date: "Certified"
  }
];
