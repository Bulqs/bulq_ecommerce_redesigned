import React from 'react';
import BannerSmallCard from './BannerSmallCard';
import fabric from '../../public/images/fabric.png';

const RightBanner: React.FC = () => {

    const handleShopNowClick = () => {
        // Handle click action for the "Shop Now" button
        console.log("Shop Now clicked!");
    };


  return (
      <div className="w-4/12 h-[480px]  flex items-start justify-center flex-wrap gap-4 p-2">
          <BannerSmallCard imageSrc={fabric} buttonLabel="Learn More >" buttonClickHandler={() => alert('first div')} />
          <BannerSmallCard imageSrc={fabric} buttonLabel="Learn More >" buttonClickHandler={() => alert('second div')} />
          <BannerSmallCard imageSrc={fabric} buttonLabel="Learn More >" buttonClickHandler={() => alert('third div')} />
          <BannerSmallCard imageSrc={fabric} buttonLabel="Learn More >" buttonClickHandler={() => alert('fourth div')} />
    </div>
  );
}

export default RightBanner;
