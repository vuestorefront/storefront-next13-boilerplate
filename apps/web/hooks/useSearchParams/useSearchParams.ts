import { useRouter } from 'next/router';
import { omit, pick, defaults as withDefaults, zipObject, map, mapValues } from 'lodash-es';
import { ParsedUrlQueryInput, parse } from 'querystring';
import { asFilteredArray } from '~/helpers';

/**
 * @description Manipulate Next Js router URI query.
 *
 *  @param {string[]} [protectedParams=["sort"]] - Params that persist when URI query change.
 *  @param {string[]} [disposableParams=["page"]] - Params that are erased each time when URI query change.
 *
 * @example
 * ```ts
 * import useSearchParams from '~/hooks/useSearchParams'
 *
 * const { getSearchParams, setSearchParams, clearSearchParams } = useSearchParams(['sort'], ['page']);
 *
 * setSearchParams({ color: ['red'], size: ['XXL'] }) // /<page>?color=red&size=XXL
 * setSearchParams({ sort: 'latest' }) // /<page>?color=red&size=XXL&sort=latest
 * setSearchParams({ page: '2' }) // /<page>?color=red&size=XXL&sort=latest&page=2
 * setSearchParams({ color: ['red', 'blue'] }) // /<page>?color=red&color=blue&size=XXL&sort=latest
 * // `page` parameter is declared as `disposable`, so its value is erased from the query
 * clearSearchParams() // /<page>?sort=latest
 * // `sort` parameter is declared as `protected`, so its value persist in a query
 *
 * ```
 */
export function useSearchParams(protectedParams: string[] = ['search', 'sort'], disposableParams: string[] = ['page']) {
  const { asPath, push, query } = useRouter();

  const setSearchParams = async (params: ParsedUrlQueryInput, replaceQuery?: boolean): Promise<boolean> => {
    const [pathname, searchParams] = asPath.split('?');
    const searchQuery = parse(searchParams);
    const newQuery = replaceQuery
      ? { ...pick(searchQuery, protectedParams), ...params }
      : { ...omit(searchQuery, disposableParams), ...params };

    return push({
      pathname,
      query: newQuery,
    });
  };

  const clearSearchParams = (): Promise<boolean> => {
    return setSearchParams({}, true);
  };

  function getAllSearchParams<K extends string>(name: K): string[];
  function getAllSearchParams<K extends string>(name: K[]): Record<K, string[]>;
  function getAllSearchParams(name: any): string[] | Record<string, string[]> {
    if (Array.isArray(name)) {
      const values = pick(query, name);
      const defaults = zipObject(
        name,
        map(name, () => []),
      );
      return withDefaults(mapValues(values, asFilteredArray), defaults);
    }

    return asFilteredArray(query[name]);
  }

  function getSearchParams<K extends string>(name: K): string | undefined;
  function getSearchParams<K extends string>(name: K[]): Record<K, string | undefined>;
  function getSearchParams(name: any): string | undefined | Record<string, string | undefined> {
    if (Array.isArray(name)) {
      return mapValues(getAllSearchParams(name), (arr) => arr[0]);
    }

    return getAllSearchParams(name)[0];
  }

  return {
    getSearchParams,
    getAllSearchParams,
    setSearchParams,
    clearSearchParams,
  };
}
