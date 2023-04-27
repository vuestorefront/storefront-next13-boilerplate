import { GetServerSidePropsContext } from 'next';
import { CartPageContent, NarrowContainer } from '@/components';
import { CheckoutLayout } from '@/layouts';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      key: 'cart',
      ...(await serverSideTranslations(locale as string, ['cart', 'common', 'footer', 'product', 'message'])),
    },
  };
}

export function CartPage() {
  const { t } = useTranslation('cart');

  return (
    <CheckoutLayout backLabel={t('backToShopping')} backHref="/category" heading={t('myCart')}>
      <NarrowContainer>
        <CartPageContent />
      </NarrowContainer>
    </CheckoutLayout>
  );
}

export default CartPage;
