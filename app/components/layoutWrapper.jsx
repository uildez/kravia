'use client'

import { usePathname } from 'next/navigation';
import { Menu } from '../containers/menu';
import { Footer } from '../containers/footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname.includes('studio');

  return (
    <>
      {!hideLayout && <Menu />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}