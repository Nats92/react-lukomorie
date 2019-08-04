import React from 'react';
import Logo from './logo/logo';
import Link from './link/link';
import styles from './app.scss';

const App = () => (
  <div>
    <Logo onMainPage />
    <Logo isLight onMainPage />
    <Link url="#" openBlank>Меню</Link>
    <Link url="#">Меню</Link>
  </div>
);
export default App;
