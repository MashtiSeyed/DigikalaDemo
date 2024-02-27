import Avatar from "./Avatar";
import states from "../data/CustomersStories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

const SliderComponent = () => {
  <Swiper
    spaceBetween={1}
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    onSlideChange={() => console.log("slide changed")}
    onSwiper={(swiper) => console.log(swiper)}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  />;
  return (
    <div className="w-5/6 m-auto mt-12 mb-12 py-4">
      <Swiper>
        {states.map((state) => (
          <SwiperSlide>
            <Avatar image={state.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
