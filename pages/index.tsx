import type { NextPage } from 'next';
import WhyUs from '../components/features/whyUs';
import MainHero from '../components/heros/main';
import OurClientCTA from '../components/ctas/ourClient';
import PageLayout from '../layouts/PageLayout';
import MainNavBar from '../components/headers/mainNavBar';
import NewProduct from '../components/banners/newProduct';
import AboutUsSection from 'components/sections/aboutUs';
import CTASection from 'components/sections/CTA';
import MainFooter from 'components/footers/main';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <NewProduct />
      <MainNavBar />
      <MainHero />
      <AboutUsSection />
      <WhyUs />
      <OurClientCTA />
      <CTASection />
      <MainFooter />
    </PageLayout>
  );
};

export default Home;
