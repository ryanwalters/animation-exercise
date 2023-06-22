import React, { type FC, useState } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import BoxGroup from '~/shared/BoxGroup/BoxGroup';
import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const [variant, setVariant] = useState('default');

  return (
    <DefaultLayout className={styles.HomePage} data-testid="HomePage">
      <div>
        <button
          className="mr-3 bg-slate-500 hover:bg-slate-600 active:bg-slate-700 mb-4 p-3 rounded-lg"
          onClick={() => setVariant('slideDown')}
        >
          Animate!
        </button>
        <button onClick={() => setVariant('default')}>Reset</button>
      </div>
      <BoxGroup variant={variant} />
    </DefaultLayout>
  );
};

export default HomePage;
