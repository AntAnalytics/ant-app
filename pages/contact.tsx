import type { NextPage } from 'next';
import PageLayout from '../layouts/PageLayout';
import Contact from 'components/sections/contact';

const ContactPage: NextPage = () => {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
