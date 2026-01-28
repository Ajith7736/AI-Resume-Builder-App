import { Json } from "@/lib/database.types";
import { ReactElement } from "react";

export type Themeprops = "light" | "dark" | "system"

export interface contents {
    icon: ReactElement;
    title: string;
    desc?: string;
}

export type ResumeData = {
    createdAt: string;
    Customization: Json;
    id: string;
    name: string;
    ResumeData: Json | null;
    template: string;
    updatedAt: string;
    userId: string;
}


export type UserInput = {
    profilepic: string,
    fullname: string,
    professionaltitle: string,
    email: string,
    address: string,
    phonenumber: string,
    links: Record<string, string>[],
    profile: string[],
    education: {
        college: string,
        field: string,
        startDate: Date,
        endDate: Date,
        location: string,
        Description: string
    }[],
    skills: {
        name: string,
        information: string,
        level: string
    }[],
    languages: {
        name: string,
        additionalInformation: string,
        level: string
    }[],
    experience: {
        title: string,
        subtitle: string,
        startDate: Date,
        endDate: Date,
        location: string,
        description: string
    }[],
    projects: {
        projectTitle: string,
        subtitle: string,
        startDate: Date,
        endDate: Date,
        description: string
    }[],
    strength: {
        skill: string,
        information: string,
        level: string
    }[],
    certificates: {
        certificate: string,
        additionalInformation: string
    }[],
    awards: {
        award: string,
        issuer: string,
        date: Date,
        description: string
    }[],
    interest: {
        interest: string,
        additionalInformation: string
    }[],
    courses: {
        courseTitle: string,
        institution: string,
        startDate: Date,
        endDate: Date,
        location: string,
        description: string
    }[],
    organizations: {
        organization: string,
        position: string,
        startDate: Date,
        endDate: Date,
        location: string,
        description: string
    }[],
    publications: {
        title: string,
        publisher: string,
        date: Date,
        description: string
    }[],
    references: {
        name: string,
        jobtitle: string,
        organization: string,
        email: string,
        phone: string
    }[],
    custom: Record<string, string | Date>
}

export type CustomizeInputs = {
    language: string,
    dateFormat: string,
    pageFormat: 'A4',
    template: string,
    layout: {
        columns: 'one' | 'two' | 'mix',
        headerPostion: 'top' | 'left' | 'right'
        columnwidth: {
            left: string,
            right: string
        },
        sectionLayout: string[]
    },
    spacing: {
        fontSize: string,
        lineHeight: number,
        leftRightMargin: string,
        topBottomMargin: string,
        entrySpacing: string
    },
    colors: {
        mode: 'basic' | 'advanced' | 'border',
        accent: string,
        color: string,
        applyAccentColor: ('name' | 'jobtitle' | 'headings' | 'headingsLine' | 'headerIcons' | 'dotsBarsBubbles' | 'dates' | 'linkIcons')[]
    },
    font: {
        type: 'serif' | 'sans' | 'mono',
        fontname: string
    },
    sectionHeadings: {
        style: string,
        capitalization: 'capitalize' | 'uppercase',
        size: 's' | 'm' | 'l' | 'xl',
        icons: 'none' | 'outline' | 'filled'
    },
    entryLayout: {
        layout: string,
        titleSubtitleSize: 's' | 'm' | 'l',
        subtitleStyle: 'normal' | 'bold' | 'italic',
        subtitlePlacement: 'same-line' | 'next-line',
        descriptionIndentation: boolean,
        listStyle: 'bullet' | 'hyphen'
    },
    footer: {
        pageNumbers: boolean,
        email: boolean,
        name: boolean
    },
    links: {
        underline: boolean,
        blueColor: boolean,
        linkIcon: {
            show: boolean,
            type: string
        }
    },
    personalDetails: {
        align: 'left' | 'center' | 'right',
        arrangement: 'icon' | 'bullet' | 'bar',
        iconStyle: 'no-frame' | 'circle-filled' | 'rounded-filled' | 'square-filled' | 'circle-outline' | 'rounded-outline' | 'square-outline',
        nameSize: 'xs' | 's' | 'm' | 'l' | 'xl',
        nameBold: boolean,
        namefont: 'bodyfont' | 'creative'
        professionalTitle: {
            size: 's' | 'm' | 'l',
            position: 'same-line' | 'below',
            style: 'normal' | 'italic'
        }
    },
    sections: {
        skills: {
            layout: 'grid' | 'level' | 'compact' | 'bubble' | 'bullet' | 'pipe' | 'new-line' | 'comma',
            subinfoStyle: 'dash' | 'colon' | 'bracket'
        },
        languages: {
            layout: 'grid' | 'level' | 'compact' | 'bubble' | 'text' | 'dots' | 'bar'
        },
        interests: {
            layout: 'grid' | 'compact' | 'bubble' | 'bullet' | 'pipe' | 'new-line' | 'comma',
            subinfoStyle: 'dash' | 'colon' | 'bracket'
        },
        certificates: {
            layout: 'grid' | 'compact' | 'bubble' | 'bullet' | 'pipe' | 'new-line' | 'comma',
            subinfoStyle: 'dash' | 'colon' | 'bracket'
        },
        profile: {
            showHeading: boolean
        }
        education: {
            order: 'degree-school' | 'school-degree'
        },
        workExperience: {
            order: 'title-employer' | 'employer-title',
            groupPromotions: boolean
        },
        strength: {
            layout: 'grid' | 'level' | 'compact' | 'bubble' | 'bullet' | 'pipe' | 'new-line' | 'comma',
            subinfoStyle: 'dash' | 'colon' | 'bracket'
        },
        declaration: {
            showHeading: boolean,
            position: 'left' | 'right',
            signatureLine: 'none' | 'solid'
        }
    }
}