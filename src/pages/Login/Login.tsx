import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Snackbar } from '@mui/material';

import logo from '../../assets/logo.svg';
import { login as submitLogin } from '@/utils/JWTAuth';
import Loader from '@/components/Loader/Loader';

const schema = z.object({
  login: z.string().min(5, 'Precisa informar um login'),
  password: z.string().min(8, 'Precisa informar um password'),
});

type LoginArguments = {
  login: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async ({ login, password }: LoginArguments) => {
    setIsLoading(true);
    await submitLogin({ login, password }).then((resp) => {
      if (resp?.error) {
        setIsLoading(false);
      } else {
        navigate('/');
      }
    });
  };

  const onChangeField = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>
  ) => {
    const { name } = e.currentTarget;
    console.log(name);
    if (name === 'login' || name === 'password') {
      setError(name, { message: '' });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-column '>
            <input
              {...register('login')}
              type='text'
              name='login'
              placeholder='Login'
              onChange={onChangeField}
              onClick={onChangeField}
            />
            {errors.login && <span>{errors.login.message}</span>}

            <input
              {...register('password')}
              type='password'
              name='password'
              placeholder='password'
              onChange={onChangeField}
              onClick={onChangeField}
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button type='submit'>Login</button>
          </div>
        </form>
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={
          Boolean(errors.login?.message) || Boolean(errors.password?.message)
        }
        autoHideDuration={6000}
        message={errors.login?.message || errors.password?.message}
      />
    </>
  );
};

export default Login;
