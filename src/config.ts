import type {
    NavBarLink,
    SocialLink,
    Identity,
    AboutPageContent,
    ProjectPageContent,
    HomePageContent,
    ExperiencePageContent,
} from "./types/config";

// Define the Project interface
export interface Project {
    title: string;
    description: string;
    url: string;
    image: string;
    tags: string[];
}

export const identity: Identity = {
    name: "Srinath Thadagoppula",
    logo: "/logo.webp",
    email: "srinaththadagoppula@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Experience", url: "/experience" },
    { title: "Projects", url: "/projects" },
    { title: "Skills", url: "/skills" },
    { title: "Contact", url: "/contact" },
];

export const socialLinks: SocialLink[] = [
  
    {
        title: "Mail",
        url: "mailto:srinaththadagoppula@gmail.com",
        icon: "mdi:email",
        external: true,
    },
];

export const homePageContent: HomePageContent = {
    seo: {
        title: "Srinath Thadagoppula",
        description: "Tinkerer, researcher, and interaction designer exploring the intersection of food, tech, and design.",
        image: identity.logo,
    },
    role: "Researcher • Maker • Designer",
    description: "I’m Srinath, a PhD scholar at IIT Kanpur building thoughtful food-tech experiences and digital-physical interactions.",
    socialLinks: socialLinks,
    links: [
        {
            title: "My Projects",
            url: "/projects",
        },
        {
            title: "About Me",
            url: "/about",
        },
    ],
};

export const aboutPageContent: AboutPageContent = {
    seo: {
        title: "About | Srinath Thadagoppula",
        description: "Learn more about Sri’s background, philosophy, and approach to design and research.",
        image: identity.logo,
    },
    subtitle: "Who I Am",
    about: {
        description: `
**Statement**<br/>
Curious designer and maker who thrives on rapid prototyping and meaningful tech-human interaction.

**Philosophy**<br/>
I believe design is how things work and feel—not just how they look. My work lies in crafting interfaces that bridge the digital and physical in unexpected ways.

**About Me**<br/>
Currently pursuing my PhD at IIT Kanpur, I explore how emerging technologies like 3D food printing can enhance everyday experiences. From edible toys to interactive installations, I prototype ideas at the intersection of form and function.
`,
        image_l: {
            url: "/me-left.jpg",
            alt: "Sri at workbench",
        },
        image_r: {
            url: "/me-right.jpg",
            alt: "Sri speaking at a demo",
        },
    },
    work: {
        description: `I've worked across domains—UX research, prototyping, and systems thinking—to create experiences that blend tech and design.`,
        items: [],
    },
    connect: {
        description: `Let’s chat! I’m always up for a conversation around making, prototyping, or collaborating on interesting interfaces.`,
        links: socialLinks,
    },
};

export const experiencePageContent: ExperiencePageContent = {
    seo: {
        title: "Experience | Sri",
        description: "A timeline of my learning and work experience.",
        image: identity.logo,
    },
    subtitle: "A timeline of my learning and work experience.",
    timeline: [
        {
            year: "2005–2007",
            title: "High School",
            description: "My foundational years in school, developing early interests.",
        },
        {
            year: "2007–2009",
            title: "Plus Two",
            description: "Focused on science and math, setting the stage for engineering.",
        },
        {
            year: "2009–2013",
            title: "Undergraduate Studies",
            description: "Completed my Bachelor's degree, honed my engineering fundamentals.",
        },
        {
            year: "2013–2014",
            title: "Freelancing",
            description: "Started working independently on design and tech projects.",
        },
        {
            year: "2014–2015",
            title: "Job 1",
            description: "First full-time job experience in a professional setting.",
        },
        {
            year: "2015–2017",
            title: "Freelancing",
            description: "Took on a diverse range of freelance work.",
        },
        {
            year: "2017",
            title: "Job 2",
            description: "Short stint at an organization before postgrad.",
        },
        {
            year: "2017–2019",
            title: "Postgraduate Studies",
            description: "Pursued a Master's degree and deepened my specialization.",
        },
        {
            year: "2019–2022",
            title: "Job 3",
            description: "Worked on impactful projects in the industry.",
        },
        {
            year: "2022–Present",
            title: "PhD Journey",
            description: "Pursuing doctoral research in design, tech, and innovation.",
        },
    ],
};

export const projectPageContent: ProjectPageContent = {
    seo: {
        title: "Projects | Sri",
        description: "A collection of my main and side projects across design, tech, and tinkering.",
        image: identity.logo,
    },
    subtitle: "Things I’ve built, explored, and tinkered with.",
    mainQuests: [
        {
            title: "STEM Toy for Curriculum Learning",
            description: "Designed and built a toy that teaches science through play using design thinking methods.",
            url: "#",
            image: "/projects/stem-toy.jpg",
            tags: ["Design Thinking", "UX", "Prototyping"],
        },
        {
            title: "3D Printed Edible Toys",
            description: "Exploring food-tech and fun by creating edible objects using 3D printing.",
            url: "#",
            image: "/projects/edible-toys.jpg",
            tags: ["3D Printing", "Food-Tech", "Play"],
        },
    ],
    sideQuests: [
        {
            title: "TouchDesigner Pottery Simulator",
            description: "A virtual pottery experience using Leap Motion and rotary encoder input.",
            url: "#",
            image: "/projects/virtual-pottery.jpg",
            tags: ["Interaction", "TouchDesigner", "Leap Motion"],
        },
        {
            title: "Custom Silicone Watch Straps",
            description: "DIY watch strap crafting using silicone and mold making techniques.",
            url: "#",
            image: "/projects/watch-straps.jpg",
            tags: ["Craft", "Wearables", "DIY"],
        },
    ],
};

export const skillsPageContent = {
    seo: {
        title: "Skills | Srinath Thadagoppula",
        description: "Explore the skills and tools I use to build impactful projects.",
        image: identity.logo,
    },
    subtitle: "Skills & Tools",
    skills: [
        {
            category: "Design & Prototyping",
            items: [
                "UX Research",
                "Industrial Design",
                "Rapid Prototyping",
                "Wireframing",
                "Design Thinking",
                "User Testing",
                "Figma",
                "Fusion 360",
                "Sketch",
            ],
        },
        {
            category: "Tech & Development",
            items: [
                "3D Printing",
                "Web Development",
                "TouchDesigner",
                "Unity",
                "Arduino",
                "Raspberry Pi",
                "Python",
            ],
        },
        {
            category: "Food Tech & Innovation",
            items: [
                "3D Food Printing",
                "Nutrient-Dense Meal Planning",
                "Food Technology Research",
                "Consumer Behavior in Food",
            ],
        },
    ],
};

export const contactPageContent = {
    seo: {
        title: "Contact | Srinath Thadagoppula",
        description: "Reach out to me for collaboration, questions, or just a good conversation.",
        image: "/logo.webp",
    },
    subtitle: "Let’s connect!",
    contactDetails: {
        email: "srinaththadagoppula@gmail.com",
        phone: "+91-84293-39693",
        location: "IIT Kanpur, India",
    },
    socialLinks: [
        {
            title: "GitHub",
            url: "https://github.com/sri",
            icon: "mdi:github",
            external: true,
        },
        {
            title: "Mail",
            url: "mailto:srinaththadagoppula@gmail.com",
            icon: "mdi:email",
        },
    ],
};