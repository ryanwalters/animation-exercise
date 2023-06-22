import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={classNames(styles.Navbar, 'bg-blue-dark p-25')} data-testid="Navbar" />
);

export default Navbar;
