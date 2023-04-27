import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Divider } from '~/components';
import ContactInformation from '~/components/ContactInformation';
import { CheckoutLayout } from '~/layouts';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      key: 'checkout',
      ...(await serverSideTranslations(locale as string, [
        'cart',
        'checkout',
        'common',
        'footer',
        'address',
        'message',
      ])),
    },
  };
}

export default function Checkout() {
  const { t } = useTranslation('checkout');

  return (
    <CheckoutLayout backHref="/cart" backLabel={t('back')} heading={t('checkout')}>
      <div className="md:grid md:grid-cols-12 md:gap-x-6">
        <div className="col-span-7 mb-10 md:mb-0">
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />
          <ContactInformation />
          <Divider className="w-screen md:w-auto -mx-4 md:mx-0" />
        </div>
        <div className="col-span-5 md:p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 h-fit">
          order summary
        </div>
      </div>
    </CheckoutLayout>
  );
}
