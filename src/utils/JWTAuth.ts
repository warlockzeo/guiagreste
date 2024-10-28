/* eslint-disable eqeqeq */
import axios from 'axios';

const login = async (data: any) => {
  const LOGIN_ENDPOINT = `/login`;
  try {
    const response = await axios({
      method: 'post',
      responseType: 'json',
      url: LOGIN_ENDPOINT,
      data: JSON.stringify(data),
    });

    if (response.status == 200) {
      sessionStorage.setItem('access_token', 'OK');
    }
  } catch (e) {
    return { error: 'Usuario ou senha inválidos' };
  }
};

const logout = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('expire_at');

  window.location.href = '/login';
};

const userAuth = sessionStorage.getItem('access_token');

const isAuthenticated = () => !!userAuth;

const isLogged = !!sessionStorage.getItem('access_token');

export { login, logout, isAuthenticated, isLogged, userAuth };
