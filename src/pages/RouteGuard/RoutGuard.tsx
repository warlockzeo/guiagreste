import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from '@/utils/JWTAuth';

const RouteGuard = ({ element }: { element: ReactNode }) => {
  return (
    <>
      {isLogged ? (
        element ?? <Navigate to={{ pathname: '/' }} />
      ) : (
        <Navigate to={{ pathname: '/403' }} />
      )}
    </>
  );
};

export default RouteGuard;
