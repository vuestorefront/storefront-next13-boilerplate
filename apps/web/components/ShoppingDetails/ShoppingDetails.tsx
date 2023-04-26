import { useState } from 'react';
import { SfChip } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';

const colors = [
  { label: 'Red', value: '#ff0000' },
  { label: 'Green', value: '#00ff00' },
  { label: 'Blue', value: '#0000ff' },
];

const sizes = [
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
];

export function ShoppingDetails(): JSX.Element {
  const { t } = useTranslation();
  const [attributes, setattributes] = useState<{ color: string; size: string }>({ color: '#ff0000', size: 's' });

  return (
    <div className="px-4">
      <div className="flex justify-between mb-2">
        <span className="block text-base font-medium leading-6 text-neutral-900">{t('size')}</span>
      </div>
      {sizes.map(({ label, value }) => (
        <div className="mr-2 mb-2 uppercase inline-block" key={label}>
          <SfChip
            className="min-w-[48px]"
            size="sm"
            inputProps={{
              checked: value === attributes.size,
              onChange: () => setattributes((previous) => ({ ...previous, size: value })),
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
            <div key={label} className="mr-2 mb-2 inline-block">
              <SfChip
                slotPrefix={
                  <svg
                    className="w-5 h-5 fill-neutral-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: value }}
                  >
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
                  </svg>
                }
                size="sm"
                inputProps={{
                  checked: value === attributes.color,
                  onChange: () => setattributes((previous) => ({ ...previous, color: value })),
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
