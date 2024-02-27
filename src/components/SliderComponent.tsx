import Avatar from "./Avatar";
import states from "../data/CustomersStories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComponent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 12,
    slidesToScroll: 1,
  };
  return (
    <div className="w-5/6 m-auto mt-20 py-4">
      <div>
        <Slider {...settings}>
          {states.map((state) => (
            <Avatar image={state.img} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
