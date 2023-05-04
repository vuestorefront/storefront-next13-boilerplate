import Image from 'next/legacy/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import hat from '~/public/images/display-1.png';
import sunglasses from '~/public/images/display-2.png';
import backpack from '~/public/images/display-3.png';

const displayDetails = [
  {
    image: hat,
    title: 'Fresh and Bold',
    subtitle: 'New collection',
    description: 'Add a pop up color to your outfit',
    buttonText: 'Discover now.',
    reverse: true,
    backgroundColor: 'bg-secondary-200',
    titleClass: 'md:typography-headline-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
  },
  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    buttonText: 'Discover now',
    image: backpack,
    backgroundColor: 'bg-warning-200',
    reverse: true,
  },
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    buttonText: 'Discover now',
    image: sunglasses,
    backgroundColor: 'bg-negative-200',
    reverse: true,
  },
];

export function Display({ ...attributes }) {
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap gap-6 max-w-screen-3xl mx-auto px-4 md:px-10 mb-10"
      {...attributes}
    >
      {displayDetails.map(
        ({ image, title, subtitle, description, buttonText, backgroundColor, reverse, titleClass, subtitleClass }) => (
          <div
            key={title}
            className={classNames(
              'relative flex md:max-w-screen-3xl md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
              backgroundColor,
            )}
          >
            <div
              className={classNames('flex justify-between overflow-hidden grow flex-col md:flex-row', {
                'flex-col-reverse': reverse,
                'md:flex-row-reverse': reverse,
              })}
            >
              <div className="flex flex-col justify-center items-center md:items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames('uppercase typography-text-xs block font-bold tracking-widest', subtitleClass)}
                >
                  {subtitle}
                </p>
                <h2 className={classNames('mb-4 mt-2 font-bold typography-headline-3', titleClass)}>{title}</h2>
                <p className="typography-text-base block text-center md:text-left mb-4">{description}</p>
                <SfButton className="!bg-black" as={Link} href="/category">
                  {buttonText}
                </SfButton>
              </div>
              <Image
                src={image.src}
                alt={title}
                className="w-full md:w-1/2 self-end object-contain"
                layout="intrinsic"
                height={768}
                width={768}
              />
            </div>
          </div>
        ),
      )}
    </div>
  );
}
