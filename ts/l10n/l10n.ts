import LocalizedStrings from "react-localization";
import l10nEN from "./l10n-en";
import l10nRU from "./l10n-ru";
import { IL10nStrings } from "./l10nString";
import { config } from "../../config";

export const l10n: IL10nStrings = new LocalizedStrings({
    "en-US": l10nEN,
    "ru-RU": l10nRU,
});

const lang = localStorage.getItem("lang");

if (lang == null) {
    if (l10n.getAvailableLanguages().some((l10nlang) => l10nlang === config.defaultLang)) {
        l10n.setLanguage(config.defaultLang);
    } else {
        l10n.setLanguage("en-US");
    }
} else {
    if (l10n.getAvailableLanguages().some((l10nlang) => l10nlang === lang)) {
        l10n.setLanguage(lang);
    } else {
        l10n.setLanguage(config.defaultLang);
    }
}

export const setLang = (newlang: string) => {
    if (l10n.getAvailableLanguages().some((l10nlang) => l10nlang === lang)) {
        l10n.setLanguage(lang);
    }
    localStorage.setItem("lang", newlang);
    location.reload();
};
