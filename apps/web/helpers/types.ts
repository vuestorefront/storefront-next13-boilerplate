import { GetServerSidePropsContext } from 'next';
import { QueryClient } from '@tanstack/react-query';
import { Sdk } from '~/sdk';

export interface GetServerSideEnhancedContext extends GetServerSidePropsContext {
  queryClient: QueryClient;
  sdk: Sdk;
}
