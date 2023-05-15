import { SfButton, SfIconClose, SfModal, useDisclosure } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { Overlay } from '~/components';
import { ContactInformationForm } from './ContactInformationForm';

export function ContactInformation(): JSX.Element {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const { t } = useTranslation('checkout');

  const cart = {
    customerEmail: '',
  };

  return (
    <div data-testid="contact-information" className="md:px-4 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-900 text-lg font-bold mb-4">{t('contactInfo.heading')}</h2>
        {cart?.customerEmail && (
          <SfButton onClick={open} size="sm" variant="tertiary">
            {t('contactInfo.edit')}
          </SfButton>
        )}
      </div>

      {cart?.customerEmail ? (
        <div className="mt-2 md:w-[520px]">
          <p>{cart.customerEmail}</p>
        </div>
      ) : (
        <div className="w-full md:max-w-[520px]">
          <p>{t('contactInfo.description')}</p>
          <SfButton className="mt-4 w-full md:w-auto" variant="secondary" onClick={open}>
            {t('contactInfo.add')}
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
            aria-labelledby="contact-modal-title"
          >
            <header>
              <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
                <SfIconClose />
              </SfButton>
              <h3 id="contact-modal-title" className="text-neutral-900 text-lg md:text-2xl font-bold mb-4">
                {t('contactInfo.heading')}
              </h3>
            </header>
            <ContactInformationForm onSave={close} />
          </SfModal>
        </Overlay>
      )}
    </div>
  );
}
