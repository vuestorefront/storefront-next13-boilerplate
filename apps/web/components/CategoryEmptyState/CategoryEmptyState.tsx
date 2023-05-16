import Image from 'next/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import somethingWentWrongImage from '~/public/images/empty-category.svg';

export function CategoryEmptyState(): JSX.Element {
  const { t } = useTranslation(['common', 'category']);

  return (
    <section data-testid="category-empty-state" className="flex flex-col items-center md:mt-16">
      <Image src={somethingWentWrongImage} alt={t('emptyStateAltText')} width="192" height="192" loading="eager" />
      <p className="mt-8 font-medium">{t('category:emptyStateText')}</p>
      <p className="mt-4">{t('category:emptyStateText2')}</p>
      <SfButton as={Link} href="/category" variant="secondary" className="mt-4">
        {t('allProductsLinkText')}
      </SfButton>
    </section>
  );
}
