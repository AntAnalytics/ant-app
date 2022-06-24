import { signIn, signOut } from 'next-auth/react';

export async function login(email: string, password: string) {
  return await signIn('credentials', {
    email,
    password,
    redirect: false,
  });
}

export async function logout() {
  signOut({ redirect: false });
}

const authService = {
  login,
  logout,
};

export default authService;
