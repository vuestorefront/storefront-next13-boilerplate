import { SyntheticEvent, useState } from 'react';
import { SfButton, SfInput } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { FormLabel } from '~/components';

export function ContactInformationForm({ onSave }: { onSave: () => void }): JSX.Element {
  const cart = {
    customerEmail: '',
  };
  const { t } = useTranslation('checkout');
  const [defaultEmail, setDefaultEmail] = useState(cart?.customerEmail || '');

  const handleSave = (event: SyntheticEvent): void => {
    event.preventDefault();

    onSave();
  };

  return (
    <form data-testid="contact-information-form" onSubmit={handleSave}>
      <label>
        <FormLabel>{t('contactInfo.email')}</FormLabel>
        <SfInput name="email" type="email" autoComplete="address-level1" defaultValue={defaultEmail} required />
      </label>
      <div className="mt-4 flex md:justify-end">
        <SfButton type="reset" className="max-md:w-1/2 mr-4" variant="secondary" onClick={() => setDefaultEmail('')}>
          {t('contactInfo.clearAll')}
        </SfButton>
        <SfButton type="submit" className="max-md:w-1/2">
          {t('contactInfo.save')}
        </SfButton>
      </div>
    </form>
  );
}
