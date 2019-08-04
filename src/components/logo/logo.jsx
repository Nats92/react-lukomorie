import React from 'react';
import logo from '../../image/luko-logo.png';
import logoLight from '../../image/luko-logo-light.png';
import styles from './logo.scss';

/**
 * Логотип.
 * @param {boolean} onMainPage Находимся ли на главной странице.
 * @param {boolean} isLight Отображать светлый логотип.
 * @return {ReactElement} Логотип.
 */
const Logo = ({ onMainPage, isLight }) => (
  <a href={onMainPage ? null : 'index.html'} className={styles.link}>
    <img src={isLight ? logoLight : logo} alt='Логотип кафе Лукоморье' />
  </a>
);

export default Logo;
