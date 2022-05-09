import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import MainNavBar from 'components/headers/mainNavBar';
import MainFooter from 'components/footers/main';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Any Analytics</title>
      </Head>
      <MainNavBar />
      <main className=''>{children}</main>
      <MainFooter />
    </>
  );
};

export default PageLayout;
