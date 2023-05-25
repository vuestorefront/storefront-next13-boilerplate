'use client';

import { ProductCard } from '../ProductCard';
import { SfScrollable } from '../SFUI';
import type { ProductSliderProps } from './types';

export function ProductSlider({ products, className, ...attributes }: ProductSliderProps) {
  return (
    <SfScrollable
      buttonsPlacement="floating"
      className="items-center pb-4"
      {...attributes}
      wrapperClassName={className}
    >
      {products.map(({ id, name, description, rating, price, primaryImage, slug }) => (
        <ProductCard
          key={id}
          className="max-w-[192px]"
          name={name}
          description={description}
          ratingCount={rating?.count}
          rating={rating?.average}
          price={price?.value.amount}
          imageUrl={primaryImage?.url}
          imageAlt={primaryImage?.alt}
          slug={slug}
        />
      ))}
    </SfScrollable>
  );
}
