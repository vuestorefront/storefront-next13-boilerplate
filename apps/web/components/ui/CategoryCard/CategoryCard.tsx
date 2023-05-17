import Image from 'next/image';
import Link from 'next/link';
import type { CategoryCardProps } from '~/components';

export function CategoryCard({ items, ...attributes }: CategoryCardProps) {
  return (
    <div
      className="max-w-screen-3xl mx-auto md:px-10 px-4 mb-10 flex flex-nowrap md:flex-wrap md:justify-center overflow-x-scroll scrollbar-hidden"
      data-testid="category-card"
      {...attributes}
    >
      {items.map(({ name, image, slug }) => (
        <div className="mr-2 md:mr-6 group" key={name}>
          <Link
            className="w-full h-full z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
            href={slug}
            aria-label={name}
          >
            <div className="relative h-[240px] w-[240px] rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none">
              <Image src={image} alt={name} width={240} height={240} />
            </div>
            <div className="flex justify-center">
              <p className="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal">
                {name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
