'use client';

import { ComponentProps, forwardRef, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Link from 'next/link';
import i18next from 'i18next';

type Props = ComponentProps<typeof NextLink>;

function hasDefaultLocale() {
  return Array.isArray(i18next.options.fallbackLng)
    ? i18next.options.fallbackLng.includes(i18next.resolvedLanguage)
    : i18next.options.fallbackLng === i18next.resolvedLanguage;
}

// eslint-disable-next-line unicorn/prevent-abbreviations
function BaseLink(props: Props, ref: Props['ref']) {
  const { href, children, prefetch = false, ...rest } = props;
  const [locHref, setLocHref] = useState<typeof href>(href);

  useEffect(() => {
    if (i18next.isInitialized && !hasDefaultLocale()) {
      setLocHref(`/${i18next.resolvedLanguage}${href}`);
    }
  }, [href, i18next.resolvedLanguage]);

  return (
    // prefetch=false leads to hard page reload
    <Link {...rest} href={locHref} ref={ref}>
      {children}
    </Link>
  );
}

export default forwardRef(BaseLink);
