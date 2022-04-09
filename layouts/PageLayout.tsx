import { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Any Analytics</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
