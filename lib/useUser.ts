import useSWR from 'swr';
import fetcher from './fetcher';
import type { User } from 'lib/types';
import { useSession } from 'next-auth/react';

interface UseUser {
  success: Boolean;
  user?: User;
}

export default function useUser() {
  const { data: session, status } = useSession();
  const { data, mutate, error } = useSWR<UseUser>(`/api/users/me`, fetcher);

  const isloading = (!data && !error) || status === 'loading';

  return {
    isloading,
    session,
    user: data?.user,
    mutate,
  };
}
