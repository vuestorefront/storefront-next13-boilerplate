import { useTranslation } from 'next-i18next';
import { CartPageContent } from '~/components';
import { createGetServerSideProps } from '~/helpers';
import { CheckoutLayout } from '~/layouts';

export const getServerSideProps = createGetServerSideProps({ i18nNamespaces: ['cart', 'product'] }, (context) => {
  context.res.setHeader('Cache-Control', 'no-cache');
});

export function CartPage() {
  const { t } = useTranslation('cart');

  return (
    <CheckoutLayout backLabel={t('backToShopping')} backHref="/category" heading={t('myCart')}>
      <CartPageContent />
    </CheckoutLayout>
  );
}

export default CartPage;
