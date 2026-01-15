import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthorizationPage from '../../pages/authorization-page/ui/AuthorizationPage';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthorizationPage />} />
      </Routes>
    </BrowserRouter>
  );
};