


import {
  loginWithEmailAndPassword,
  getUser,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
} from '@/features/auth';
import storage from '@/utils/storage';
import { axios } from '@/lib/axios';
import { configureAuth } from 'node_modules/react-query-auth/dist';

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}


export const { useUser, useLogin, useRegister, useLogout, AuthLoader } = configureAuth({
  userFn: () => loadUser,
  loginFn: (data) => axios.post('/auth/login', data),
  registerFn: (data) => axios.post('/auth/register', data),
  logoutFn,
});