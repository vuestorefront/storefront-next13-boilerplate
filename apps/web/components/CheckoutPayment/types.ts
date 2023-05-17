import { PropsWithChildren } from 'react';

export enum PaymentMethods {
  CreditCard = 'credit-card',
  PayPal = 'pay-pal',
  ApplePay = 'apple-pay',
  GooglePay = 'google-pay',
}

export type PaymentMethodProps = PropsWithChildren & {
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export type CheckoutPaymentProps = {
  activePayment: string;
  onPaymentChange: (paymentMethod: PaymentMethods) => void;
};
