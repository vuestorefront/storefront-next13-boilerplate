import { Fragment } from 'react';
import { SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import type { PaginationProps } from '~/components';
import { usePagination } from '~/hooks';

export function Pagination({ currentPage, pageSize, totalItems, maxVisiblePages }: PaginationProps) {
  const { t } = useTranslation('category');
  const { totalPages, pages, selectedPage, startPage, endPage, next, prev, setPage } = usePagination({
    totalItems,
    currentPage,
    pageSize,
    maxPages: maxVisiblePages,
  });

  return (
    <nav
      className="flex justify-between items-center border-t border-neutral-200"
      role="navigation"
      aria-label="pagination"
      data-testid="pagination"
    >
      <SfButton
        type="button"
        size="lg"
        className="gap-3 mt-2"
        aria-label={t('prevAriaLabel')}
        disabled={selectedPage <= 1}
        variant="tertiary"
        slotPrefix={<SfIconChevronLeft />}
        onClick={prev}
      >
        <span className="hidden sm:inline-flex">{t('prev')}</span>
      </SfButton>
      <ul className="flex flex-wrap justify-center">
        {!pages.find((page: number) => page === 1) && (
          <li>
            <div
              className={classNames('flex pt-1 border-t-4 border-transparent', {
                'font-medium border-t-4 !border-primary-700': selectedPage === 1,
              })}
            >
              <button
                type="button"
                className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900"
                aria-current={selectedPage === 1}
                onClick={() => setPage(1)}
              >
                1
              </button>
            </div>
          </li>
        )}
        {startPage > 2 && (
          <li>
            <div className="flex border-t-4 border-transparent">
              <button
                type="button"
                disabled
                aria-hidden="true"
                className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
              >
                ...
              </button>
            </div>
          </li>
        )}
        {pages.map((page: number) => (
          <Fragment key={page}>
            {maxVisiblePages === 1 && selectedPage === totalPages && (
              <li>
                <div className="flex pt-1 border-t-4 border-transparent">
                  <button
                    type="button"
                    className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                    aria-current={endPage - 1 === selectedPage}
                    onClick={() => setPage(endPage - 1)}
                  >
                    {endPage - 1}
                  </button>
                </div>
              </li>
            )}
            <li>
              <div
                className={classNames('flex pt-1 border-t-4 border-transparent', {
                  'font-medium border-t-4 !border-primary-700': selectedPage === page,
                })}
              >
                <button
                  type="button"
                  className={classNames(
                    'px-4 py-3 text-neutral-500 rounded-md hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900',
                    { '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900': selectedPage === page },
                  )}
                  aria-label={t('currentPage', { page, totalPages })}
                  aria-current={selectedPage === page}
                  onClick={() => setPage(page)}
                >
                  {page}
                </button>
              </div>
            </li>
            {maxVisiblePages === 1 && selectedPage === 1 && (
              <li>
                <div className="flex pt-1 border-t-4 border-transparent">
                  <button
                    type="button"
                    aria-label={t('secondPageAriaLabel')}
                    className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                    aria-current={selectedPage === 1}
                    onClick={() => setPage(2)}
                  >
                    2
                  </button>
                </div>
              </li>
            )}
          </Fragment>
        ))}
        {endPage < totalPages - 1 && (
          <li>
            <div className="flex pt-1 border-t-4 border-transparent">
              <button type="button" disabled aria-hidden="true" className="px-4 py-3 rounded-md text-neutral-500">
                ...
              </button>
            </div>
          </li>
        )}
        {!pages.find((page: number) => page === totalPages) && (
          <li>
            <div
              className={classNames('flex pt-1 border-t-4 border-transparent', {
                'font-medium border-t-4 !border-primary-700': selectedPage === totalPages,
              })}
            >
              <button
                type="button"
                className="px-4 py-3 rounded-md text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 "
                aria-label={t('lastPageAriaLabel')}
                aria-current={totalPages === selectedPage}
                onClick={() => setPage(totalPages)}
              >
                {totalPages}
              </button>
            </div>
          </li>
        )}
      </ul>
      <SfButton
        type="button"
        size="lg"
        aria-label={t('nextAriaLabel')}
        disabled={selectedPage >= totalPages}
        variant="tertiary"
        slotSuffix={<SfIconChevronRight />}
        className="gap-3 mt-2"
        onClick={next}
      >
        <span className="hidden sm:inline-flex">{t('next')}</span>
      </SfButton>
    </nav>
  );
}
