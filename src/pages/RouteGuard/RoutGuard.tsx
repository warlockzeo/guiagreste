import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ element }: { element: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    setIsLogged((prev) => !prev);
  }, [isLogged]);

  return <>{isLogged ? element : <Navigate to={{ pathname: '/403' }} />}</>;
};

export default RouteGuard;
