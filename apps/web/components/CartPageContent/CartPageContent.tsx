import Image from 'next/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { OrderSummary, CartProductCard } from '~/components';
import { useCart } from '~/hooks';
import emptyCartImage from '~/public/images/empty-cart.svg';

export function CartPageContent() {
  const { t } = useTranslation('cart');
  const { data: cart } = useCart();

  return cart?.lineItems.length ? (
    <div className="md:grid md:grid-cols-12 md:gap-x-6" data-testid="cart-page-content">
      <div className="col-span-7 mb-10 md:mb-0">
        {cart.lineItems.map((item) => (
          <CartProductCard
            key={item.id}
            attributes={item.attributes}
            imageUrl={item.image?.url}
            imageAlt={item.image?.alt}
            name={item.name}
            price={item.totalPrice?.amount || 0}
            specialPrice={item.unitPrice?.value?.amount || 0}
            maxValue={10}
            minValue={1}
            value={item.quantity}
            slug={item.slug}
          />
        ))}
      </div>
      <OrderSummary cart={cart} className="col-span-5 md:sticky md:top-20 h-fit">
        <SfButton as={Link} href="/checkout" size="lg" className="w-full mb-4 md:mb-0">
          {t('goToCheckout')}
        </SfButton>
      </OrderSummary>
    </div>
  ) : (
    <div className="flex items-center justify-center flex-col pt-24 pb-32" data-testid="cart-page-content">
      <Image src={emptyCartImage} alt={t('emptyCartImgAlt')} />
      <h2 className="mt-8">{t('emptyCart')}</h2>
    </div>
  );
}
