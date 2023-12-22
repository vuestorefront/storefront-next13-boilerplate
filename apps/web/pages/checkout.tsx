import Link from 'next/link';
import { SfButton, SfLink } from '@storefront-ui/react';
import { Trans, useTranslation } from 'next-i18next';
import {
  Divider,
  OrderSummary,
  CheckoutAddress,
  CheckoutPayment,
  ContactInformation,
  ShippingMethod,
} from '~/components';
import { createGetServerSideProps } from '~/helpers';
import { useCart } from '~/hooks';
import { CheckoutLayout } from '~/layouts';

export const getServerSideProps = createGetServerSideProps(
  { i18nNamespaces: ['cart', 'checkout', 'address'] },
  async (context) => {
    context.res.setHeader('Cache-Control', 'no-cache');
  },
);

export default function Checkout() {
  const { t } = useTranslation('checkout');
  const { data: cart } = useCart();

  if (!cart) {
    return null;
  }

  return (
    <CheckoutLayout backHref="/cart" backLabel={t('back')} heading={t('checkout')}>
      <div className="md:grid md:grid-cols-12 md:gap-x-6">
        <div className="col-span-7 mb-10 md:mb-0">
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />
          <ContactInformation />
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />

          <CheckoutAddress
            heading={t('address:billing.heading')}
            description={t('address:billing.description')}
            buttonText={t('address:billing.addButton')}
            type="billingAddress"
          />
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />
          <CheckoutAddress
            heading={t('address:shipping.heading')}
            description={t('address:shipping.description')}
            buttonText={t('address:shipping.addButton')}
            type="shippingAddress"
          />
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />
          <ShippingMethod />
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />
          <CheckoutPayment activePayment="credit-card" onPaymentChange={() => {}} />
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0 mb-10" />
        </div>
        <OrderSummary cart={cart} className="col-span-5 md:sticky md:top-20 h-fit">
          <>
            <SfButton as={Link} href="/order/success" size="lg" className="w-full mb-4 md:mb-0">
              {t('placeOrder')}
            </SfButton>
            <p className="text-sm text-center mt-4 pb-4 md:pb-0">
              <Trans ns="checkout" i18nKey="termsInfo">
                By placing my order, you agree to our
                <SfLink
                  as={Link}
                  href="#"
                  className="focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
                >
                  Terms and Conditions
                </SfLink>
                and our
                <SfLink
                  as={Link}
                  href="#"
                  className="focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
                >
                  Privacy Policy
                </SfLink>
                .
              </Trans>
            </p>
          </>
        </OrderSummary>
      </div>
    </CheckoutLayout>
  );
}
