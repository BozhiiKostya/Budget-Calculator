import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="calculator">Калькулятор</NavLink>
          </li>
          <li>
            <NavLink to="about">О нас</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="register">Регистрация</NavLink>
          </li>
          <li>
            <NavLink to="login">Авторизация</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
