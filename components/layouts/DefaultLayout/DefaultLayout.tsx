import React, { type FC, type HTMLAttributes } from 'react';
import Navbar from '~/shared/Navbar/Navbar';
import styles from './DefaultLayout.module.scss';

interface DefaultLayoutProps extends HTMLAttributes<HTMLElement> {}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => (
  <div className={styles.DefaultLayout}>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </div>
);

export default DefaultLayout;
