import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queueAnimation, selectQueue } from '~/redux/queueSlice';
import AnimatedLine from '~/shared/AnimatedLine/AnimatedLine';
import BoxGroup from '~/shared/BoxGroup/BoxGroup';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const queue = useSelector(selectQueue);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(queue);
  }, [queue]);

  return (
    <div className="text-center p-5">
      <div>
        <button
          className="mr-3 bg-slate-500 hover:bg-slate-600 active:bg-slate-700 mb-4 p-3 rounded-lg"
          onClick={() => dispatch(queueAnimation(['tilesIn', /*['lineAcross', 'lineFadeOut'],*/ 'tilesCombine']))}
        >
          Animate!
        </button>
      </div>
      <BoxGroup />
      <AnimatedLine />
    </div>
  );
};

export default HomePage;
