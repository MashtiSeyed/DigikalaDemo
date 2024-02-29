import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import { useSwiper } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import images from "../data/SliderImage";
import { useState } from "react";
const BannerSlider = () => {
  const swiper = useSwiper();
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      pagination
      navigation={{
        prevEl: ".slider1",
        nextEl: ".slider2",
        hideOnClick: true,
      }}
      modules={[Scrollbar, Pagination, Navigation]}
      className="swiper_container"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          onMouseOut={() => setIsVisible(true)}
          onMouseOver={() => setIsVisible(false)}
        >
          <img src={image.img} alt={image.alt} className="relative" />
        </SwiperSlide>
      ))}
      <div
        className={`swiper-container inline-flex relative -top-16 left-4 z-50 gap-2.5 transition duration-100${
          isVisible && "invisible opacity-0"
        }`}
        onMouseOut={() => setIsVisible(true)}
        onMouseOver={() => setIsVisible(false)}
      >
        <button
          className="slider1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center mt-2 p-1.5"
          onClick={() => swiper.slidePrev()}
        >
          <ArrowBackIcon />
        </button>
        <button
          className="slider2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center mt-2 p-1.5"
          onClick={() => swiper.slideNext()}
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </Swiper>
  );
};

export default BannerSlider;
