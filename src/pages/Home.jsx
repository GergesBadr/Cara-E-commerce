import Banners from "../features/home/Banners";
import DiscountBanner from "../features/home/DiscountBanner";
import FeaturesList from "../features/home/FeaturesList";
import LandingSection from "../features/home/LandingSection";
import FeaturedProducts from "../features/shop/FeaturedProducts";
import AnimatedPage from "./AnimatedPage";

function Home() {
  return (
    <AnimatedPage>
      <LandingSection />
      <FeaturesList />
      <FeaturedProducts />
      <DiscountBanner />
      <Banners />
    </AnimatedPage>
  );
}

export default Home;
