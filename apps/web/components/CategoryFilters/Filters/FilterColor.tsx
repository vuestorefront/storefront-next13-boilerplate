import { useTranslation } from 'next-i18next';
import { FilterProps } from '../types';
import { FilterBase } from './FilterBase';
import { FilterColorItem } from './FilterColorItem';

export function FilterColor({ facet, selected, onChange, max }: FilterProps) {
  const { t } = useTranslation('category');

  return (
    <FilterBase label={t('color')} facet={facet} selected={selected} onChange={onChange} max={max}>
      {({ itemsToRender, onItemClick }) =>
        itemsToRender.map((item) => (
          <FilterColorItem
            key={item.value}
            name={item.value}
            count={item.productCount || 0}
            selected={selected.includes(item.value)}
            onClick={() => onItemClick(item.value)}
            color={item.value}
            data-testid="filter-color-item"
          />
        ))
      }
    </FilterBase>
  );
}
