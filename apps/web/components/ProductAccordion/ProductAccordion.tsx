import { useState } from 'react';
import { SfAccordionItem, SfIconExpandLess } from '@storefront-ui/react';
import { SfProduct } from '@vsf-enterprise/unified-data-model';
import { xor } from 'lodash-es';
import { useTranslation } from 'next-i18next';
import { Divider, Review } from '~/components/ui';
import { useProductReviews } from '~/hooks';

export function ProductAccordion({ product }: { product: SfProduct }): JSX.Element {
  const { description, slug } = product;
  const { t } = useTranslation('product');
  const { data: reviews = [] } = useProductReviews(slug);

  const [opened, setOpened] = useState<string[]>(['description']);
  const isOpen = (id: string) => opened.includes(id);
  const handleToggle = (id: string) => () => {
    setOpened((current) => xor(current, [id]));
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
            {description}
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
              <Review review={review} key={review.id} />
            ))}
          </div>
        </div>
      </SfAccordionItem>
    </>
  );
}
