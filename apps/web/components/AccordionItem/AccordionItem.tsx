import { SfAccordionItem, SfIconExpandLess } from '@storefront-ui/react';
import classNames from 'classnames';
import { AccordionItemProps } from './types';

export function AccordionItem({
  children,
  label,
  open,
  onToggle,
  summaryClassName,
  ...attributes
}: AccordionItemProps) {
  return (
    <SfAccordionItem
      summary={
        <>
          {label}
          <SfIconExpandLess
            className={classNames('text-neutral-500 transition-transform', {
              'rotate-180': open,
            })}
          />
        </>
      }
      summaryClassName={classNames(
        'md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center',
        summaryClassName,
      )}
      open={open}
      onToggle={onToggle}
      {...attributes}
    >
      <div className="py-2">{children}</div>
    </SfAccordionItem>
  );
}
