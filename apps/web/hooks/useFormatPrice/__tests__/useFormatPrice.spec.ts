import { useFormatPrice } from '@/hooks';
import { renderHook } from '@testing-library/react';
import { useTranslation } from 'next-i18next';

jest.mock('next-i18next', () => ({
  useTranslation: jest.fn(),
}));

const useTranslationMock = jest.mocked(useTranslation);
const mockCurrentLanguage = (language: string) =>
  useTranslationMock.mockReturnValue({ i18n: { language } } as ReturnType<typeof useTranslation>);

describe('useFormatPrice', () => {
  it.each([
    { lang: 'en', price: 0, expected: '$0.00' },
    { lang: 'en', price: 100, expected: '$100.00' },
    { lang: 'en', price: 100.5, expected: '$100.50' },
    { lang: 'en', price: 1000.51, expected: '$1,000.51' },
    { lang: 'en', price: 1000000.51, expected: '$1,000,000.51' },
    { lang: 'de', price: 1000000.51, expected: '1.000.000,51 $' },
  ])(`should format '$price' price as '$expected' when language is '$lang'`, ({ lang, price, expected }) => {
    mockCurrentLanguage(lang);
    const { formatPrice } = renderHook(() => useFormatPrice()).result.current;
    expect(formatPrice(price)).toEqual(expected);
  });

  it('should fallback to en formatter when language is not supported', () => {
    mockCurrentLanguage('fr');
    const { formatPrice } = renderHook(() => useFormatPrice()).result.current;
    expect(formatPrice(100)).toEqual('$100.00');
  });
});
