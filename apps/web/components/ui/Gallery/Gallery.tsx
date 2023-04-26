import { useState } from 'react';
import { useTimeoutFn } from 'react-use';
import Image from 'next/legacy/image';
import { SfButton, SfIconChevronLeft, SfIconChevronRight, SfScrollable } from '@storefront-ui/react';
import { SfScrollableOnScrollData, clamp } from '@storefront-ui/shared';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { GalleryProps } from './types';

export function Gallery({ images, className, ...attributes }: GalleryProps) {
  const { t } = useTranslation('product');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, cancel, reset] = useTimeoutFn(() => {}, 50);

  const imagesCount = images.length;

  const onChangeIndex = (index: number) => {
    cancel();
    setActiveIndex(() => clamp(index, 0, imagesCount - 1));
    reset();
  };

  const onScroll = ({ left, scrollWidth }: SfScrollableOnScrollData) => {
    if (isReady()) {
      onChangeIndex(Math.round(left / (scrollWidth / imagesCount)));
    }
  };

  return (
    <div
      {...attributes}
      className={classNames('flex-col md:flex-row h-full flex relative scroll-smooth md:gap-4', className)}
    >
      <div
        className="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full max-h-[600px]"
        data-testid="gallery-images"
      >
        <div className="absolute right-2 top-2 z-10 text-xs text-neutral-600 font-normal pointer-events-none rounded-md bg-neutral-100 px-2 py-1">
          {t('gallery.count', { current: activeIndex + 1, total: imagesCount })}
        </div>
        <SfScrollable
          className="items-center flex snap-x snap-mandatory scrollbar-hidden w-full h-full"
          wrapperClassNames="!absolute top-0 left-0 w-full h-full"
          buttonsPlacement="none"
          activeIndex={activeIndex.toString() as any}
          onScroll={onScroll}
        >
          {images.map((image, index) => (
            <div className="w-full h-full relative snap-center snap-always basis-full shrink-0 grow" key={image}>
              <Image
                alt={t('gallery.image', { index: index + 1 })}
                aria-hidden={activeIndex !== index}
                layout="fill"
                className="object-contain"
                priority={index === 0}
                quality={80}
                draggable={false}
                src={image}
                sizes="(max-width: 1023px) 100vw, 700px"
                crossOrigin="anonymous"
              />
            </div>
          ))}
        </SfScrollable>
      </div>
      <div className="md:-order-1 overflow-hidden flex-shrink-0 basis-auto" data-testid="gallery-controls">
        <SfScrollable
          wrapperClassNames="hidden md:inline-flex"
          buttonsPlacement="floating"
          direction="vertical"
          className="flex-row w-full items-center md:flex-col md:h-full md:px-0 md:scroll-pl-4 snap-y snap-mandatory flex gap-0.5 md:gap-2 overflow-auto scrollbar-hidden"
          activeIndex={activeIndex}
          previousDisabled={activeIndex === 0}
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
              key={image}
              type="button"
              aria-current={activeIndex === index}
              aria-label={t('gallery.thumb', { index: index + 1 })}
              className={classNames(
                'w-20 h-[88px] relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow-0',
                [activeIndex === index ? 'border-primary-700' : 'border-transparent'],
              )}
              onClick={() => onChangeIndex(index)}
              data-testid="gallery-thumb"
            >
              <Image
                alt=""
                className="object-contain"
                layout="fixed"
                width="80"
                height="80"
                src={image}
                quality={80}
                crossOrigin="anonymous"
              />
            </button>
          ))}
        </SfScrollable>
        <div className="flex md:hidden gap-0.5" role="group">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-current={activeIndex === index}
              aria-label={t('gallery.thumb', { index: index + 1 })}
              className={classNames('relative shrink-0 pb-1 border-b-4 cursor-pointer transition-colors flex-grow ', [
                activeIndex === index ? 'border-primary-700' : 'border-neutral-200',
              ])}
              onClick={() => onChangeIndex(index)}
              data-testid="gallery-bullet"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
