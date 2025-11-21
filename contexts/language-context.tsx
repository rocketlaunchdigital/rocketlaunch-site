"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ptBR from "@/translations/pt-BR.json";
import en from "@/translations/en.json";

type Language = "pt-BR" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, any> = {
    "pt-BR": ptBR,
    "en": en,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("pt-BR");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Carregar idioma salvo do localStorage
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "pt-BR" || savedLanguage === "en")) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (mounted) {
            localStorage.setItem("language", lang);
        }
    };

    const t = (key: string): string => {
        if (!mounted) return key;
        const keys = key.split(".");
        let value: any = translations[language];
        
        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return typeof value === "string" ? value : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

