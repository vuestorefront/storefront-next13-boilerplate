import { useState } from 'react';
import Image from 'next/image';
import { SfButton, SfIconChevronLeft, SfIconChevronRight, SfScrollable } from '@storefront-ui/react';
import { clamp } from '@storefront-ui/shared';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import type { GalleryProps } from '~/components';

export function Gallery({ images, className, ...attributes }: GalleryProps) {
  const { t } = useTranslation('product');
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesCount = images.length;

  const onChangeIndex = (index: number) => {
    setActiveIndex(() => clamp(index, 0, imagesCount - 1));
  };

  return (
    <div
      {...attributes}
      className={classNames('flex-col md:flex-row h-full flex relative scroll-smooth md:gap-4', className)}
    >
      <div className="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full max-h-[600px]">
        <div className="absolute right-2 top-2 z-10 text-xs text-neutral-600 font-normal pointer-events-none rounded-md bg-neutral-100 px-2 py-1">
          {t('gallery.count', { current: activeIndex + 1, total: imagesCount })}
        </div>
        <SfScrollable
          className="items-center flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-full"
          wrapperClassName="!absolute top-0 left-0 w-full h-full"
          buttonsPlacement="none"
          activeIndex={activeIndex}
        >
          {images.map((image, index) => (
            <div className="w-full h-full relative snap-center snap-always basis-full shrink-0 grow" key={image.alt}>
              <Image
                alt={image.alt ?? ''}
                aria-hidden={activeIndex !== index}
                fill
                className="object-contain"
                priority={index === 0}
                quality={80}
                draggable={false}
                src={image.url}
                sizes="(max-width: 768px) 100vw, 700px"
                crossOrigin="anonymous"
              />
            </div>
          ))}
        </SfScrollable>
      </div>
      <div className="md:-order-1 overflow-hidden flex-shrink-0 basis-auto">
        <SfScrollable
          wrapperClassName="hidden md:inline-flex"
          buttonsPlacement="floating"
          direction="vertical"
          className="flex-row w-full items-center md:flex-col md:h-full md:px-0 md:scroll-pl-4 snap-y snap-mandatory flex gap-0.5 md:gap-2 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          activeIndex={activeIndex}
          prevDisabled={activeIndex === 0}
          nextDisabled={activeIndex === imagesCount - 1}
          slotPreviousButton={
            <SfButton
              variant="secondary"
              size="sm"
              square
              className="absolute !rounded-full bg-white z-10 top-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500"
              slotPrefix={<SfIconChevronLeft />}
              aria-label={t('gallery.prev')}
            />
          }
          slotNextButton={
            <SfButton
              variant="secondary"
              size="sm"
              square
              className="absolute !rounded-full bg-white z-10 bottom-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500"
              slotPrefix={<SfIconChevronRight />}
              aria-label={t('gallery.next')}
            />
          }
        >
          {images.map((image, index) => (
            <button
              key={image.alt}
              type="button"
              aria-current={activeIndex === index}
              aria-label={t('gallery.thumb', { index: index + 1 })}
              className={classNames(
                'w-20 h-[88px] relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow-0',
                [activeIndex === index ? 'border-primary-700' : 'border-transparent'],
              )}
              onClick={() => onChangeIndex(index)}
            >
              <Image
                alt=""
                className="object-contain"
                width="80"
                height="80"
                src={image.url}
                quality={80}
                crossOrigin="anonymous"
              />
            </button>
          ))}
        </SfScrollable>
        <div className="flex md:hidden gap-0.5" role="group">
          {images.map((image, index) => (
            <button
              key={image.alt}
              type="button"
              aria-current={activeIndex === index}
              aria-label={t('gallery.thumb', { index: index + 1 })}
              className={classNames('relative shrink-0 pb-1 border-b-4 cursor-pointer transition-colors flex-grow ', [
                activeIndex === index ? 'border-primary-700' : 'border-neutral-200',
              ])}
              onClick={() => onChangeIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
