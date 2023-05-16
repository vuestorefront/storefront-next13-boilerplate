import { useRef } from 'react';
import { useIntersection } from 'react-use';
import { SfButton, SfIconExpandLess } from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

export function ScrollToTopButton(): JSX.Element {
  const { t } = useTranslation();
  const intersectionReference = useRef(null);
  const intersection = useIntersection(intersectionReference, {
    rootMargin: '0px',
    threshold: 0,
  });

  return (
    <div ref={intersectionReference} className="top-1/2 pointer-events-none z-40 absolute" data-testid="scroll-top">
      <SfButton
        square
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        variant="secondary"
        aria-label={t('scrollTop')}
        className={classNames(
          'bg-white transition-opacity fixed right-4 bottom-20',
          intersection?.isIntersecting ? 'opacity-0' : 'opacity-100 pointer-events-auto',
        )}
        slotPrefix={<SfIconExpandLess />}
      />
    </div>
  );
}
