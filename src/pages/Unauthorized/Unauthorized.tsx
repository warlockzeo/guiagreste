import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <h1>Desculpe, você não tem autorização para acessar esta página!</h1>
      <h2>
        Se quiser fazer login, clique{' '}
        <Link to='/login' className='text-blue-500'>
          aqui
        </Link>
      </h2>
    </div>
  );
}

export default Unauthorized;
