import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google';

export const fontBody = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--font-body',
});

export const fontHeadings = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-headings',
});
