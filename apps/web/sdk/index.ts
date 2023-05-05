import { myModule, MyModuleType } from '@vsf-enterprise/integration-boilerplate-sdk';
import { initSDK, buildModule } from '@vsf-enterprise/sdk';
import { SfProduct, SfProductReview } from '@vsf-enterprise/unified-data-model/src/product';

const extension = {
  extend: {
    async getProduct({ slug }: { slug: string }): Promise<SfProduct> {
      return import('~/mocks/product.json').then((response) => response.default);
    },
    async getProductReviews({ slug }: { slug: string }): Promise<SfProductReview[]> {
      return import('~/mocks/reviews.json').then((response) => response.default);
    },
    async getProductRecommended({ slug }: { slug: string }): Promise<SfProduct[]> {
      const product = await import('~/mocks/product.json').then((response) => response.default);
      return Array.from({ length: 8 }, (_, index) => ({ ...product, id: index.toString() }));
    },
  },
};

const sdkConfig = {
  commerce: buildModule<MyModuleType, typeof extension>(
    myModule,
    {
      apiUrl: 'http://localhost:4000/commerce',
      ssrApiUrl: 'http://localhost:4000/commerce',
    },
    extension,
  ),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
