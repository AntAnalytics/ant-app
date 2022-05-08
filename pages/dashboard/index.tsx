import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PageLayout from 'layouts/PageLayout';
import { signIn, getSession, useSession } from 'next-auth/react';

function DashBoardPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  console.log({ session });
  return (
    <PageLayout>
      {session ? (
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
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      // session,
    },
  };
};

export default DashBoardPage;
