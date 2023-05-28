'use client';

import { useParams, useRouter } from 'next/navigation';
import i18next from 'i18next';
import { fallbackLng, languages } from '~/app/i18n/settings';

export function Switch() {
  const router = useRouter();
  const params = useParams();
  const locale = params?.lng && languages.includes(params.lng) ? params.lng : fallbackLng;
  console.warn(locale, params?.lng, languages, i18next.options.fallbackLng);

  function switchLanguage(lang: string) {
    i18next.changeLanguage(lang, () => {
      router.push(`/${lang}`);
    });
  }

  return (
    <>
      {languages
        .filter((l) => locale !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <button onClick={() => switchLanguage(l)}>{l}</button>
            </span>
          );
        })}
    </>
  );
}
