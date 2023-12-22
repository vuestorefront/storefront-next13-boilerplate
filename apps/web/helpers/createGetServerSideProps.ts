import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSdk } from '~/sdk';
import { GetServerSideEnhancedContext } from './types';

interface CreateGetServerSidePropsOptions {
  i18nNamespaces: string[];
}

type DehydratedOptions = { dehydratedState: DehydratedState };
type EmptyResponse = void | Promise<void>;

/**
 * Wraps a `getServerSideProps` function with the following:
 * - Ensures that the required i18nNamespaces (for example "common", "footer") are loaded
 *
 * @param {String[]} options.i18nNamespaces a list of i18n namespaces to load, you can skip
 * "common", "footer", "message" because they are loaded by default
 * @param getServerSideProps the original getServerSideProps function which will be wrapped,
 * you can skip this if you only want to load i18n namespaces
 */
export function createGetServerSideProps<TProps extends Record<string, unknown> = Record<string, unknown>>(
  options: CreateGetServerSidePropsOptions,
  getServerSideProps?: (
    context: GetServerSideEnhancedContext,
  ) => GetServerSidePropsResult<TProps> | Promise<GetServerSidePropsResult<TProps>> | EmptyResponse,
) {
  return async function wrappedGetServerSideProps(
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<TProps & SSRConfig>> {
    const i18nNamespaces = [...new Set([...options.i18nNamespaces, 'common', 'footer'])];
    const fetchTranslations = () => serverSideTranslations(context.locale as string, i18nNamespaces);
    const sdk = getSdk({ getRequestHeaders: () => context.req.headers });
    const queryClient = new QueryClient();
    const enhancedContext: GetServerSideEnhancedContext = { ...context, queryClient, sdk };

    if (getServerSideProps === undefined) {
      return {
        props: {
          ...(await fetchTranslations()),
          dehydratedState: dehydrate(queryClient),
        } as TProps & SSRConfig & DehydratedOptions,
      };
    }

    const [response, translations] = await Promise.all([getServerSideProps(enhancedContext), fetchTranslations()]);
    const resolvedResponse = response ?? { props: {} };

    if ('props' in resolvedResponse) {
      return {
        ...resolvedResponse,
        props: {
          ...resolvedResponse.props,
          ...translations,
          ...((resolvedResponse.props as TProps).dehydratedState ? {} : { dehydratedState: dehydrate(queryClient) }),
        } as TProps & SSRConfig,
      };
    }

    return resolvedResponse;
  };
}
