'use client';

import Link from '~/app/i18n/components/Link';
import { useCart } from '~/hooks';
import { useTranslation } from '../../i18n/client';
import { Badge } from '../Badge';
import { NavbarTop } from '../NavbarTop';
import { SfButton, SfIconExpandMore, SfIconShoppingCart } from '../SFUI';
import { Search } from '../Search';
import { Switch } from './Switch';

export function Navbar() {
  const { t } = useTranslation('common');
  const { data: cart1 } = useCart();

  const cartLineItemsCount = cart1?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0;

  return (
    <NavbarTop filled>
      <Switch></Switch>
      <SfButton
        className="!px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex"
        as={Link}
        href="/category"
        slotSuffix={<SfIconExpandMore />}
        variant="tertiary"
      >
        <span>{t('allProductsLinkText')}</span>
      </SfButton>
      <Search className="hidden md:block flex-1" />
      <nav className="hidden md:flex md:flex-row md:flex-nowrap">
        <SfButton
          className="mr-2 -ml-0.5 text-white bg-primary-700 hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
          as={Link}
          href="/cart"
          aria-label={t('numberInCart', { count: cartLineItemsCount })}
          variant="tertiary"
          square
          slotPrefix={
            <Badge bordered value={cartLineItemsCount} className="text-neutral-900 bg-white">
              <SfIconShoppingCart />
            </Badge>
          }
        />
      </nav>
    </NavbarTop>
  );
}
