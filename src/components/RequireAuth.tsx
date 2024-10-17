import React, { FC, ReactNode } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useUser } from '../queries/AuthQuery';
import { Navigate } from 'react-router-dom';
import { useGetUser } from '../queries/UserQuery';
type RequireAuthProps = {
  children?: ReactNode;
};
export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { data: user, isLoading, isError } = useGetUser();
  console.log(isLoading)
  console.log(user)

  if (isLoading) {
    return <TailSpin height="80" width="80" color="#00aab9" />;
  }

  if (!user ) {
    return <Navigate to="/login" />;
  }
  
  return (
    <>{children}</>
  )
}

export default RequireAuth