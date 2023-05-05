import { QueryClient, useQuery } from '@tanstack/react-query';
import { sdk } from '~/sdk';

const fetchContent = async (url: string): Promise<any[]> => {
  return sdk.commerce.getContent({ url });
};

export async function prefetchContent(url: string): Promise<QueryClient> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['content', url], () => fetchContent(url));

  return queryClient;
}

/**
 * Hook for getting content data
 * @param {string} url Content url
 */

export function useContent(url: string) {
  return useQuery(['content', url], () => fetchContent(url), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
