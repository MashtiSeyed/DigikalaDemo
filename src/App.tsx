import Header from "./components/Header";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SliderComponent from "./components/SliderComponent";
import BannerSlider from "./components/BannerSlider";
import Offers from "./components/Offers";
import ProductSliderImages from "./components/ProductSliderImages";
import SuperMarketBanner from "./components/SuperMarketBanner";
import MiddleImagesComponent from "./components/MiddleImagesComponent";
const App = () => {
  return (
    <>
      <div className="header pt-4 container mx-auto">
        <Header />
      </div>
      <div className="navigation-bar container mx-auto">
        <NavigationBar />
      </div>
      <div className="slider-1 container mx-auto">
        <SliderComponent />
      </div>
      <div className="slider-image container" style={{ maxWidth: "100%" }}>
        <BannerSlider />
      </div>
      <div className="offers container mx-auto">
        <Offers />
      </div>
      <div className="product-slider container mx-auto">
        <ProductSliderImages />
      </div>
      <div className="super-market-banner container mx-auto">
        <SuperMarketBanner />
      </div>
      <div className="four-images-of-product container mx-auto">
        <MiddleImagesComponent/>
      </div>
    </>
  );
};

export default App;
