import NextAuth, { DefaultSession } from 'next-auth';
import { Role, User } from '@prisma/client';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      site: string;
      employeeId: string;
      name: string;
      email: string;
      department: string;
      image: string;
      designation: string;
      role: Role;
      mobile: string;
    } & DefaultSession['user'];
  }
}
