import { SfIconBlock, SfListItem, SfRadio } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { useCart, useCartShippingMethods } from '~/hooks';

export function ShippingMethod() {
  const { data: cart } = useCart();
  const { data: shippingMethods } = useCartShippingMethods();
  const { t } = useTranslation('checkout');

  return (
    <div data-testid="shipping-method" className="md:px-4 my-6">
      <div className="flex justify-between items-center">
        <h3 className="text-neutral-900 text-lg font-bold">{t('shippingMethod.heading')}</h3>
      </div>
      <div className="mt-4">
        {shippingMethods ? (
          <ul className="grid gap-y-4 md:grid-cols-2 md:gap-x-4" role="radiogroup">
            {shippingMethods.methods.map(({ id, name, estimatedDelivery, price: { amount } }) => (
              <SfListItem as="label" key={id} className="border rounded-md items-start">
                <div className="flex gap-2">
                  <SfRadio onChange={() => {}} checked={cart?.shippingMethod?.id === id} value={id} name={name} />
                  <div>
                    <p>{name}</p>
                    <p className="text-xs text-neutral-500">{estimatedDelivery}</p>
                  </div>
                  <p className="ml-auto">${amount}</p>
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
