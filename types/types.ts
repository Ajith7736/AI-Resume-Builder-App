import { Json } from "@/lib/database.types";
import React, { ReactElement } from "react";

export type Themeprops = "light" | "dark" | "system"

export interface contents {
    icon: ReactElement;
    title: string;
    desc?: string;
}

export interface Application {
    companyName: string;
    Date: string;
    id: string;
    jobDescription: string;
    Link: string;
    resumeId: string;
    resumeUsed: string;
    roleTitle: string;
    Status: "Applied" | "Pending" | "Interviewing" | "No_Response" | "Rejected" | "Offer";
    userId: string;
}

export type Status = "Applied" | "Pending" | "Interviewing" | "No_Response" | "Rejected" | "Offer";


export type Setter<T> = React.Dispatch<React.SetStateAction<T>>

