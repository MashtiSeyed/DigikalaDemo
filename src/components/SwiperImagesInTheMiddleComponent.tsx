import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import SwiperItemsInTheMiddle from "../data/MainSwiper";
const SwiperImagesInTheMiddleComponent = () => {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-2xl text-center">پیشنهاد دیجی کالا</h1>
      </div>
      <div className="w-11/12 mx-auto mt-8 border rounded-2xl border-gray-300 overflow-hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={7}
          grid={{
            rows: 1,
          }}
          scrollbar={{ draggable: true }}
          navigation
          modules={[Navigation, Grid, Scrollbar, Pagination]}
          className="swiper-horizontal"
        >
          {SwiperItemsInTheMiddle.map((swiperimage) => (
            <SwiperSlide key={swiperimage.id}>
              <div className="bg-gray-100 border-l border-r border-gray-200 p-4 h-[50vh]">
                <div className="flex flex-col items-center bg-gray-200 rounded-full p-10">
                  <img
                    src={swiperimage.img}
                    className="mix-blend-multiply rounded-2xl"
                  />
                </div>
                <div className="text-center mt-4">
                  <span>{swiperimage.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperImagesInTheMiddleComponent;
