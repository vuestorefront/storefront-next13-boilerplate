import { type SdkModule, sdkModule } from '@vsf-enterprise/integration-boilerplate-sdk';
import { initSDK, buildModule } from '@vsf-enterprise/sdk';

const sdkConfig = {
  commerce: buildModule<SdkModule>(sdkModule),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
