import { Link } from 'react-router-dom';
import { HomePageStyled } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageStyled>
      <section className="image-preview-section"></section>
      <section className="text-preview-section">
        <h1 className="home-main-title">Golden Goal</h1>
        <p className="home-main-text">
          Ваш путь к финансовой стабильности начинается здесь!
        </p>
        <div className="home-auth-wrapper">
          <Link className="home-auth-link">
            <button className="home-auth-btn">Регистрация</button>
          </Link>
          <Link className="home-auth-link">
            <button className="home-auth-btn">Авторизация</button>
          </Link>
        </div>
        <ul className="home-main-list">
          <li className="home-main-item">
            <p>Отслеживание доходов</p>
          </li>
          <li className="home-main-item">
            <p>Расчет ежемесячных расходов</p>
          </li>
          <li className="home-main-item">
            <p>Планирование сбережений</p>
          </li>
          <li className="home-main-item">
            <p>Просмотр истории расчетов</p>
          </li>
          <li className="home-main-item">
            <p>Анализ финансовых целей</p>
          </li>
        </ul>
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
