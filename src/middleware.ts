import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en-us', 'ar-sa'],

  // Used when no locale matches
  defaultLocale: 'en-us'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar-sa|en-us)/:path*']
};