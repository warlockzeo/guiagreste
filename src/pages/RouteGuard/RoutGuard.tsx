import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ element }: { element: ReactNode }) => {
  return (
    <>
      {!!sessionStorage.getItem('access_token') ? (
        element ?? <Navigate to={{ pathname: '/' }} />
      ) : (
        <Navigate to={{ pathname: '/403' }} />
      )}
    </>
  );
};

export default RouteGuard;
