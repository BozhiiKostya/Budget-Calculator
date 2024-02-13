import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: #e2ebf0;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 0.5px solid #d7d7d7;
  box-shadow: 0px 1px 5px 2px rgba(51, 51, 51, 0.2);
  border-radius: 0px 0px 10px 10px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 2px;
    font-size: 30px;
    font-weight: 800;
    color: #ffd700;
    margin-right: 20px;
    border: 4px double #ffd700;
    background-color: white;
    border-radius: 50%;
    transition: transform 400ms linear;

    &:hover {
      transform: rotateY(360deg);
    }
  }

  .header-container {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .header-container a {
    color: #333;
  }
`;
