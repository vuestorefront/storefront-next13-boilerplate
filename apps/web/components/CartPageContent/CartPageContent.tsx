import Image from 'next/image';
import NextLink from 'next/link';
import { SfButton } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { CartProductCard } from '~/components/CartProductCard';
import { OrderSummary } from '~/components/OrderSummary';
import { useCart } from '~/hooks';
import emptyCartImage from '~/public/images/empty-cart.svg';

export function CartPageContent() {
  const { t } = useTranslation('cart');
  const { data: cart } = useCart();

  const isEmpty = !cart?.lineItems.length;

  return isEmpty ? (
    <div className="flex items-center justify-center flex-col pt-24 pb-32">
      <Image src={emptyCartImage} alt={t('emptyCartImgAlt')} />
      <h2 className="mt-8">{t('emptyCart')}</h2>
    </div>
  ) : (
    <div className="md:grid md:grid-cols-12 md:gap-x-6">
      <div className="col-span-7 mb-10 md:mb-0">
        {cart.lineItems.map((item) => (
          <CartProductCard key={item.id} item={item} />
        ))}
      </div>
      <OrderSummary className="col-span-5 md:sticky md:top-20 h-fit">
        <SfButton as={NextLink} href="/checkout" data-testid="goToCheckout" size="lg" className="w-full mb-4 md:mb-0">
          {t('goToCheckout')}
        </SfButton>
      </OrderSummary>
    </div>
  );
}
