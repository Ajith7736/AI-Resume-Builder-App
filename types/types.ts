import { Json } from "@/lib/database.types";
import React, { ReactElement } from "react";

export type Themeprops = "light" | "dark" | "system"

export interface contents {
    icon: ReactElement;
    title: string;
    desc?: string;
}


export type Setter<T> = React.Dispatch<React.SetStateAction<T>>

