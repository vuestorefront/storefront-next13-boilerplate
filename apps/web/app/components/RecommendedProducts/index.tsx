'use client';

import { useProductRecommended } from '~/hooks';
import { ProductSlider } from '../ProductSlider';

export default function RecommendedProducts({ slug }: { slug: string }) {
  const { data } = useProductRecommended(slug);

  return (
    <>
      {data && (
        <section className="mx-4 mt-28 mb-20" id="recommended-products">
          <ProductSlider products={data} />
        </section>
      )}
    </>
  );
}
