import Header from "./components/Header";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SliderComponent from "./components/SliderComponent";
const App = () => {
  return (
    <div className="container mx-auto">
      <div className="header">
        <Header />
      </div>
      <div className="navigation-bar">
        <NavigationBar/>
      </div>
        <SliderComponent/>
    </div>
  );
};

export default App;
