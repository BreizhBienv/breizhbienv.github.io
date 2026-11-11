import fr from "./fr.json";
import en from "./en.json";

export const languages = {
  fr: "Français",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "fr";

const translations = { fr, en } as const;
export type TranslationKey = keyof typeof fr;

/** Déduit la langue depuis l'URL : /en/... → "en", sinon "fr" */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "en" ? "en" : defaultLang;
}

/** Retourne la fonction t("cle") pour une langue donnée (repli sur le français) */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] ?? translations[defaultLang][key];
  };
}

/** Lien interne dans la bonne langue : localizedPath("/projets", "en") → "/en/projets" */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? "/en/" : `/en${clean}`;
}

/** URL de la même page dans une autre langue (simple échange de préfixe) */
export function getAlternatePath(url: URL, targetLang: Lang): string {
  const current = getLangFromUrl(url);
  let path = url.pathname;
  if (current === "en") path = path.replace(/^\/en/, "") || "/";
  if (targetLang === "en") return path === "/" ? "/en/" : `/en${path}`;
  return path;
}
