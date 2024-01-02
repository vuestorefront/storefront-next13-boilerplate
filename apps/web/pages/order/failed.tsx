import Image from 'next/image';
import Link from 'next/link';
import { SfButton, SfIconArrowBack } from '@storefront-ui/react';
import { Trans, useTranslation } from 'next-i18next';
import { createGetServerSideProps } from '~/helpers';
import { OrderLayout } from '~/layouts';
import somethingWentWrongImage from '~/public/images/something-went-wrong.svg';

export const getServerSideProps = createGetServerSideProps({ i18nNamespaces: ['order'] }, async (context) => {
  context.res.setHeader('Cache-Control', 'no-cache');
});

export function OrderFailedPage() {
  const { t } = useTranslation('order');

  return (
    <OrderLayout>
      <div data-testid="order-failed-page" className="px-4 md:px-0">
        <div className="border border-1 border-neutral-200 mt-10 mb-20 rounded p-4 md:p-6 flex flex-col items-center max-w-2xl mx-auto">
          <Image src={somethingWentWrongImage} alt={t('somethingWentWrongImageAlt')} />
          <Trans ns="order" i18nKey="failedInfo">
            <h1 className="mt-6 mb-1 text-2xl">We are really sorry.</h1>
            <span className="font-medium">Your order has not been completed.</span>
          </Trans>
          <div className="border border-1 border-neutral-200 rounded bg-neutral-100 p-4 w-full my-4 text-sm">
            {t('orderErrorMessage')}
          </div>
          <SfButton
            as={Link}
            href="/checkout"
            className="max-md:w-full"
            variant="secondary"
            slotPrefix={<SfIconArrowBack />}
          >
            {t('backToCheckout')}
          </SfButton>
          <SfButton as={Link} href="/" className="mt-4 max-md:w-full" variant="tertiary">
            {t('continueShopping')}
          </SfButton>
        </div>
      </div>
    </OrderLayout>
  );
}

export default OrderFailedPage;
