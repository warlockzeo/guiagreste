/* eslint-disable eqeqeq */
import axios from 'axios';

const login = async (data: { login: string; password: string }) => {
  const LOGIN_ENDPOINT = `/login`;
  try {
    // const response = await axios({
    //   method: 'post',
    //   responseType: 'json',
    //   url: LOGIN_ENDPOINT,
    //   data: JSON.stringify(data),
    // });

    // if (response.status == 200) {

    sessionStorage.setItem('access_token', 'OK');

    // }
  } catch (e) {
    return {
      error: `Usuario ou senha inválidos ${data.login} - ${data.password}`,
    };
  }
};

const logout = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('expire_at');
};

const userAuth = sessionStorage.getItem('access_token');

const isLogged = userAuth === 'OK';

export { login, logout, isLogged, userAuth };
