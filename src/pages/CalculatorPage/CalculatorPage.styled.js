import styled from 'styled-components';

export const CalculatorStyled = styled.div`
  display: flex;
  /* height: max-content; */

  padding-left: 150px;
  .sidebar {
    min-width: 150px;
    flex: 1;
    padding: 10px 15px;
    position: fixed;
    z-index: 0;
    top: 110px;
    left: 0;
    bottom: 100px;
    height: 100%;
    max-width: 30 0px;
    background-color: tan;
  }

  .calc-content {
    /* padding: 10px 15px; */
  }
`;
