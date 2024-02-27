import Images from "./Images";
import images from "../data/SliderImage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
const BannerSlider = () => {
  <Swiper
    spaceBetween={500}
    slidesPerView={1}
    scrollbar={{ draggable: true }}
    pagination={{ el: ".swiper-pagination", clickable: true }}
    navigation={{
      nextEl: ".slider-arrow-1",
      prevEl: ".slider-arrow-2",
    }}
    modules={[Pagination, Navigation]}
    className="swiper_container"
  />;
  return (
    <div className="w-full relative">
      <Swiper>
        {images.map((image) => (
          <SwiperSlide key={image.img}>
            <Images images={image.img} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="slider-arrow-1 absolute z-20 top-1/2 bottom-1/2 pl-2">
            <ArrowBackIcon />
          </div>
          <div className="slider-arrow-2 absolute z-20 right-0 bottom-1/2 top-1/2 pr-2">
            <ArrowForwardIcon />
          </div>
          <div className="swiper-pagination">sdf</div>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
