import {
  SfAccordionItem,
  SfChip,
  SfCounter,
  SfIconChevronLeft,
  SfListItem,
  SfThumbnail,
  useDisclosure,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import type { FilterProps } from '~/components';

export function Filter({ facet: { label, values }, selected, type, onChange }: FilterProps) {
  const { t } = useTranslation();
  const { isOpen, toggle: toggleOpen } = useDisclosure({ initialValue: true });

  return (
    <SfAccordionItem
      summary={
        <div className="flex justify-between p-2 mb-2">
          <p className="mb-2 font-medium typography-headline-5">{t(label)}</p>
          <SfIconChevronLeft className={classNames('text-neutral-500', `${isOpen ? 'rotate-90' : '-rotate-90'}`)} />
        </div>
      }
      open={isOpen}
      onToggle={toggleOpen}
    >
      {type === 'size' && (
        <ul className="flex flex-wrap gap-4 px-1.5">
          {values.map(({ value }) => (
            <li key={value}>
              <SfChip
                key={value}
                size="sm"
                inputProps={{ checked: selected.includes(value), onChange: () => onChange(value) }}
              >
                <span className="leading-4">{value}</span>
              </SfChip>
            </li>
          ))}
        </ul>
      )}
      {type === 'color' &&
        values.map(({ label, value, productCount }) => (
          <SfListItem
            key={value}
            as="label"
            size="sm"
            className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
              'font-medium': selected.includes(value),
            })}
            selected={selected.includes(value)}
            slotPrefix={
              <>
                <input
                  value={value}
                  checked={selected.includes(value)}
                  className="appearance-none peer"
                  type="checkbox"
                  onChange={() => onChange(value)}
                />
                <span className="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline">
                  <SfThumbnail size="sm" style={{ backgroundColor: value }} />
                </span>
              </>
            }
          >
            <p>
              <span className="mr-2 text-sm">{label}</span>
              <SfCounter size="sm">{productCount}</SfCounter>
            </p>
          </SfListItem>
        ))}
    </SfAccordionItem>
  );
}
