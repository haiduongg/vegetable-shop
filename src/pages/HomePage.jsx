import HomeAboutOurShopSection from "components/HomeAboutOurShopSection";
import HomeBanner from "components/HomeBanner";
import OurVegetables from "components/HomeOurVegetables";
import WhyChooseUs from "components/WhyChooseUs";

function HomePage() {
  return <div className="pt-4 space-y-24">
    <HomeBanner/>
    <HomeAboutOurShopSection/>
    <OurVegetables/>
    <WhyChooseUs/>
  </div>;
}

export default HomePage;
