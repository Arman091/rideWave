import { create } from "zustand";
import { persist } from "zustand/middleware";

type LanguageStore = {
  language: string;
  setLanguage: (lang: string) => void;
};

const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "language-storage",
    }
  )
);
export default useLanguageStore;
