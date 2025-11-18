import React, { createContext, ReactNode, useContext, useState } from "react";

interface Templateprops {
    currenttemplate: string;
    setcurrenttemplate: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateContext = createContext<Templateprops | null>(null)

export default function TemplateProvider({ children }: { children: ReactNode }) {
    const [currenttemplate, setcurrenttemplate] = useState<string>("")
    return <TemplateContext.Provider value={{ currenttemplate, setcurrenttemplate }}>
        {children}
    </TemplateContext.Provider>
}

export function UseTemplate() {
  const template = useContext(TemplateContext);
  if (!template) {
    throw new Error("UseTemplate must be used inside a TemplateProvider");
  }
  return template;
}
