import { SfButton, SfIconClose, SfModal, useDisclosure } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { AddressForm, Overlay } from '~/components';
import type { AddressFormFields, CheckoutAddressProps } from '~/components';
import { useCart } from '~/hooks';

export function CheckoutAddress({ type, heading, description, buttonText }: CheckoutAddressProps): JSX.Element | null {
  const { data: cart } = useCart();

  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const { t } = useTranslation('checkout');

  if (!cart) {
    return null;
  }

  const savedAddress = cart[type] as unknown as AddressFormFields;

  return (
    <div data-testid="checkout-address" className="md:px-4 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-900 text-lg font-bold mb-4">{heading}</h2>
        {cart[type] && (
          <SfButton onClick={open} size="sm" variant="tertiary">
            {t('contactInfo.edit')}
          </SfButton>
        )}
      </div>
      {savedAddress ? (
        <div className="mt-2 md:w-[520px]">
          <p>{`${savedAddress.firstName} ${savedAddress.lastName}`}</p>
          <p>{savedAddress.phone}</p>
          <p>{`${savedAddress.streetName} ${savedAddress.streetNumber}`}</p>
          <p>{`${savedAddress.state}, ${savedAddress.postalCode}`}</p>
        </div>
      ) : (
        <div className="w-full md:max-w-[520px]">
          <p>{description}</p>
          <SfButton className="mt-4 w-full md:w-auto" variant="secondary" onClick={open}>
            {buttonText}
          </SfButton>
        </div>
      )}
      {isOpen && (
        <Overlay visible={isOpen}>
          <SfModal
            as="section"
            role="dialog"
            className="h-full w-full overflow-auto md:w-[600px] md:h-fit"
            open={isOpen}
            onClose={close}
            aria-labelledby="address-modal-title"
          >
            <header>
              <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
                <SfIconClose />
              </SfButton>
              <h3 id="address-modal-title" className="text-neutral-900 text-lg md:text-2xl font-bold mb-4">
                {heading}
              </h3>
            </header>
            <AddressForm savedAddress={savedAddress} type={type} onSave={close} />
          </SfModal>
        </Overlay>
      )}
    </div>
  );
}
