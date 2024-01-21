import {createI18n} from "vue-i18n";
import {availableCookies, cookies} from "../utils/cookies.ts";

export const availableLocales = { enUS: 'en-US', uaUA: 'ua-UA'};

const i18n = createI18n({
    locale: cookies.get(availableCookies.SPECTRUM_LOCALE),
    fallbackLocale: availableLocales.enUS,
    missingWarn: false,
    fallbackWarn: false,
    legacy: false,
    globalInjection: true,
});

export const watchLocaleCookie = () => {
    cookies.addChangeListener((cb: any) => {
        if (cb.name === availableCookies.SPECTRUM_LOCALE)
            i18n.global.locale.value = cookies.get(availableCookies.SPECTRUM_LOCALE);
    })
};

export default i18n;