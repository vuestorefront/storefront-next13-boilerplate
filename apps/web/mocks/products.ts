import { SfProductCatalogItem, SfPagination, SfFacet, SfCategory, Maybe } from '@vsf-enterprise/unified-data-model';

export type GetProducts = {
  products: SfProductCatalogItem[];
  pagination: SfPagination;
  facets: SfFacet[];
  currentCategory: Maybe<SfCategory>;
  subCategories: SfCategory[];
  categoryHierarchy: SfCategory[];
};
const pagination: SfPagination = {
  currentPage: 1,
  pageSize: 24,
  totalResults: 398,
  totalPages: 17,
};

const facets: SfFacet[] = [
  {
    label: 'Color',
    name: 'color',
    values: [
      {
        label: 'White',
        value: 'white',
        productCount: 22,
      },
      {
        label: 'Blue',
        value: 'blue',
        productCount: 12,
      },
    ],
  },
  {
    label: 'Size',
    name: 'size',
    values: [
      {
        label: '42',
        value: '42',
        productCount: 56,
      },
      {
        label: '40',
        value: '40',
        productCount: 78,
      },
    ],
  },
];

const subCategories: SfCategory[] = [
  {
    id: '68f2e58e-b7c5-4226-bb7d-bfb9231bdb3a',
    name: 'New',
    slug: 'new',
    subcategories: [],
    productCount: 29,
  },
  {
    id: '1c8e158c-bfe5-43bd-9c8d-73ac3ec68788',
    name: 'Women',
    slug: 'women',
    subcategories: [],
    productCount: 1921,
  },
  {
    id: '9c6e4101-77a3-4c81-9762-b8177bd30f41',
    name: 'Men',
    slug: 'men',
    subcategories: [],
    productCount: 641,
  },
  {
    id: '68645d0f-3a0f-4d33-9b9c-5a65ba4010d6',
    name: 'Accessories',
    slug: 'accessories',
    subcategories: [],
    productCount: 168,
  },
  {
    id: 'f480c96e-5ae1-4c4e-8ca3-09950f2679f8',
    name: 'Sale',
    slug: 'sale',
    subcategories: [],
    productCount: 1459,
  },
];

const products: SfProductCatalogItem[] = [
  {
    id: '1',
    sku: 'M0E20000000DMVI',
    name: 'Pumps ”Flex” Michael Kors black',
    slug: '',
    price: {
      isDiscounted: false,
      regularPrice: {
        currency: 'EUR',
        amount: 137.5,
        precisionAmount: '100',
      },
      value: {
        currency: 'EUR',
        amount: 137.5,
        precisionAmount: '100',
      },
    },
    primaryImage: {
      url: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073018_1_large.jpg',
      alt: '',
    },
    rating: {
      average: 0,
      count: 0,
    },
  },
];

export const getProducts = (): GetProducts => ({
  products,
  pagination,
  facets,
  currentCategory: null,
  subCategories,
  categoryHierarchy: [],
});
