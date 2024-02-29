import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSwiper } from "swiper/react";
import "swiper/css";
import ProductImages from "../data/ProductSliderImgs";
import Card from "./Card";
const ProductSliderImages = () => {
  const swiper = useSwiper();
  return (
    <div className="w-5/6 m-auto mt-12 mb-12 pl-1 py-4 bg-red-600 pr-4 rounded-2xl relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: ".slider2",
          prevEl: ".slider1",
          hideOnClick: true,
        }}
        modules={[Navigation, Scrollbar, Pagination]}
        className="swiper_container"
      >
        {ProductImages.map((product) => (
          <SwiperSlide>
            <Card
              img={product.img}
              offer={product.offer}
              price={product.price}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-container flex justify-between ">
          <button
            className="slider1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center mt-2 p-1.5 absolute top-[48%] left-[22px] z-20"
            onClick={() => swiper.slideNext()}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <ArrowBackIcon />
          </button>
          <button
            className="slider2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full inline-flex items-center mt-2 p-1.5 absolute top-[50%] right-[-15px] z-20"
            onClick={() => swiper.slidePrev()}
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSliderImages;
