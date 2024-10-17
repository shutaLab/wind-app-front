import React, { FC, ReactNode } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useUser } from '../queries/AuthQuery';
import { Navigate } from 'react-router-dom';
type RequireAuthProps = {
  children?: ReactNode;
};
export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { data: user, isLoading, isError } = useUser();
  console.log(user)

  // if (isLoading) {
  //   return <TailSpin height="80" width="80" color="#00aab9" />;
  // }

  if (!user ) {
    return <Navigate to="/login" />;
  }
  
  return (
    <>{children}</>
  )
}

export default RequireAuth