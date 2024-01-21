import {useCookies} from "@vueuse/integrations/useCookies";

export const availableCookies = {
    SPECTRUM_LOCALE: 'spectrum_locale',
}

export const cookies = useCookies(Object.values(availableCookies));