import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorizationPage from "../../pages/authorization-page/ui/AuthorizationPage";
import NotFoundPage from "../../pages/not-found-page/ui/NotFoundPage";
import UsersPage from "../../pages/users-page/ui/UsersPage";
import { AuthorizationStatus } from "./AuthorizationStatus";
import { RequireAuth } from "./RequireAuth";

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" replace />} />

        <Route
          path="/login"
          element={
            <AuthorizationStatus>
              <AuthorizationPage />
            </AuthorizationStatus>
          }
        />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UsersPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
