// Common types
export type NavBarLink = {
    title: string;
    url: string;
    external?: boolean;
};

export type SocialLink = {
    title: string;
    url: string;
    icon: string;
    external?: boolean;
};

export type Identity = {
    name: string;
    logo: string;
    email: string;
};

export type SEOInfo = {
    title: string;
    description: string;
    image: string;
};

// Home page
export type HomePageContent = {
    seo: SEOInfo;
    role: string;
    description: string;
    socialLinks: SocialLink[];
    links: {
        title: string;
        url: string;
        external?: boolean;
    }[];
};

// About page
export type ResumeItem = {
    title: string;
    company: {
        name: string;
        image: string;
        url: string;
    };
    date: string;
};

export type AboutPageContent = {
    seo: SEOInfo;
    subtitle: string;
    about: {
        description: string;
        image_l: {
            url: string;
            alt: string;
        };
        image_r: {
            url: string;
            alt: string;
        };
    };
    work: {
        description: string;
        items: ResumeItem[];
    };
    connect: {
        description: string;
        links: SocialLink[];
    };
};

// Projects
export interface ProjectItem {
    title: string;
    description: string;
    url: string;
    image: string;
    tags: string[];
}


export interface ProjectPageContent {
    seo: SEOInfo;
    subtitle: string;
    mainQuests: ProjectItem[];
    sideQuests: ProjectItem[];
}

// Experience & Education
export interface ExperienceItem {
    year: string;
    title: string;
    description: string;
}

export interface ExperiencePageContent {
    seo: SEOInfo;
    subtitle: string;
    timeline: ExperienceItem[];
}

export type Skill = {
    name: string;
    level?: 'beginner' | 'intermediate' | 'advanced'; // or a number, or remove entirely
    category?: string; // e.g., 'Languages', 'Tools', 'Frameworks'
};

export type SkillsPageContent = {
    seo: SEOInfo;
    subtitle: string;
    skills: Skill[];
};
