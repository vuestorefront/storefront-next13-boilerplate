import Image from 'next/legacy/image';
import Link from 'next/link';
import card3 from '~/public/images/men_card.png';
import card2 from '~/public/images/new_card.png';
import card1 from '~/public/images/women_card.png';

const categories = [
  {
    title: `Women`,
    image: card1.src,
  },
  {
    title: `Men`,
    image: card2.src,
  },
  {
    title: `New`,
    image: card3.src,
  },
];
export function CategoryCard() {
  return (
    <div className="max-w-screen-3xl mx-auto md:px-10 px-4 mb-10 flex flex-nowrap md:flex-wrap md:justify-center overflow-x-scroll scrollbar-hidden">
      {categories.map(({ title, image }) => (
        <div className="relative min-w-[180px] flex-col max-w-[240px] mr-2 md:mr-6 group" key={title}>
          <Link
            className="w-full h-full z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
            href="/category"
            aria-label={title}
          >
            <Image
              className="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
              src={image}
              alt={title}
              width={240}
              height={240}
            />
            <div className="flex justify-center">
              <p className="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal">
                {title}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
