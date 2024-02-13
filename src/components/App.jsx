import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import Layout from './Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AboutPage from '../pages/AboutPage/AboutPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
