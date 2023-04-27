import { SfChip } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { FilterProps } from '../types';
import { FilterBase } from './FilterBase';

export function FilterSize({ facet, selected, onChange, max = 5 }: FilterProps) {
  const { t } = useTranslation('category');

  return (
    <FilterBase label={t('size')} facet={facet} selected={selected} onChange={onChange} max={max}>
      {({ itemsToRender, onItemClick }) => (
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(47px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(60px,_1fr))] gap-2 justify-center px-4 pb-2">
          {itemsToRender.map(({ value }) => (
            <SfChip
              key={value}
              className="uppercase md:sf-chip-sm md:h-8 h-10"
              inputProps={{ checked: selected.includes(value), onChange: () => onItemClick(value) }}
            >
              <span className="leading-4">{value}</span>
            </SfChip>
          ))}
        </div>
      )}
    </FilterBase>
  );
}
