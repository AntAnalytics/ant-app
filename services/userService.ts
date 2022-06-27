import { User } from '@prisma/client';
import http from './httpService';

export function getUsers() {
  return http.get('/users');
}

export function addUser(user: User) {
  return http.post('/users', user);
}

export function getUserById(id: string) {
  return http.get(`/users/${id}`);
}

export function editUserById(id: string, user: User) {
  return http.put(`/users/${id}`, user);
}
