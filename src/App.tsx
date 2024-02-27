import Header from "./components/Header";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SliderComponent from "./components/SliderComponent";
import BannerSlider from "./components/BannerSlider";
const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="header pt-4">
          <Header />
        </div>
        <div className="navigation-bar">
          <NavigationBar />
        </div>
        <div className="slider-1">
          <SliderComponent />
        </div>
      </div>
      <div className="slider-image">
        <BannerSlider />
      </div>
    </>
  );
};

export default App;
