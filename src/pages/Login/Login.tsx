import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Snackbar } from '@mui/material';

import logo from '../../assets/logo.svg';
import { login as submitLogin, isLogged } from '@/utils/JWTAuth';
import Loader from '@/components/Loader/Loader';
import { useForm } from 'react-hook-form';

const schema = z.object({
  login: z.string().min(1, 'Precisa informar um login'),
  password: z.string().min(1, 'Precisa informar uma password'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const [loginErrorMessage, setLoginErrorMessage] = useState<any>('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    setIsLoading(true);
    await submitLogin({ login, password }).then((resp) => {
      setLoginErrorMessage(resp);

      if (resp?.error) {
        setIsLoading(false);
      } else {
        window.location.href = '/login';
      }
    });
  };

  const onChangeField = () => {
    setLoginErrorMessage('');
  };

  return (
    <div>
      <img src={logo} alt='Guiagreste' />

      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-column'>
            <input
              {...register('login')}
              type='text'
              name='login'
              id='login'
              placeholder='Login'
              onChange={onChangeField}
              onFocus={onChangeField}
            />

            <input
              {...register('password')}
              type='password'
              name='password'
              id='password'
              placeholder='password'
              onChange={onChangeField}
              onFocus={onChangeField}
            />

            <button type='submit'>Login</button>
          </div>
        </form>
      )}
      <Snackbar
        open={!!loginErrorMessage?.error}
        autoHideDuration={6000}
        message={loginErrorMessage?.error}
      />
    </div>
  );
};

export default Login;
