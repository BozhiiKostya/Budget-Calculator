import { MainStyled } from './Main.styled';

const Main = ({ children }) => {
  return (
    <MainStyled>
      <div className="container">{children}</div>
    </MainStyled>
  );
};

export default Main;
