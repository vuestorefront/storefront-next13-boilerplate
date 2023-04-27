import { SfButton, useDisclosure } from '@storefront-ui/react';
import { xor } from 'lodash-es';
import { useTranslation } from 'next-i18next';
import { AccordionItem } from '~/components/AccordionItem';
import { FilterBaseProps } from '../types';

export function FilterBase({
  facet: {
    value: { terms },
  },
  selected,
  onChange,
  label,
  max = 5,
  children,
}: FilterBaseProps) {
  const { t } = useTranslation('category');
  const { isOpen: showMore, toggle: toggleShowMore } = useDisclosure({ initialValue: false });
  const { isOpen, toggle: toggleOpen } = useDisclosure({ initialValue: true });

  const maxItems = showMore ? terms.length : max;
  const itemsToRender = terms.slice(0, maxItems);

  const onItemClick = (value: string) => onChange(xor(selected, [value]));

  return (
    <AccordionItem
      label={<span className="font-medium text-base capitalize">{label}</span>}
      open={isOpen}
      onToggle={toggleOpen}
      summaryClassName="py-4 md:py-2"
    >
      {children({ itemsToRender, onItemClick })}
      {max < terms.length && (
        <SfButton className="mt-2 md:h-8 md:text-sm md:px-3 grayscale" onClick={toggleShowMore} variant="tertiary">
          {showMore ? t('showLess') : t('showMore')}
        </SfButton>
      )}
    </AccordionItem>
  );
}
