// ===== PORTFOLIO CONFIGURATION FILE =====
// Update this file with your personal information and links

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Mohd Kamil",
        title: "BCA Graduate | Web Developer",
        email: "mohd.kamil@example.com",
        location: "Your City, Country",
        about: "I am Mohd Kamil, a BCA graduate with a strong foundation in computer science and a passion for web development. My journey in technology has equipped me with both theoretical knowledge and practical skills needed to create innovative digital solutions.",
        introduction: "Passionate about creating beautiful, functional, and user-friendly web experiences. Specialized in modern web technologies and always eager to learn new skills."
    },

    // Social Media Links
    social: {
        linkedin: "https://linkedin.com/in/mohdkamil",
        github: "https://github.com/mohdkamil",
        twitter: "https://twitter.com/mohdkamil",
        instagram: "https://instagram.com/mohdkamil"
    },

    // Resume
    resume: {
        downloadUrl: "path/to/your/resume.pdf",
        fileName: "MohdKamil_Resume.pdf"
    },

    // Skills with proficiency levels (0-100)
    skills: {
        frontend: [
            { name: "HTML5", percentage: 95 },
            { name: "CSS3", percentage: 90 },
            { name: "JavaScript", percentage: 85 },
            { name: "Bootstrap", percentage: 90 }
        ],
        backend: [
            { name: "Python", percentage: 80 },
            { name: "MongoDB", percentage: 75 },
            { name: "MySQL", percentage: 80 },
            { name: "C++", percentage: 70 }
        ]
    },

    // Projects
    projects: [
        {
            name: "College Event Management System",
            description: "A comprehensive web application for managing college events, registrations, and schedules with admin panel and user management.",
            technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
            github: "https://github.com/mohdkamil/college-event-system",
            liveDemo: "https://your-demo-link.com",
            icon: "fas fa-calendar-alt",
            isMajor: true
        },
        {
            name: "To-Do Web App",
            description: "A modern task management application with local storage and intuitive user interface.",
            technologies: ["TypeScript", "HTML"],
            github: "https://github.com/mohdkamil/todo-app",
            liveDemo: "https://your-todo-demo.com",
            icon: "fas fa-tasks"
        },
        {
            name: "Simple Chat Box",
            description: "A real-time chat application with modern UI and responsive design for seamless communication.",
            technologies: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/mohdkamil/chat-app",
            liveDemo: "https://your-chat-demo.com",
            icon: "fas fa-comments"
        },
        {
            name: "Streaming Service Landing Page",
            description: "An attractive landing page for a streaming service with modern design and interactive elements.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/mohdkamil/streaming-landing",
            liveDemo: "https://your-streaming-demo.com",
            icon: "fas fa-play-circle"
        },
        {
            name: "Sneaker Website Landing Page",
            description: "A stylish e-commerce landing page for sneaker sales with product showcase and call-to-action elements.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/mohdkamil/sneaker-landing",
            liveDemo: "https://your-sneaker-demo.com",
            icon: "fas fa-shoe-prints"
        }
    ],

    // Statistics
    stats: {
        projectsCompleted: 5,
        technologies: 8,
        experience: "2+",
        clients: "10+"
    },

    // Contact Information
    contact: {
        message: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just want to say hello!",
        availability: "Available for freelance work and full-time opportunities"
    },

    // Theme Colors (optional customization)
    theme: {
        primary: "#007bff",
        secondary: "#6c757d",
        accent: "#28a745",
        background: "#f8f9fa"
    },

    // SEO Meta Tags
    seo: {
        title: "Mohd Kamil - BCA Graduate & Web Developer",
        description: "Professional portfolio of Mohd Kamil, a BCA graduate and web developer specializing in HTML, CSS, JavaScript, Bootstrap, Python, MongoDB, and MySQL.",
        keywords: "web developer, BCA graduate, HTML, CSS, JavaScript, Bootstrap, Python, MongoDB, MySQL, portfolio, Mohd Kamil",
        author: "Mohd Kamil",
        ogImage: "path/to/your/og-image.jpg"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 