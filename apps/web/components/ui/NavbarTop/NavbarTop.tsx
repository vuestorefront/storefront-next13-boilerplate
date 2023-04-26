import Link from 'next/link';
import { Search, VsfLogo } from '@/components';
import { SfIconShoppingCart, SfIconFavorite, SfIconPerson, SfIconExpandMore, SfButton } from '@storefront-ui/react';

export function NavbarTop() {
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: '',
      ariaLabel: 'Cart',
      role: 'button',
    },
    {
      icon: <SfIconFavorite />,
      label: '',
      ariaLabel: 'Wishlist',
      role: 'button',
    },
    {
      label: 'Log in',
      icon: <SfIconPerson />,
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];

  return (
    <div className="w-full h-full bg-neutral-50 md:sticky md:-top-2.5 md:pt-0">
      <header className="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
        <div className="flex gap-[clamp(1rem,3vw,3rem)] items-center w-full max-w-screen-3xl py-6 px-4 md:px-6 lg:px-10 mx-auto sticky top-0">
          <Link href="/" aria-label="SF Homepage" className="h-6 md:h-7 -mt-1.5">
            <VsfLogo />
          </Link>
          <SfButton
            className="block !px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex"
            type="button"
            slotSuffix={<SfIconExpandMore />}
            variant="tertiary"
          >
            <span>Browse products</span>
          </SfButton>
          <Search className="hidden md:block flex-1" />
          <nav className="hidden md:flex md:flex-row md:flex-nowrap">
            {actionItems.map((actionItem) => (
              <SfButton
                className="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
              >
                {actionItem.role === 'login' && <p className="hidden md:inline-flex">{actionItem.label}</p>}
              </SfButton>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
