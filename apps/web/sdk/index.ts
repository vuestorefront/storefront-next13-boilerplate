import { myModule, MyModuleType } from '@vsf-enterprise/integration-boilerplate-sdk';
import { initSDK, buildModule } from '@vsf-enterprise/sdk';

const sdkConfig = {
  commerce: buildModule<MyModuleType>(
    myModule,
    {
      apiUrl: 'http://localhost:4000/commerce',
      ssrApiUrl: 'http://localhost:4000/commerce',
    },
    // extension,
  ),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
