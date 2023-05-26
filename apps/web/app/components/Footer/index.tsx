import { useTranslation } from '../../i18n';
import { Footer as FooterBase } from './Footer';

export const Footer = async ({ lng, className }: any) => {
  const { t } = await useTranslation(lng, 'footer');

  return <FooterBase t={t} lng={lng} className={className} />;
};
