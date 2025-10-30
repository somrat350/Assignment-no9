import BannerSlider from "../components/BannerSlider";
import ExpertVets from "../components/ExpertVets";
import HappyPetStories from "../components/HappyPetStories";
import PopularServices from "../components/PopularServices";
import WinterTips from "../components/WinterTips";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <title>Home | Pet Care</title>

      <BannerSlider />
      <PopularServices />
      <WinterTips />
      <ExpertVets />
      <HappyPetStories />
    </div>
  );
};

export default Home;
