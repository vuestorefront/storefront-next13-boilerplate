import { SfIconBlock, SfListItem, SfRadio } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { useCartShippingMethods, useCart, assertIsCartAvailable } from '~/hooks';

export function ShippingMethod() {
  const { data: cart } = useCart();
  const { shippingMethods } = useCartShippingMethods();
  assertIsCartAvailable(cart);
  const { t } = useTranslation('checkout');
  const filteredShippingMethods = shippingMethods.filter(({ key }) => key !== 'collect');

  return (
    <div data-testid="shipping-method" className="md:px-4 my-6">
      <div className="flex justify-between items-center">
        <h3 className="text-neutral-900 text-lg font-bold">{t('shippingMethod.heading')}</h3>
      </div>
      <div className="mt-4">
        {filteredShippingMethods ? (
          <ul className="grid gap-y-4 md:grid-cols-2 md:gap-x-4" role="radiogroup">
            {filteredShippingMethods.map((method: any) => (
              <SfListItem
                as="label"
                data-testid="shippingMethod"
                key={method.id}
                className="border rounded-md items-start"
              >
                <div className="flex gap-2">
                  <SfRadio
                    checked={cart.shippingInfo?.shippingMethod?.id === method.id}
                    value={method.id}
                    name={method.name}
                  />
                  <div>
                    <p>{method.name}</p>
                    <p className="text-xs text-neutral-500">{t('tomorrow')}</p>
                  </div>
                  <p className="ml-auto">$10</p>
                </div>
              </SfListItem>
            ))}
          </ul>
        ) : (
          <div className="flex mb-6">
            <SfIconBlock className="mr-2 text-neutral-500" />
            <p>{t('shippingMethod.description')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
