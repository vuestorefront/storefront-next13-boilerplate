import { CSSProperties } from 'react';
import { SfListItem, SfChip, SfThumbnail, SfCounter } from '@storefront-ui/react';
import { FilterColorItemProps } from '../types';

const getColorVariable = (color: string): string => `var(--${color}, ${color})`;

export function FilterColorItem({
  disabled,
  className,
  color,
  children,
  onClick,
  name,
  count,
  selected,
  ...attributes
}: FilterColorItemProps): JSX.Element {
  return (
    <SfListItem
      slotPrefix={
        <SfChip
          square
          size="sm"
          className="!p-0.5"
          inputProps={{ onChange: onClick, defaultChecked: selected }}
          slotPrefix={
            <SfThumbnail
              className="sf-thumbnail"
              size="sm"
              style={{ '--color': getColorVariable(color) } as CSSProperties}
            />
          }
        />
      }
      as="label"
      className="md:sf-list-item-sm sf-list-item"
      selected={selected}
      size="lg"
      {...attributes}
    >
      <span className="flex gap-2 items-center">
        <span className="text-base md:text-sm capitalize" data-testid="list-item-menu-label">
          {name}
        </span>
        {Number(count) > -1 && (
          <SfCounter className="md:text-sm font-normal" data-testid="list-item-menu-counter">
            {count}
          </SfCounter>
        )}
      </span>
    </SfListItem>
  );
}
