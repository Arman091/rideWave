import useLanguageStore from "@/zustand/language-store";
import { LanguageSet } from "../../translations/language-set";

type Language = keyof typeof LanguageSet;

export const useLang = () => {
  const { language } = useLanguageStore();
  try {
    const locale = LanguageSet[language as Language] || LanguageSet.en;
    return [locale, language] as const;
  } catch (error) {
    console.error('useLang - error', error);
    return [LanguageSet.en, 'en'] as const;
  }
};

export const getLang = () => {
  const { language } = useLanguageStore.getState();
  
  try {
    const locale = LanguageSet[language as Language] || LanguageSet.en;
    return [locale, language] as const;
  } catch (error) {
    console.error('getLang - error', error);
    return [LanguageSet.en, 'en'] as const;
  }
};