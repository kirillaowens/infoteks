import { PropsWithChildren } from "react";
import { isAuth } from "../../shared/lib/isAuth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: PropsWithChildren) => {
  if (!isAuth()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
