'use client';

import { useRef } from 'react';
import { useIntersection } from 'react-use';
import classNames from 'classnames';
import { useTranslation } from '../../i18n/client';
import { SfButton, SfIconExpandLess } from '../SFUI';

export const ScrollToTopButton = (): JSX.Element => {
  const { t } = useTranslation('en', 'common');

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
          intersectionReference.current && !intersection?.isIntersecting
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0',
        )}
        slotPrefix={<SfIconExpandLess />}
      />
    </div>
  );
};
