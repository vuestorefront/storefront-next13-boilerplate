/* eslint-disable max-statements */
import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
// import i18next from 'i18next';
import { getOptions } from './app/i18n/settings';

const options = getOptions();
acceptLanguage.languages(options.supportedLngs);

const COOKIE_NAME = 'i18next';

// eslint-disable-next-line max-params
function resolveLocale(
  options: any,
  pathname: string,
  headers: NextRequest['headers'],
  cookies: NextRequest['cookies'],
) {
  const pathLocale = pathname.split('/')[1];
  if (pathLocale && options.supportedLngs.includes(pathLocale)) {
    return pathLocale;
  }

  if (cookies.has(COOKIE_NAME)) {
    return acceptLanguage.get(cookies.get(COOKIE_NAME)?.value);
  }

  if (headers.has('accept-language')) {
    return acceptLanguage.get(headers.get('accept-language'));
  }

  return options.fallbackLng;
}

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|images|favicon.ico|sw.js).*)'],
};

// eslint-disable-next-line sonarjs/cognitive-complexity
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes('icon') || req.nextUrl.pathname.includes('chrome')) {
    return NextResponse.next();
  }
  const locale = resolveLocale(options, req.nextUrl.pathname, req.headers, req.cookies);
  const hasOutdatedCookie = req.cookies.get(COOKIE_NAME)?.value !== locale;
  const hasDefaultLocale = locale === options.fallbackLng;
  const isRoot = req.nextUrl.pathname === '/';

  const pathLocale = req.nextUrl.pathname.split('/')[1];
  const hasLocaleInPath = pathLocale && options.supportedLngs.includes(pathLocale);

  let response;
  if (isRoot) {
    const pathWithSearch = `/${locale}`;
    response = hasDefaultLocale
      ? NextResponse.rewrite(new URL(pathWithSearch, req.url))
      : NextResponse.redirect(new URL(pathWithSearch, req.url));
  } else if (hasLocaleInPath) {
    const basePath = req.nextUrl.pathname.replace(`/${pathLocale}`, '') || '/';
    // if (hasDefaultLocale) {
    //   response = NextResponse.rewrite(new URL(basePath, req.url));
    // }
    if (pathLocale === locale) {
      response = hasDefaultLocale ? NextResponse.redirect(new URL(basePath, req.url)) : NextResponse.next();
    } else {
      response = NextResponse.redirect(new URL(`/${locale}${basePath}`, req.url));
    }
  } else {
    response = hasDefaultLocale
      ? NextResponse.rewrite(new URL(`/${locale}${req.nextUrl.pathname}`, req.url))
      : NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}`, req.url));
  }

  // if (hasLocaleInPath) {
  //   // console.log('hasLocaleInPath', pathLocale, locale);
  //   const basePath = req.nextUrl.pathname.replace(`/${pathLocale}`, '') || '/';

  //   if (pathLocale === locale) {
  //     response = NextResponse.rewrite(new URL(`/${locale}${basePath}`, req.url));
  //   } else {
  //     response = NextResponse.redirect(new URL(`/${locale}${basePath}`, req.url));
  //   }
  // } else {
  //   response = NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}`, req.url));
  // }

  if (hasOutdatedCookie) {
    response.cookies.set(COOKIE_NAME, locale);
  }

  return response;
}
