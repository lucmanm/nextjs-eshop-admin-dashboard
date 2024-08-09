export type Locale = (typeof locales)[number];
export const locales = ['en-us', 'ar-sa'] as const;
export const defaultLocale: Locale = 'en-us';