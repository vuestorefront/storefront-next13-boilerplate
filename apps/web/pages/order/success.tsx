import Image from 'next/image';
import Link from 'next/link';
import { SfButton } from '@storefront-ui/react';
import { Trans, useTranslation } from 'next-i18next';
import { createGetServerSideProps } from '~/helpers';
import { OrderLayout } from '~/layouts';
import orderSuccessImage from '~/public/images/order-success.svg';

export const getServerSideProps = createGetServerSideProps({ i18nNamespaces: ['order'] }, async (context) => {
  context.res.setHeader('Cache-Control', 'no-cache');
});

export function OrderSuccessPage() {
  const { t } = useTranslation(['order', 'checkout']);

  return (
    <OrderLayout>
      <div className="px-4 md:px-0" data-testid="order-success-page">
        <div className="border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto">
          <Image src={orderSuccessImage} alt={t('orderSuccessfulImageAlt')} />
          <Trans ns="order" i18nKey="successInfo">
            <h1 className="mt-6 mb-1 text-2xl">Thank you!</h1>
            <span className="font-medium">Your order was completed successfully.</span>
          </Trans>
          <div className="border border-1 border-neutral-200 rounded bg-neutral-100 p-4 w-full my-4 text-sm">
            <h5 className="font-medium text-base">{t('etaDelivery')}</h5>
            <p className="capitalize">{t('tomorrow')}</p>
            <h5 className="font-medium text-base mt-4">{t('orderNumber')}</h5>
            <p>123456789</p>
          </div>
          <SfButton as={Link} href="/" replace className="max-md:w-full" variant="secondary">
            {t('continueShopping')}
          </SfButton>
        </div>
      </div>
    </OrderLayout>
  );
}

export default OrderSuccessPage;
