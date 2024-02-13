import { NavLink } from 'react-router-dom';
import { AuthLinksStyled } from './AuthLinks.styled';

const AuthLinks = () => {
  return (
    <AuthLinksStyled>
      <NavLink to="register">Регистрация</NavLink>
      <NavLink to="login">Авторизация</NavLink>
    </AuthLinksStyled>
  );
};

export default AuthLinks;
