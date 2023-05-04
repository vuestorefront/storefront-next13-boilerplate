import { myModule, MyModuleType } from '@vsf-enterprise/integration-boilerplate-sdk';
import { initSDK, buildModule, SDKConfig } from '@vsf-enterprise/sdk';
import { SfProduct, SfProductReview } from '@vsf-enterprise/unified-data-model/src/product';

const sdkConfig: SDKConfig = {
  commerce: buildModule<MyModuleType>(
    myModule,
    {
      apiUrl: 'http://localhost:4000/commerce',
      ssrApiUrl: 'http://localhost:4000/commerce',
    },
    {
      extend: {
        async getProduct(slug: string): Promise<SfProduct> {
          return import('~/mocks/product.json').then((response) => response.default);
        },
        async getProductReviews(slug: string): Promise<SfProductReview[]> {
          return import('~/mocks/reviews.json').then((response) => response.default);
        },
        async getProductRecommended(slug: string): Promise<SfProduct[]> {
          const product = await import('~/mocks/product.json').then((response) => response.default);
          return Array.from({ length: 8 }, (_, index) => ({ ...product, id: index.toString() }));
        },
      },
    },
  ),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
