import { myModule, MyModuleType } from '@vsf-enterprise/integration-boilerplate-sdk';
import { initSDK, buildModule } from '@vsf-enterprise/sdk';

const extension = {
  extend: {
    async getContent({ url }: { url: string }): Promise<any[]> {
      return import('~/mocks/contentData.json').then((response) => response.default);
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
