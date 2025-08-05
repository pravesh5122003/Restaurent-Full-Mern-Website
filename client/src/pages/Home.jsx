import BannerCarousel from "../components/BannerCarousel";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="mt-6">
      <BannerCarousel />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  );
};
export default Home;
