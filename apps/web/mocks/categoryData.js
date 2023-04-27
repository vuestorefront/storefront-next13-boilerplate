export const sortingOptions = [
  {
    id: 'latest',
    name: 'latest',
    facet: 'createdAt',
    direction: 'desc',
  },
  {
    id: 'price-up',
    name: 'priceUp',
    facet: 'price',
    direction: 'asc',
  },
  {
    id: 'price-down',
    name: 'priceDown',
    facet: 'price',
    direction: 'desc',
  },
  {
    id: 'relevance',
    name: 'relevance',
    facet: 'score',
    direction: 'desc',
  },
];
