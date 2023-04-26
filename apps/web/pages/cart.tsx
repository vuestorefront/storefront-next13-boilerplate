import OrderSummary from '@/components/OrderSummary';
import { DefaultLayout } from '@/layouts';

export default function Cart() {
  return (
    <DefaultLayout>
      <OrderSummary />
    </DefaultLayout>
  );
}
