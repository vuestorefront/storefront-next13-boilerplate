import { useTranslation } from '../i18n';
import { languages, fallbackLng } from '../i18n/settings';

export default async function Head({ params: { lng } }: { params: { lng: string } }) {
  if (!languages.includes(lng)) {
    lng = fallbackLng;
  }
  const { t } = await useTranslation(lng);

  return (
    <>
      <title>{t('title')}</title>
      <meta name="description" content="Nextjs i18n" />
    </>
  );
}
