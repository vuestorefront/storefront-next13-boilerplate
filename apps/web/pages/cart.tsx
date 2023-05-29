import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CartPageContent } from '~/components';
import { CheckoutLayout } from '~/layouts';

export async function getServerSideProps({ res, locale }: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'no-cache');

  return {
    props: {
      key: 'cart',
      ...(await serverSideTranslations(locale as string, ['cart', 'common', 'footer', 'product'])),
    },
  };
}

export function CartPage() {
  const { t } = useTranslation('cart');

  return (
    <CheckoutLayout backLabel={t('backToShopping')} backHref="/category" heading={t('myCart')}>
      <CartPageContent />
    </CheckoutLayout>
  );
}

export default CartPage;
