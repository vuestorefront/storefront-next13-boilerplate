import { Maybe } from '@vsf-enterprise/unified-data-model';

export type ProductCardProps = {
  name: Maybe<string>;
  description?: Maybe<string>;
  imageUrl?: Maybe<string>;
  imageAlt?: Maybe<string>;
  rating?: number;
  ratingCount?: number;
  price?: number;
  className?: string;
};
