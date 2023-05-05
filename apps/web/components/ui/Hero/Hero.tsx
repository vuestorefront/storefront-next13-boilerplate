import Image from 'next/legacy/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import type { HeroProps } from './types';

export function Hero({ fields, ...attributes }: HeroProps) {
  return (
    <div className="relative min-h-[600px] mb-10" {...attributes}>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-screen-3xl mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <Image
            src={fields.image}
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
            Feel the music
          </p>
          <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            New Wireless Pro
          </h1>
          <p className="typography-text-base md:typography-text-lg">
            Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg" as={Link} href="/product/page/1">
              {'Order now'}
            </SfButton>
            <SfButton size="lg" as={Link} href="/category" className="bg-white" variant="secondary">
              {'Show more'}
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}
