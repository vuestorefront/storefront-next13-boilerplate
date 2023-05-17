import Image from 'next/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import type { DisplayProps } from '~/components';

export function Display({ items, ...attributes }: DisplayProps) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap gap-6 max-w-screen-3xl mx-auto px-4 md:px-10 mb-10"
      data-testid="display"
      {...attributes}
    >
      {items.map(({ image, title, subtitle, description, buttonText, reverse, titleClass, subtitleClass }) => (
        <div
          key={title}
          className="relative flex md:max-w-screen-3xl md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full first:bg-secondary-200 last:bg-warning-200 even:bg-negative-200"
        >
          <div
            className={classNames('flex overflow-hidden grow flex-col', {
              'flex-col-reverse': reverse,
              'md:flex-row-reverse': reverse,
            })}
          >
            <div className="flex flex-1 flex-col justify-center items-center md:items-start p-6 lg:p-10 max-w-1/2">
              <p className={classNames('uppercase typography-text-xs block font-bold tracking-widest', subtitleClass)}>
                {subtitle}
              </p>
              <h2 className={classNames('mb-4 mt-2 font-bold typography-headline-3', titleClass)}>{title}</h2>
              <p className="typography-text-base block text-center md:text-left mb-4">{description}</p>
              <SfButton className="!bg-black" as={Link} href="/category">
                {buttonText}
              </SfButton>
            </div>
            <Image
              src={image}
              alt={title}
              className="w-full md:w-1/2 self-end object-contain flex-1"
              height={300}
              width={300}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
