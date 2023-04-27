import { useRouter } from 'next/router';
import { renderHook } from '@testing-library/react';
import lodash from 'lodash-es';
import { ParsedUrlQuery } from 'querystring';
import { useSearchParams } from '~/hooks';
import { createWrapper } from '~/jest.utils';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

const routerMock = {
  route: '/category/[...slug]',
  pathname: '/category/[...slug]',
  asPath: '/category/router-slug/?page=1&sort=latest',
  query: {
    slug: ['route-slug'],
    page: '1',
    sort: 'latest',
    perPage: undefined,
  },
  push: mockPush,
};

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => routerMock);
});

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

describe('[useSearchParams]', () => {
  describe('[with default params]', () => {
    it.each([
      [
        { key: 'value', key2: ['value'] },
        { key: 'value', key2: ['value'], sort: 'latest' },
      ],
      [{ key3: undefined }, { key3: undefined, sort: 'latest' }],
      [{ page: '123' }, { page: '123', sort: 'latest' }],
    ])('set query with replaceQuery=false => %p, => expecting %p', (input: ParsedUrlQuery, query: ParsedUrlQuery) => {
      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams(), { wrapper });

      result.current.setSearchParams(input, false);

      expect(mockPush).toHaveBeenCalledWith({ pathname: '/category/router-slug/', query });
    });

    it.each([
      [
        { key: 'value', key2: ['value'] },
        { key: 'value', key2: ['value'], sort: 'latest' },
      ],
      [
        { key: undefined, key2: 'value' },
        { key: undefined, key2: 'value', sort: 'latest' },
      ],
      [{ page: '123' }, { page: '123', sort: 'latest' }],
    ])('set query with replaceQuery=true => %p  => expecting %p', (input: ParsedUrlQuery, query: ParsedUrlQuery) => {
      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams(), { wrapper });

      result.current.setSearchParams(input, true);

      expect(mockPush).toHaveBeenCalledWith({ pathname: '/category/router-slug/', query });
    });

    it('set query should not filter query, when route is static', () => {
      const mockRoute = '/static/path';
      const mockQuery = {};
      const omitSpy = jest.spyOn(lodash, 'omit');

      (useRouter as jest.Mock).mockImplementation(() => ({
        route: mockRoute,
        pathname: mockRoute,
        asPath: mockRoute,
        query: mockQuery,
        push: jest.fn((v) => v),
      }));

      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams(), { wrapper });

      result.current.setSearchParams({});

      expect(omitSpy).toHaveBeenCalledWith(mockQuery, ['page']);
    });

    it.each([
      ['page', '1'],
      ['invalid', undefined],
      [['page'], { page: '1' }],
      [['page', 'sort'], { page: '1', sort: 'latest', perPage: undefined }],
      [['invalid'], { invalid: undefined }],
    ])(
      'get query params by name %p => expecting %p',
      (input: any, returnValue: ParsedUrlQuery[number] | ParsedUrlQuery) => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useSearchParams(), { wrapper });

        const value = result.current.getSearchParams(input);

        expect(value).toEqual(returnValue);
      },
    );

    it.each([
      ['page', ['1']],
      ['invalid', []],
      [['page'], { page: ['1'] }],
      [['page', 'sort', 'perPage'], { page: ['1'], sort: ['latest'], perPage: [] }],
      [['invalid'], { invalid: [] }],
    ])(
      'getAll query params by name %p => expecting %p',
      (input: any, returnValue: Record<string, string[]> | string[]) => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useSearchParams(), { wrapper });

        const value = result.current.getAllSearchParams(input);

        expect(value).toEqual(returnValue);
      },
    );

    it('clear method remove query params', () => {
      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams(), { wrapper });

      result.current.clearSearchParams();

      expect(mockPush).toHaveBeenCalledWith({ pathname: '/category/router-slug/', query: { sort: 'latest' } });
    });
  });

  describe('[with custom params]', () => {
    it.each([
      [
        { key: 'value', key2: ['value'] },
        { key: 'value', key2: ['value'], page: '1', sort: 'latest' },
      ],
      [{ key3: undefined }, { key3: undefined, page: '1', sort: 'latest' }],
      [{ page: '123' }, { page: '123', sort: 'latest' }],
    ])('set query with replaceQuery=false => %p, => expecting %p', (input: ParsedUrlQuery, query: ParsedUrlQuery) => {
      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams([], []), { wrapper });

      result.current.setSearchParams(input, false);

      expect(mockPush).toHaveBeenCalledWith({ pathname: '/category/router-slug/', query });
    });

    it.each([
      [
        { key: 'value', key2: ['value'] },
        { key: 'value', key2: ['value'] },
      ],
      [
        { key: undefined, key2: 'value' },
        { key: undefined, key2: 'value' },
      ],
      [{ page: '123' }, { page: '123' }],
    ])('set query with replaceQuery=true => %p  => expecting %p', (input: ParsedUrlQuery, query: ParsedUrlQuery) => {
      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams([], []), { wrapper });

      result.current.setSearchParams(input, true);

      expect(mockPush).toHaveBeenCalledWith({ pathname: '/category/router-slug/', query });
    });

    it('set query should not filter query, when route is static', () => {
      const mockRoute = '/static/path';
      const mockQuery = {};
      const omitSpy = jest.spyOn(lodash, 'omit');

      (useRouter as jest.Mock).mockImplementation(() => ({
        route: mockRoute,
        pathname: mockRoute,
        asPath: mockRoute,
        query: mockQuery,
        push: jest.fn((v) => v),
      }));

      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams([], []), { wrapper });

      result.current.setSearchParams({});

      expect(omitSpy).toHaveBeenCalledWith(mockQuery, []);
    });

    it.each([
      ['page', '1'],
      ['invalid', undefined],
      [['page'], { page: '1' }],
      [['page', 'sort'], { page: '1', sort: 'latest', perPage: undefined }],
      [['invalid'], { invalid: undefined }],
    ])(
      'get query params by name %p => expecting %p',
      (input: any, returnValue: ParsedUrlQuery[number] | ParsedUrlQuery) => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useSearchParams([], []), { wrapper });

        const value = result.current.getSearchParams(input);

        expect(value).toEqual(returnValue);
      },
    );

    it.each([
      ['page', ['1']],
      ['invalid', []],
      [['page'], { page: ['1'] }],
      [['page', 'sort', 'perPage'], { page: ['1'], sort: ['latest'], perPage: [] }],
      [['invalid'], { invalid: [] }],
    ])(
      'getAll query params by name %p => expecting %p',
      (input: any, returnValue: Record<string, string[]> | string[]) => {
        const wrapper = createWrapper();
        const { result } = renderHook(() => useSearchParams([], []), { wrapper });

        const value = result.current.getAllSearchParams(input);

        expect(value).toEqual(returnValue);
      },
    );

    it('clear method remove query params', () => {
      const wrapper = createWrapper();
      const { result } = renderHook(() => useSearchParams([], []), { wrapper });

      result.current.clearSearchParams();

      expect(mockPush).toHaveBeenCalledWith({ pathname: '/category/router-slug/', query: {} });
    });
  });

  it(`clear method shouldn't remove search from query`, () => {
    const routerSearchPageMock = {
      route: '/search',
      pathname: '/search',
      asPath: '/search?search=red&page=1&sort=latest',
      query: {
        page: '1',
        sort: 'latest',
        search: 'red',
        perPage: undefined,
      },
      push: mockPush,
    };
    (useRouter as jest.Mock).mockImplementation(() => routerSearchPageMock);
    const wrapper = createWrapper();
    const { result } = renderHook(() => useSearchParams(), { wrapper });

    result.current.clearSearchParams();

    expect(mockPush).toHaveBeenCalledWith({ pathname: '/search', query: { search: 'red', sort: 'latest' } });
  });
});
