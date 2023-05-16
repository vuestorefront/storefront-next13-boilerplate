import { useState } from 'react';
import Link from 'next/link';
import { SfDropdown, SfButton, SfIconMoreHoriz, SfLink } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import type { BreadcrumbsProps } from '~/components';

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const { t } = useTranslation();
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const close = () => {
    setDropdownOpened(false);
  };
  const toggle = () => {
    setDropdownOpened(!dropdownOpened);
  };

  return (
    <nav data-testid="breadcrumbs" className="inline-flex font-normal font-body typography-text-sm">
      <ol className="flex items-center w-auto leading-none group md:flex-wrap">
        <li className="flex items-center sm:hidden text-neutral-500">
          <SfDropdown
            trigger={
              <SfButton
                data-testid="breadcrumbsDropdownButton"
                className="relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent"
                aria-label={t('breadcrumbsDropdownText')}
                type="button"
                variant="tertiary"
                slotPrefix={
                  <SfIconMoreHoriz
                    size="sm"
                    className="text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent"
                  />
                }
                square
                onClick={toggle}
              />
            }
            open={dropdownOpened}
            strategy="absolute"
            placement="bottom-start"
            onClose={close}
          >
            <ol data-testid="breadcrumbsDropdown" className="px-4 py-2 rounded-md shadow-md border-neutral-100">
              {breadcrumbs.map(({ name, link }) => (
                <li className="py-2 last-of-type:hidden" key={name}>
                  <SfLink
                    as={Link}
                    href={link}
                    variant="secondary"
                    className="leading-5 no-underline text-inherit hover:underline active:underline whitespace-nowrap outline-secondary-600"
                  >
                    {name}
                  </SfLink>
                </li>
              ))}
            </ol>
          </SfDropdown>
        </li>
        {breadcrumbs.map((item) => (
          <li
            className="peer hidden sm:flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium"
            key={item.name}
          >
            <SfLink
              as={Link}
              href={item.link}
              variant="secondary"
              className="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
            >
              {item.name}
            </SfLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}
