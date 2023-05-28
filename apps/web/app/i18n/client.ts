'use client';

import { UseTranslationOptions, initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { defaultNS, getOptions } from './settings';

// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  // eslint-disable-next-line no-unsanitized/method
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  });

export function useTranslation(ns: string | string[] = defaultNS, lang?: string, options?: UseTranslationOptions) {
  // if (i18next.isInitialized && lang && i18next.resolvedLanguage !== lang) i18next.changeLanguage(lang);
  // console.log('useTranslation', i18next.resolvedLanguage);
  return useTranslationOrg(ns, options);
}
