import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DashboardLayout from 'layouts/dashboard';
import { signIn, getSession, useSession } from 'next-auth/react';

function DashBoardPage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: session, status } = useSession();
  return (
    <DashboardLayout>
      {status === 'authenticated' ? (
        <div>
          <h2 className='text-2xl font-semibold'>
            welcome {session.user?.name}
          </h2>
          <p>Signed in as {session?.user?.email}</p>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn('google')}>Sign in</button>
        </div>
      )}
    </DashboardLayout>
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
