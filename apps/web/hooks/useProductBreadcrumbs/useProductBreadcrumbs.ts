import { useMemo } from 'react';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { useTranslation } from 'next-i18next';
import type { Breadcrumb } from '~/components';

/**
 * Hook for retrieving breadcrumbs.
 */
export function useProductBreadcrumbs(product?: SfProduct) {
  const { t } = useTranslation();
  const breadcrumbs = useMemo<Breadcrumb[]>(() => {
    if (!product) {
      return [];
    }

    return [
      { name: t('home'), link: '/' },
      { name: t('category'), link: '/category' },
      { name: product.name as string, link: `#` },
    ];
  }, [product, t]);

  return {
    breadcrumbs,
  };
}
