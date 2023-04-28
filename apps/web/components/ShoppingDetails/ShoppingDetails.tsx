import { SfChip, SfThumbnail } from '@storefront-ui/react';
import { SfProduct } from '@vsf-enterprise/unified-data-model';
import { useTranslation } from 'next-i18next';
import { useProductAttribute } from '~/hooks/useProductAttribute';

export function ShoppingDetails({ product }: { product: SfProduct }): JSX.Element {
  const { t } = useTranslation();

  const { getAttributeList, getAttribute, setAttribute } = useProductAttribute(product, ['color', 'size']);

  const sizes = getAttributeList('size');
  const colors = getAttributeList('color');
  const selectedSize = getAttribute('size');
  const selectedColor = getAttribute('color');

  return (
    <div className="px-4">
      <div className="flex justify-between mb-2">
        <span className="block text-base font-medium leading-6 text-neutral-900">{t('size')}</span>
      </div>
      {sizes.map(({ label, value }) => (
        <div className="mr-2 mb-2 uppercase inline-block" key={value}>
          <SfChip
            className="min-w-[48px]"
            size="sm"
            inputProps={{
              checked: value === selectedSize,
              onChange: () => setAttribute('size', value),
            }}
          >
            {label}
          </SfChip>
        </div>
      ))}
      {colors.length > 1 && (
        <>
          <span className="block mb-2 mt-2 text-base font-medium leading-6 text-neutral-900">{t('color')}</span>
          {colors.map(({ value, label }) => (
            <div key={value} className="mr-2 mb-2 inline-block">
              <SfChip
                slotPrefix={<SfThumbnail size="sm" style={{ background: value }} />}
                size="sm"
                inputProps={{
                  checked: value === selectedColor,
                  onChange: () => setAttribute('color', value),
                }}
              >
                {label}
              </SfChip>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
