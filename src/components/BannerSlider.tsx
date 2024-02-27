import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import { useSwiper } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import images from "../data/SliderImage";

const BannerSlider = () => {
  const swiper = useSwiper();

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
        <SwiperSlide key={index}>
          <img src={image.img} alt={image.alt} />
        </SwiperSlide>
      ))}
      <div className="swiper-container flex justify-between ">
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
