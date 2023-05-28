'use client';

import { useTranslation } from '../../i18n/client';
import { Footer as FooterBase } from './Footer';

export const Footer = ({ lng, className }: any) => {
  const { t } = useTranslation('footer');
  return <FooterBase t={t} lng={lng} className={className} />;
};
