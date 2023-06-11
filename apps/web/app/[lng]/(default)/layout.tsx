import type { PropsWithChildren } from 'react';
import { BottomNav } from '../../components/BottomNav';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { ScrollToTopButton } from '../../components/ScrollToTopButton';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Navbar />
      <main>{children}</main>
      <BottomNav />
      <ScrollToTopButton />
      {/* @ts-expect-error Server Component */}
      <Footer className="mb-[58px] md:mb-0" lng={'en'} />
    </>
  );
}
