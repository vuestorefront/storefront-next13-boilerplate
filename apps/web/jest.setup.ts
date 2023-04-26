import { createContext } from 'react';
import '@testing-library/jest-dom/extend-expect';

// https://github.com/vercel/next.js/issues/43769
jest.mock('next/dist/shared/lib/router-context.js', () => ({
  RouterContext: createContext(true),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('next-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key, i18n: { language: 'en' } }),
  Trans: ({ children }: any) => children,
}));
