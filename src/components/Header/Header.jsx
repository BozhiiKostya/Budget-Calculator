import AuthLinks from 'components/AuthLinks/AuthLinks';
// import NavLinks from 'components/NavLinks/NavLinks';
import { HeaderStyled } from './Header.styled';
import { NavLink } from 'react-router-dom';
// import { useEffect, useState } from 'react';

const Header = () => {
  // const [headerHeight, setHeaderHeight] = useState('');

  // useEffect(() => {
  //   const changeHeaderHeight = document
  //     .querySelector('header')
  //     .getBoundingClientRect().height;

  //   setHeaderHeight(changeHeaderHeight);
  // }, []);

  return (
    <HeaderStyled className="header" /*headerHeight={headerHeight}*/>
      <div className="container header-container">
        <NavLink to="/">
          <div className="logo">GG</div>
        </NavLink>

        {/* <NavLinks className="header-links" /> */}
        <AuthLinks className="header-links" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
