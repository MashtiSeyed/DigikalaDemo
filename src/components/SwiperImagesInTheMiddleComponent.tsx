import SwiperItemsInTheMiddle from "../data/MainSwiper";
import SwiperImagesInTheMiddle from "./SwiperImagesInTheMiddle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
const SwiperImagesInTheMiddleComponent = () => {
  return (
    <>
    <h1 className="text-2xl text-center mt-4">Digikala suggestion</h1>
      <div className="w-11/12 mx-auto mt-8">
        <Swiper
          spaceBetween={80}
          slidesPerView={7}
          scrollbar={{ draggable: true }}
          navigation
          modules={[Navigation, Scrollbar, Pagination]}
          className="swiper-horizontal"
        >
          {SwiperItemsInTheMiddle.map((swiperimage) => (
            <SwiperSlide>
              <SwiperImagesInTheMiddle
                image={swiperimage.img}
                key={swiperimage.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperImagesInTheMiddleComponent;
