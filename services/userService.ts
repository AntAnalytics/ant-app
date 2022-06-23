import { User } from '@prisma/client';
import http from './httpService';

export function getUsers() {
  return http.get('/users');
}

export function addUser(user: User) {
  return http.post('/users', user);
}
