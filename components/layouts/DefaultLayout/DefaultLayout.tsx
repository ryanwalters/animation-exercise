import React, { type FC, type HTMLAttributes } from 'react';
import Navbar from '~/shared/Navbar/Navbar';
import styles from './DefaultLayout.module.scss';

interface DefaultLayoutProps extends HTMLAttributes<HTMLElement> {}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => (
  <div className={styles.DefaultLayout}>
    <Navbar />
    <div className="container mx-auto text-center p-5">{children}</div>
  </div>
);

export default DefaultLayout;
