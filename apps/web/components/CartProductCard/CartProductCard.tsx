import { useCounter } from 'react-use';
import Image from 'next/image';
import { SfLink, SfIconSell } from '@storefront-ui/react';
import { clamp } from '@storefront-ui/shared';
import { SfCartLineItem } from '@vsf-enterprise/unified-data-model';
import { useTranslation } from 'next-i18next';
import { QuantitySelector } from '~/components';
import card from '~/public/images/sneakers.png';

export type CartProductCardProps = {
  item: SfCartLineItem;
};

export function CartProductCard({ item, ...attributes }: CartProductCardProps) {
  const { t } = useTranslation(['cart', 'product']);

  const min = 1;
  const max = 10;
  const [value, { set }] = useCounter(min);

  function handleOnChange(nextValue: number) {
    set(Number(clamp(nextValue, min, max)));
  }

  return (
    <div
      className="relative flex first:border-t border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] p-4 last:mb-0"
      {...attributes}
    >
      <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
        <SfLink href="#">
          <Image
            className="w-full h-auto border rounded-md border-neutral-200"
            src={card.src}
            alt="alt"
            width={300}
            height={300}
          />
        </SfLink>
        <div className="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium">
          <SfIconSell size="xs" className="mr-1" />
          {t('product:sale')}
        </div>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1">
        <SfLink href="#" variant="secondary" className="no-underline typography-text-sm sm:typography-text-lg">
          {item.name}
        </SfLink>
        <div className="my-2 sm:mb-0">
          <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
            {item.attributes.map((attribute) => (
              <li key={attribute.name}>
                <span className="mr-1">{attribute.label}:</span>
                <span className="font-medium">{attribute.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center sm:mt-auto sm:flex">
          <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">
            ${item.totalPrice.precisionAmount}
          </span>
          <QuantitySelector value={value} minValue={min} maxValue={max} onChange={handleOnChange}></QuantitySelector>
        </div>
      </div>
    </div>
  );
}
