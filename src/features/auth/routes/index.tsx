import { Navigate, Route, Routes, redirect } from 'react-router-dom';

import { Login } from './Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>auth main page</div>} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="."/>} />
    </Routes>
  );
};
