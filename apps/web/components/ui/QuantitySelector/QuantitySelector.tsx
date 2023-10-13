import { useEffect, useId, useRef } from 'react';
import { useCounter } from 'react-use';
import { SfButton, SfIconAdd, SfIconRemove } from '@storefront-ui/react';
import { clamp } from '@storefront-ui/shared';
import { useTranslation } from 'next-i18next';
import type { QuantitySelectorProps } from '~/components';

export function QuantitySelector({
  children,
  value,
  onChange,
  minValue = 1,
  maxValue = Number.POSITIVE_INFINITY,
  className,
}: QuantitySelectorProps) {
  const { t } = useTranslation();
  const inputId = useId();
  const firstUpdate = useRef(true);
  const [internalValue, { inc, dec, set }] = useCounter(value);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (typeof onChange === 'function') {
      onChange(clamp(internalValue, minValue, maxValue));
    }
  }, [internalValue, minValue, maxValue, onChange]);

  return (
    <div data-testid="quantitySelector" className={`inline-flex flex-col items-center ${className}`}>
      <div className="flex border border-neutral-300 rounded-md h-full w-full">
        <SfButton
          data-testid="quantity-selector-decrease-button"
          type="button"
          variant="tertiary"
          square
          className="rounded-r-none"
          disabled={internalValue <= minValue}
          aria-controls={inputId}
          aria-label={t('quantitySelectorDecrease')}
          onClick={() => dec()}
        >
          <SfIconRemove />
        </SfButton>
        <input
          data-testid="quantity-selector-input"
          id={inputId}
          type="number"
          role="spinbutton"
          className="appearance-none flex-1 mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          min={minValue}
          max={maxValue}
          value={internalValue}
          onChange={(event) => set(Number.parseInt(event.target.value, 10))}
          aria-label={t('quantitySelector')}
        />
        <SfButton
          data-testid="quantitySelectorIncreaseButton"
          type="button"
          variant="tertiary"
          square
          className="rounded-l-none"
          disabled={internalValue >= maxValue}
          aria-controls={inputId}
          aria-label={t('quantitySelectorIncrease')}
          onClick={() => inc()}
        >
          <SfIconAdd />
        </SfButton>
      </div>
      {children}
    </div>
  );
}
