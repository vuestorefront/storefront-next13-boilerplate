import { useTranslation } from '~/app/i18n';
import Link from '~/app/i18n/components/Link';
import { NavbarTop } from '../NavbarTop';
import { SfButton, SfIconExpandMore } from '../SFUI';
import { Search } from '../Search';
import CartBadge from './CartBadge.client';

export async function Navbar() {
  const { t } = await useTranslation('common');

  return (
    <NavbarTop filled>
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
        <CartBadge />
      </nav>
    </NavbarTop>
  );
}
