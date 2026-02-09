import React, { createContext, useState, useContext } from "react";
import en from "locales/en.json";
import es from "locales/es.json";
import fr from "locales/fr.json";

// Create the context
export const LanguageContext = createContext();

// Locales object
const locales = { en, es, fr };

// Provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // default language

  // t() function to get a key from the current locale
  const t = (key, options = {}) => {
    const keys = key.split(".");
    let value = locales[language];

    for (const k of keys) {
      if (!value) return key; // fallback if key not found
      value = value[k];
    }

    return options.returnObjects ? value : value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use translation in components
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return { t: context.t, language: context.language, setLanguage: context.setLanguage };
}
