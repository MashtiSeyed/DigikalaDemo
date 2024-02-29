import states from "../data/CustomersStories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "swiper/css";
import { useSwiper } from "swiper/react";
const SliderComponent = () => {
  const swiper = useSwiper();
  return (
    <div className="w-5/6 m-auto mt-12 mb-12 py-4">
      <Swiper
        spaceBetween={1}
        slidesPerView={12}
        scrollbar={{ draggable: true }}
        navigation={{
          prevEl: ".slider1",
          nextEl: ".slider2",
          hideOnClick: true,
        }}
        modules={[Navigation, Scrollbar, Pagination]}
        className="swiper_container"
      >
        {states.map((state, index) => (
          <SwiperSlide key={index}>
            <div>
              <div
                style={{
                  backgroundImage: `url(${state.img})`,
                  objectFit: "contain",
                }}
                className="w-[84px] h-[84px] bg-cover bg-center rounded-full"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-container flex justify-between ">
          <button
            className="slider1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center mt-2 p-1.5"
            onClick={() => swiper.slideNext()}
          >
            <ArrowBackIcon />
          </button>
          <button
            className="slider2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center mt-2 p-1.5"
            onClick={() => swiper.slidePrev()}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default SliderComponent;
