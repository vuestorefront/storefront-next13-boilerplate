import { SfFacet } from '@vsf-enterprise/unified-data-model';
import { includes, isNil, pickBy } from 'lodash-es';
import { ParsedUrlQuery } from 'querystring';
import { Nullable } from '~/types';

const nonFilters = ['page', 'sort', 'search', 'perPage', 'slug'] as const;

type NonFilters = (typeof nonFilters)[number];

export type CategoryPageQuery = ParsedUrlQuery & {
  [key in NonFilters]?: string | string[];
};

function isTruthyOrZero<TType>(value: TType | undefined | null): value is TType {
  return Boolean(value) || value === 0;
}

const reduceFilters =
  (query: ParsedUrlQuery) =>
  <TType extends object>(prev: TType, curr: string) => {
    if (!isTruthyOrZero(query[curr])) {
      return prev;
    }
    const makeArray = Array.isArray(query[curr]) || includes(nonFilters, curr);

    return {
      ...prev,
      [curr]: makeArray ? query[curr] : [query[curr]],
    };
  };

export const getFiltersDataFromQuery = <TType extends ParsedUrlQuery>(query: TType, onlyFilters: boolean) => {
  return Object.keys(query)
    .filter((filter) => (onlyFilters ? !includes(nonFilters, filter) : includes(nonFilters, filter)))
    .reduce<Record<string, string | string[]>>(reduceFilters(query), {});
};

export const getQueryParameter = (item?: string | string[]): string | undefined => {
  return Array.isArray(item) ? item[0] : item;
};

export const getFacetsFromQuery = (query: CategoryPageQuery) => {
  const { page, sort, search, slug, perPage, ...filters } = query;

  return pickBy(
    {
      rootCatSlug: slug?.[0],
      categorySlug: slug?.at(-1),
      page: Number.parseInt(String(getQueryParameter(page)), 10),
      sort: getQueryParameter(sort) || 'latest',
      filters: getFiltersDataFromQuery(filters, true),
      perPage: Number.parseInt(String(getQueryParameter(perPage)), 10) || 24,
      phrase: getQueryParameter(search),
    },
    (value) => !!value,
  );
};

export function getFacetByAlias(name: string, facetResult: SfFacet[]): SfFacet | undefined {
  return facetResult.find((facet): facet is SfFacet => facet.name === name);
}

export const asArray = <TType>(value: TType | TType[]): TType[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

export const not =
  <UType>(predicate: (input: any) => input is UType) =>
  <TType>(input: TType): input is Exclude<TType, UType> =>
    !predicate(input);

export const asFilteredArray = <KType>(value: Nullable<KType> | Nullable<KType>[]): KType[] => {
  return asArray(value).filter(not(isNil));
};
