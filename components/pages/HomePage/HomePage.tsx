import React, { type FC } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <DefaultLayout className={styles.HomePage} data-testid="HomePage">
  </DefaultLayout>
);

export default HomePage;
