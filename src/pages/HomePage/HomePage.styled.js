import styled from 'styled-components';
import backImage from '../../image/preview__1_removebg.png';

export const HomePageStyled = styled.div`
  max-width: 1200px;
  min-height: 500px;
  display: flex;

  .image-preview-section {
    min-width: 600px;
    min-height: 100%;

    background-image: url(${backImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 950px;
  }
  .text-preview-section {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    margin-left: auto;
  }

  .home-main-title {
    font-size: 50px;
    font-weight: 700;
    color: #ffd700;
    margin-bottom: 15px;
  }

  .home-main-text {
    font-size: 26px;
    margin-bottom: 20px;
  }

  .home-auth-wrapper {
    display: flex;
    margin-bottom: 20px;
  }

  .home-auth-link {
    color: inherit;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .home-auth-btn {
    width: 150px;
    padding: 8px 12px;
    background-color: #e2ebf0;
    border-radius: 10px;
    font-size: 18px;
    transition: transform 150ms cubic-bezier(0.24, 0.63, 0.83, 0.67);

    &:hover {
      cursor: pointer;
      box-shadow: 0px 1px 5px 2px rgba(51, 51, 51, 0.2);
      transform: scale(1.1);
    }
  }

  .home-main-list {
    max-width: 250px;
    list-style-type: disc;
    /* margin: 0 auto; */

    text-align: left;
  }

  .home-main-item {
    font-size: 18px;
    margin-left: 20px;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
