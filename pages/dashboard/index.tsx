import { NextPage } from 'next';
import PageLayout from 'layouts/PageLayout';
import { useSession, signIn } from 'next-auth/react';

interface DashBoardPageProps {}

const DashBoardPage: NextPage<DashBoardPageProps> = () => {
  const { data: session, status } = useSession();
  //   console.log({ session });
  return (
    <PageLayout>
      {status === 'authenticated' ? (
        <div>
          <p>Signed in as {session?.user?.email}</p>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn('google')}>Sign in</button>
        </div>
      )}
    </PageLayout>
  );
};

export default DashBoardPage;
