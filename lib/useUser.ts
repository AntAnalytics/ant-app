import fetcher from './fetcher';
import type { User } from 'lib/types';
import { useSession } from 'next-auth/react';

interface UseUser {
  success: Boolean;
  user?: User;
}

export default function useUser() {
  const { data: session, status } = useSession();

  const isloading = status === 'loading';

  return {
    isloading,
    session,
  };
}
