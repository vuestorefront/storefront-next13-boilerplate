import Image from 'next/image';
import { SfIconCreditCard } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { CheckoutPaymentProps, PaymentMethods } from '~/components';
import applePayImage from '~/public/images/apple-pay.svg';
import googlePayImage from '~/public/images/google-pay.svg';
import payPalImage from '~/public/images/paypal.svg';
import { PaymentMethod } from './PaymentMethod';

export function CheckoutPayment({ activePayment, onPaymentChange }: CheckoutPaymentProps): JSX.Element {
  const { t } = useTranslation('checkout');

  return (
    <div data-testid="checkout-payment" className="md:px-4 py-6">
      <h3 className="text-neutral-900 text-lg font-bold mb-4">{t('checkoutPayment.heading')}</h3>
      <div className="grid gap-4 grid-cols-2">
        <PaymentMethod
          onClick={() => onPaymentChange(PaymentMethods.CreditCard)}
          active={activePayment === PaymentMethods.CreditCard}
        >
          <>
            <SfIconCreditCard className="mr-2" />
            <span className="font-medium">{t('checkoutPayment.creditCard')}</span>
          </>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => onPaymentChange(PaymentMethods.PayPal)}
          active={activePayment === PaymentMethods.PayPal}
          disabled
        >
          <div className="flex flex-col items-center justify-center">
            <Image src={payPalImage} alt={t('checkoutPayment.paypalIconAlt')} />
            <span className="">{t('checkoutPayment.comingSoon')}</span>
          </div>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => onPaymentChange(PaymentMethods.ApplePay)}
          active={activePayment === PaymentMethods.ApplePay}
          disabled
        >
          <div className="flex flex-col items-center justify-center">
            <Image src={applePayImage} alt={t('checkoutPayment.applePayIconAlt')} />
            <span className="text-xs text-neutral-500">{t('checkoutPayment.comingSoon')}</span>
          </div>
        </PaymentMethod>

        <PaymentMethod
          onClick={() => onPaymentChange(PaymentMethods.GooglePay)}
          active={activePayment === PaymentMethods.GooglePay}
          disabled
        >
          <div className="flex flex-col items-center justify-center">
            <Image src={googlePayImage} alt={t('checkoutPayment.googlePayIconAlt')} />
            <span className="text-xs text-neutral-500">{t('checkoutPayment.comingSoon')}</span>
          </div>
        </PaymentMethod>
      </div>
    </div>
  );
}
