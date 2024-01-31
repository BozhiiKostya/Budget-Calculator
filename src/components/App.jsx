import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<div></div>} />
        </Routes>
      </main>
    </>
  );
};
