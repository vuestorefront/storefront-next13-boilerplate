import { SfButton } from '@storefront-ui/react';

export default function Home() {
  return (
    <>
      <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
        Hello from the Vue Storefront React Boilerplate!
      </h1>
      <SfButton type="button" variant="secondary">
        Hello from the Vue Storefront React Boilerplate!
      </SfButton>
    </>
  );
}
