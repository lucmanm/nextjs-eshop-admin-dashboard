import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from './services/local';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../translation/${locale}.json`)).default
  };
});