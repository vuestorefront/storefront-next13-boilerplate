import Image from 'next/legacy/image';
import NextLink from 'next/link';
import { SfButton } from '@storefront-ui/react';
import type { HeroProps } from '~/components';

export function Hero({
  image,
  subtitle,
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  ...attributes
}: HeroProps) {
  return (
    <div className="relative min-h-[600px] mb-10" {...attributes}>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-screen-3xl mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <Image
            src={image}
            alt="Hero"
            className="h-full object-cover object-left"
            height={600}
            width={764}
            sizes="(max-width: 767px) 90vw, (max-width: 1365px) 50vw, 764px"
            priority
            crossOrigin="anonymous"
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            {subtitle}
          </p>
          <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            {title}
          </h1>
          <p className="typography-text-base md:typography-text-lg">{description}</p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg" as={NextLink} href={primaryButtonLink}>
              {primaryButtonText}
            </SfButton>
            <SfButton size="lg" as={NextLink} href={secondaryButtonLink} className="bg-white" variant="secondary">
              {secondaryButtonText}
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}
