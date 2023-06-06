import { useRef, useState } from 'react';
import { useTimeoutFn, useIntersection, useMedia } from 'react-use';
import Image from 'next/image';
import { SfButton, SfIconChevronLeft, SfIconChevronRight, SfScrollable } from '@storefront-ui/react';
import { clamp, type SfScrollableOnScrollData } from '@storefront-ui/shared';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { GalleryProps } from './types';

export function Gallery({ images, className, ...attributes }: GalleryProps) {
  const { t } = useTranslation('product');
  const isTabletScreen = useMedia('(min-width: 768px)', false);
  const thumbnailsReference = useRef<HTMLDivElement>(null);
  const firstThumbnailReference = useRef<HTMLButtonElement>(null);
  const lastThumbnailReference = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, cancel, reset] = useTimeoutFn(() => {}, 50);

  const firstVisibleThumbnail = useIntersection(firstThumbnailReference, {
    root: thumbnailsReference.current,
    rootMargin: '0px',
    threshold: 1,
  });

  const lastVisibleThumbnail = useIntersection(lastThumbnailReference, {
    root: thumbnailsReference.current,
    rootMargin: '0px',
    threshold: 1,
  });

  const getThumbReference = (index: number) => {
    if (isTabletScreen) {
      if (index === 0) {
        return firstThumbnailReference;
      }
      if (index === images.length - 1) {
        return lastThumbnailReference;
      }
    }

    return null;
  };

  const onChangeIndex = (index: number) => {
    cancel();
    setActiveIndex(() => clamp(index, 0, images.length - 1));
    reset();
  };

  const onScroll = ({ left, scrollWidth }: SfScrollableOnScrollData) => {
    if (isReady()) {
      onChangeIndex(Math.round(left / (scrollWidth / images.length)));
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
        <SfScrollable
          className="items-center flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-full"
          wrapperClassName="!absolute top-0 left-0 w-full h-full"
          buttonsPlacement="none"
          activeIndex={activeIndex}
          isActiveIndexCentered
          drag={{ containerWidth: true }}
          onScroll={onScroll}
        >
          {images.map((image, index) => (
            <div className="w-full h-full relative snap-center snap-always basis-full shrink-0 grow" key={image.url}>
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
              />
            </div>
          ))}
        </SfScrollable>
      </div>
      <div className="md:-order-1 overflow-hidden flex-shrink-0 basis-auto">
        <SfScrollable
          ref={thumbnailsReference}
          wrapperClassName="hidden md:inline-flex"
          direction="vertical"
          className="flex-row w-full items-center md:flex-col md:h-full md:px-0 md:scroll-pl-4 snap-y snap-mandatory flex gap-0.5 md:gap-2 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          activeIndex={activeIndex}
          prevDisabled={activeIndex === 0}
          nextDisabled={activeIndex === images.length - 1}
          slotPreviousButton={
            <SfButton
              variant="secondary"
              size="sm"
              square
              className={classNames(
                'absolute !rounded-full bg-white z-10 top-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500',
                { hidden: firstVisibleThumbnail?.isIntersecting },
              )}
              slotPrefix={<SfIconChevronLeft />}
              aria-label={t('gallery.prev')}
            />
          }
          slotNextButton={
            <SfButton
              variant="secondary"
              size="sm"
              square
              className={classNames(
                'absolute !rounded-full bg-white z-10 bottom-4 rotate-90 disabled:!hidden !ring-neutral-500 !text-neutral-500',
                { hidden: lastVisibleThumbnail?.isIntersecting },
              )}
              slotPrefix={<SfIconChevronRight />}
              aria-label={t('gallery.next')}
            />
          }
        >
          {images.map((image, index) => (
            <button
              ref={getThumbReference(index)}
              key={image.url}
              type="button"
              aria-current={activeIndex === index}
              aria-label={t('gallery.thumb', { index: index + 1 })}
              className={classNames(
                'w-20 h-[88px] relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow-0',
                [activeIndex === index ? 'border-primary-700' : 'border-transparent'],
              )}
              onMouseOver={() => onChangeIndex(index)}
              onFocus={() => onChangeIndex(index)}
            >
              <Image alt="" className="object-contain" width="80" height="80" src={image.url} quality={80} />
            </button>
          ))}
        </SfScrollable>
        <div className="flex md:hidden gap-0.5" role="group">
          {images.map((image, index) => (
            <button
              key={image.url}
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
