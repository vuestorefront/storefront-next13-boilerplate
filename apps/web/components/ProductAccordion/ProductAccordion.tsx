import { useState } from 'react';
import { getReviewMock } from '@/mocks/product';
import { SfAccordionItem, SfIconExpandLess } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { Divider, Review } from '~/components/ui';

const reviews = getReviewMock(5);

export function ProductAccordion() {
  const { t } = useTranslation('product');
  const [opened, setOpened] = useState<string[]>(['description']);

  const isOpen = (id: string) => opened.includes(id);

  const handleToggle = (id: string) => (open: boolean) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  return (
    <>
      <SfAccordionItem
        summary={
          <>
            <h2 className="font-bold font-headings text-lg leading-6 md:text-2xl">{t('productDetails')}</h2>
            <SfIconExpandLess className={'text-neutral-500 transition-transform'} />
          </>
        }
        summaryClassName="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
        open={isOpen('description')}
        onToggle={handleToggle('description')}
      >
        <div className="py-2">
          <p className="text-neutral-900 px-4" data-testid="productDescription">
            Introducing our newest product - a versatile and durable solution for all your needs. With its innovative
            design and high-quality materials, this product is perfect for both personal and professional use. Get ready
            to experience unparalleled functionality and convenience with our top-of-the-line offering.
          </p>
        </div>
      </SfAccordionItem>
      <Divider className="my-4" />
      <SfAccordionItem
        summary={
          <>
            <h2 className="font-bold font-headings text-lg leading-6 md:text-2xl">{t('customerReviews')}</h2>
            <SfIconExpandLess className={'text-neutral-500 transition-transform'} />
          </>
        }
        summaryClassName="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
        open={isOpen('reviews')}
        onToggle={handleToggle('reviews')}
      >
        <div className="py-2">
          <div className="text-neutral-900 px-4" data-testid="customerReviews">
            {reviews.map((review) => (
              <Review {...review} key={review.id} />
            ))}
          </div>
        </div>
      </SfAccordionItem>
    </>
  );
}
