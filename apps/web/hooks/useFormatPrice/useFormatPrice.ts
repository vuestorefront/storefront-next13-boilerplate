import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import type { Price } from '~/helpers';
import { UseFormatPrice } from './types';

const createFormatter = (locale: string, currency: string) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  });

const languageToLocale: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
};

const defaultLocale = 'en-US';

const chooseLocale = (language: string) => languageToLocale[language] || defaultLocale;

export function useFormatPrice(): UseFormatPrice {
  const { i18n } = useTranslation();
  // currently we support only USD
  const currency = 'USD';
  const formatter = useMemo(() => createFormatter(chooseLocale(i18n.language), currency), [i18n.language, currency]);
  const formatPrice = (price: Price) => formatter.format(price);

  return { formatPrice };
}
