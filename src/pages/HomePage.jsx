import HomeAboutOurShopSection from "components/HomeAboutOurShopSection";
import HomeBanner from "components/HomeBanner";
import OurVegetables from "components/HomeOurVegetables";

function HomePage() {
  return <div className="pt-24 space-y-24">
    <HomeBanner/>
    <HomeAboutOurShopSection/>
    <OurVegetables/>
  </div>;
}

export default HomePage;
