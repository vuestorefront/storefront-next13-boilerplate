import { CreateSdkOptions, createSdk } from '@vue-storefront/next';
import { SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';

const options: CreateSdkOptions = {
  middleware: {
    apiUrl: 'http://localhost:4000',
  },
};

export const { getSdk } = createSdk(options, ({ buildModule }) => ({
  commerce: buildModule<SdkModule>(sdkModule),
}));

export type Sdk = ReturnType<typeof getSdk>;
