'use client';

import {Link} from '@/i18n/navigation';
import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl'

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <Link href={pathname} locale={locale === 'en' ? 'bn' : 'en'}>
      Switch to {locale === 'en' ? 'Bangla' : 'English'}
    </Link>
  );
}
