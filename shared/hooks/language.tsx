import useLanguageStore from "@/zustand/language-store";
import { LanguageSet } from "../../translations/language-set";

type Language = keyof typeof LanguageSet;
