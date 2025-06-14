import React from 'react'
import { Button } from "@/components/ui/button";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
  <div className="flex flex-col items-center justify-center h-screen px-2">
    <LocaleSwitcher/>
    <Button className="bg-yellow-500 text-black hover:bg-yellow-300 cursor-pointer">
      {`${t('Welcome')},${' '} ${t('This is a multilingual app')}`}
    </Button>
    <Link href="/about">{`${t('Go to the about page')}`}</Link>
  </div>
  );
}
