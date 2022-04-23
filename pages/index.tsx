import type { NextPage } from 'next';
import WhyUs from '../components/features/whyUs';
import MainHero from '../components/heros/main';
import OurClientCTA from '../components/ctas/ourClient';
import PageLayout from '../layouts/PageLayout';
import MainNavBar from '../components/headers/mainNavBar';
import SideBar from '../components/headers/sidebar';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <SideBar />
      <MainNavBar />
      <MainHero />
      <WhyUs />
      <OurClientCTA />
    </PageLayout>
  );
};

export default Home;
