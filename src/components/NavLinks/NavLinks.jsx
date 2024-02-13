import { NavLink } from 'react-router-dom';
import { NavLinksStyled } from './NavLinks.styled';

const NavLinks = () => {
  return (
    <NavLinksStyled>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="calculator">Калькулятор</NavLink>
      <NavLink to="about">О нас</NavLink>
    </NavLinksStyled>
  );
};

export default NavLinks;
