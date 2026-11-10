export type Project = {
    number: string;
    title: string;
    category: string;
    description: string;
    year: string;
    technologies: string[];
    icon: "maze" | "vision" | "mobile" | "web";
    featured?: boolean;
    link?: string;
    linkLabel?: string;
};

export const projects: Project[] = [
    {
        number: "01",
        title: "Adversarial ML",
        category: "Research · Computer vision",
        description:
            "An experimental study of adversarial attacks and defense mechanisms in human detection, using YOLOv8, FGSM, PGD and adversarial training on the HERIDAL dataset.",
        year: "2026",
        technologies: ["Python", "YOLOv8", "FGSM", "PGD"],
        icon: "vision",
        featured: true,
        link: "https://ijise.ba/article/21/",
        linkLabel: "Read publication",
    },
    {
        number: "02",
        title: "Maze Navigation",
        category: "Master's thesis · Search & reinforcement learning",
        description:
            "Design and analysis of algorithms for navigating generated mazes. The project compares DFS, BFS, A* and Q-learning across different maze sizes and structures.",
        year: "2026",
        technologies: ["Java", "DFS", "BFS", "A*", "Q-learning"],
        icon: "maze",
        featured: true,
        // Add the full GitHub repository URL when ready, e.g. https://github.com/username/repository
        link: "https://github.com/marijanab02/Master-s_thesis_Maze",
        linkLabel: "View source",
    },
    {
        number: "03",
        title: "Enduro Tours",
        category: "Booking application",
        description:
            "A booking application project combining a Java and Spring backend with a MySQL database and web technologies.",
        year: "2024",
        technologies: ["Java", "Spring", "MySQL", "Docker"],
        icon: "web",
        link: "https://www.enduro-spirit.com",
    },
    {
        number: "04",
        title: "CalmPath",
        category: "Mobile application · Mood tracking",
        description:
            "An Android application focused on mood tracking and personal reflection, developed as a practical mobile-app project.",
        year: "2026",
        technologies: ["Java", "Android Studio", "Mobile"],
        icon: "mobile",
        link: "https://play.google.com/store/apps/details?id=ba.sum.fsre.dnevnikraspolozenja",
    },
];

export const publications = [
    {
        type: "JOURNAL ARTICLE",
        status: "PUBLISHED",
        title:
            "Adversarial Vulnerability and Defense in Human Detection: An Experimental Study Using FGSM, PGD, and Adversarial Training on the HERIDAL Dataset",
        authors: "Marijana Bandić, Maja Kovačić, Fran Pavlović",
        venue: "International Journal of Innovative Solutions in Engineering",
        details: "Vol. 2, No. 2, pp. 38–48 · 2026",
        doi: "10.47960/3029-3200.2026.2.2.38",
        href: "https://ijise.ba/article/21/",
        action: "Read article",
    },
    {
        type: "CONFERENCE PAPER",
        status: "ACCEPTED",
        title:
            "Design and Analysis of Search and Reinforcement Learning Algorithms in the Maze Navigation Problem",
        authors: "Marijana Bandić, Krešimir Rakić",
        venue: "37th DAAAM International Symposium on Intelligent Manufacturing and Automation",
        details: "Virtual Online Edition · 2026",
        note: "Presented at the symposium. Proceedings publication forthcoming.",
        href: "",
        action: "Presentation & proceedings",
    },
];

export const experiences = [
    {
        period: "2 MONTHS",
        role: "Software Development Intern",
        organization: "We Made Code d.o.o. · Mostar",
        description:
            "Two-month internship contributing to a Python-based web application for golf-related services.",
    },
    {
        period: "2024 — 2025",
        role: "University Demonstrator",
        organization: "University of Mostar · FMECE",
        description:
            "Supported students during practical exercises and helped with programming, algorithms and data-structure tasks.",
    },
    {
        period: "2024",
        role: "Intern",
        organization: "Pimatico d.o.o. · Prozor-Rama",
        description:
            "Practical experience related to automation systems and business applications in the hospitality sector.",
    },
];

export const skillGroups = [
    { label: "Programming", skills: ["Java", "Python", "C", "C++", "JavaScript"] },
    { label: "Web & backend", skills: ["React", "Vue.js", "FastAPI", "Spring", "HTML", "CSS"] },
    { label: "Databases & tools", skills: ["PostgreSQL", "MySQL", "SQL Server", "Git", "Docker", "Linux"] },
    { label: "AI & research", skills: ["YOLOv8", "Computer vision", "Machine learning", "Search algorithms", "Q-learning"] },
];
