import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google';

export const fontBody = Red_Hat_Text({
  subsets: ['latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

export const fontHeadings = Red_Hat_Display({
  subsets: ['latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-headings',
});
