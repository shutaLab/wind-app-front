import React, { FC, ReactNode } from "react";
import { TailSpin } from "react-loader-spinner";
import { Navigate } from "react-router-dom";
import { useGetUser } from "../queries/AuthQuery";
type divProps = {
  children?: ReactNode;
};
export const div: FC<divProps> = ({ children }) => {
  // const { data: user, isLoading, isError } = useGetUser();

  // if (isLoading) {
  //   return <TailSpin height="80" width="80" color="#00aab9" />;
  // }

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
};

export default div;
