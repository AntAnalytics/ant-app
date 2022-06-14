import type { NextPage } from 'next';
import WhyUs from '../../components/features/whyUs';
import MainHero from '../../components/heros/main';
import OurClientCTA from '../../components/ctas/ourClient';
import PageLayout from '../../layouts/PageLayout';
import NewProduct from '../../components/banners/newProduct';
import AboutUsSection from 'components/sections/aboutUs';
import CTASection from 'components/sections/CTA';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <NewProduct />
      <MainHero />
      <AboutUsSection />
      <WhyUs />
      <OurClientCTA />
      <CTASection />
    </PageLayout>
  );
};

export default Home;
