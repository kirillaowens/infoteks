import { PropsWithChildren } from "react";
import { isAuth } from "../../shared/lib/isAuth";
import { Navigate } from "react-router-dom";

export const AuthorizationStatus = ({ children }: PropsWithChildren) => {
  if (isAuth()) {
    return <Navigate to="/users" replace />;
  }

  return <>{children}</>;
};
