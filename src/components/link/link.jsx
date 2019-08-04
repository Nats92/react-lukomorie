import React from 'react';
import styles from './link.scss';

/**
 * Ссылка.
 * @param {string} url Url.
 * @param {*} children Содержимое.
 * @param {boolean} openBlank Открыть ссылку в новой вкладке.
 * @return {ReactElement} Ссылка.
 */
const Link = ({ url, children, openBlank }) => (
  <a
    href={url}
    className={styles.base}
    {...openBlank && {
      target: '_blank',
      rel: 'noreferrer noopener',
    }}>
    {children}
  </a>
);
export default Link;
