import { myModule, MyModuleType } from '@vsf-enterprise/integration-boilerplate-sdk';
import { initSDK, buildModule } from '@vsf-enterprise/sdk';

const sdkConfig = {
  ecomm: buildModule<MyModuleType>(myModule, {
    apiUrl: 'http://localhost:4000/ecomm',
    ssrApiUrl: 'http://localhost:4000/ecomm',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
