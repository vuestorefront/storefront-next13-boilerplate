import { useTranslation } from 'next-i18next';
import { ProductSlider } from '~/components/ProductSlider';
import { RecommendedProductsProps } from './types';

export function RecommendedProducts({ products }: RecommendedProductsProps) {
  const { t } = useTranslation('product');

  return (
    <>
      <p data-testid="recommended-products" className="my-4 typography-text-lg font-body">
        {t('recommendedProducts')}
      </p>
      {products.length > 0 && <ProductSlider products={products} />}
    </>
  );
}
