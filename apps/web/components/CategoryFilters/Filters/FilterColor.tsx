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
            key={item.term}
            name={item.term}
            count={item.productCount || item.count}
            selected={selected.includes(item.term)}
            onClick={() => onItemClick(item.term)}
            color={item.term}
            data-testid="filter-color-item"
          />
        ))
      }
    </FilterBase>
  );
}
