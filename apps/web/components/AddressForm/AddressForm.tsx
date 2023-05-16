import { FormEventHandler, useRef, useState } from 'react';
import { SfButton, SfCheckbox, SfInput, SfLoaderCircular, SfSelect } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { FormHelperText, FormLabel } from '~/components';
import type { AddressFormFields, AddressFormProps } from '~/components';

const emptyAddress: AddressFormFields = {
  firstName: '',
  lastName: '',
  phone: '',
  country: '',
  streetName: '',
  streetNumber: '',
  city: '',
  state: '',
  postalCode: '',
};

export function AddressForm({ type, onSave, onClear, savedAddress }: AddressFormProps): JSX.Element {
  const { t } = useTranslation('address');
  const isCartUpdateLoading = false;
  const [defaultValues, setDefaultValues] = useState<AddressFormFields>({
    firstName: savedAddress?.firstName || '',
    lastName: savedAddress?.lastName || '',
    phone: savedAddress?.phone || '',
    country: savedAddress?.country || '',
    streetName: savedAddress?.streetName || '',
    streetNumber: savedAddress?.streetNumber || '',
    city: savedAddress?.city || '',
    state: savedAddress?.state || '',
    postalCode: savedAddress?.postalCode || '',
  });
  const formReference = useRef<HTMLFormElement>(null);
  const countries = ['US'];
  const states = ['California'];

  const handleClearAll = (): void => {
    setDefaultValues(emptyAddress);
    if (typeof onClear === 'function') {
      onClear();
    }
  };

  const handleSave: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (typeof onSave === 'function') {
      onSave();
    }
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-[50%_1fr_120px] gap-4"
      data-testid="address-form"
      onSubmit={handleSave}
      ref={formReference}
    >
      <label>
        <FormLabel>{t('form.firstNameLabel')}</FormLabel>
        <SfInput name="firstName" autoComplete="given-name" defaultValue={defaultValues.firstName} required />
      </label>
      <label className="md:col-span-2">
        <FormLabel>{t('form.lastNameLabel')}</FormLabel>
        <SfInput name="lastName" autoComplete="family-name" defaultValue={defaultValues.lastName} required />
      </label>
      <label className="md:col-span-3">
        <FormLabel>{t('form.phoneLabel')}</FormLabel>
        <SfInput name="phone" type="tel" autoComplete="tel" defaultValue={defaultValues.phone} required />
      </label>
      <label className="md:col-span-3">
        <FormLabel>{t('form.countryLabel')}</FormLabel>
        <SfSelect
          name="country"
          placeholder={t('form.selectPlaceholder')}
          autoComplete="country-name"
          defaultValue={defaultValues.country}
          required
        >
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </SfSelect>
      </label>
      <label className="md:col-span-2">
        <FormLabel>{t('form.streetNameLabel')}</FormLabel>
        <SfInput name="streetName" autoComplete="address-line1" defaultValue={defaultValues.streetName} required />
        <FormHelperText>{t('form.streetNameHelp')}</FormHelperText>
      </label>
      <label>
        <FormLabel>{t('form.streetNumberLabel')}</FormLabel>
        <SfInput name="streetNumber" defaultValue={defaultValues.streetNumber} />
        <FormHelperText>{t('form.streetNumberHelp')}</FormHelperText>
      </label>
      <label className="md:col-span-3">
        <FormLabel>{t('form.cityLabel')}</FormLabel>
        <SfInput name="city" autoComplete="address-level2" defaultValue={defaultValues.city} required />
      </label>
      <label className="md:col-span-2">
        <FormLabel>{t('form.stateLabel')}</FormLabel>
        <SfSelect
          name="state"
          autoComplete="address-level1"
          defaultValue={defaultValues.state}
          placeholder={t('form.selectPlaceholder')}
          required
        >
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </SfSelect>
      </label>
      <label>
        <FormLabel>{t('form.postalCodeLabel')}</FormLabel>
        <SfInput name="postalCode" autoComplete="postal-code" defaultValue={defaultValues.postalCode} required />
      </label>

      {type === 'billingAddress' && (
        <label className="md:col-span-3 flex items-center gap-2">
          <SfCheckbox name="useAsShipping" />
          {t('form.useAsShippingLabel')}
        </label>
      )}

      <div className="md:col-span-3 flex justify-end gap-4">
        <SfButton type="reset" onClick={handleClearAll} className="max-md:w-1/2" variant="secondary">
          {t('checkout:contactInfo.clearAll')}
        </SfButton>
        <SfButton type="submit" className="w-1/2 md:w-1/6" disabled={isCartUpdateLoading}>
          {isCartUpdateLoading ? (
            <SfLoaderCircular className="flex justify-center items-center" size="sm" />
          ) : (
            t('checkout:contactInfo.save')
          )}
        </SfButton>
      </div>
    </form>
  );
}
