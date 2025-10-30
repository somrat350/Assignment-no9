import BannerSlider from '../components/BannerSlider';
import PopularServices from '../components/PopularServices';
import WinterTips from '../components/WinterTips';
import ExpertVets from '../components/ExpertVets';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto p-5'>
      <BannerSlider/>
      <PopularServices/>
      <WinterTips/>
      <ExpertVets/>
    </div>
  );
};

export default Home;