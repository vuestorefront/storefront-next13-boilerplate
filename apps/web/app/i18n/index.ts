import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions, defaultNS, fallbackLng } from './settings';

const initI18next = async (lng: string, ns: string) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    // eslint-disable-next-line no-unsanitized/method
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: string = fallbackLng,
  ns: string | string[] = defaultNS,
  options: { keyPrefix?: string } = {},
) {
  const i18nextInstance = await initI18next(lng, (Array.isArray(ns) ? ns[0] : ns) ?? defaultNS);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
}
