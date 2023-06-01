import Link from 'next/link';
import classNames from 'classnames';
import { VsfLogo } from '~/components';
import type { NavbarTopProps } from '~/components';

export function NavbarTop({ children, filled, ...attributes }: NavbarTopProps) {
  return (
    <header
      className={classNames(
        'h-14 md:h-20 flex z-50 md:sticky md:-top-5 md:pt-2.5 md:shadow-md',
        filled ? 'bg-primary-700 text-white' : 'bg-white text-[#02C652] border-b border-neutral-200',
      )}
      data-testid="navbar-top"
      {...attributes}
    >
      <div className="flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[60px] max-w-screen-3xl py-6 px-4 md:px-6 lg:px-10 mx-auto sticky top-0">
        <Link href="/" aria-label="SF Homepage" className="h-6 md:h-7 -mt-1.5">
          <VsfLogo />
        </Link>
        {children}
      </div>
    </header>
  );
}
