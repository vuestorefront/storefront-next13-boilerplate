import { ReactNode } from 'react';
import type { SfAccordionItemProps } from '@storefront-ui/react';

export type AccordionItemProps = Omit<SfAccordionItemProps, 'summary'> & {
  label: ReactNode;
};
