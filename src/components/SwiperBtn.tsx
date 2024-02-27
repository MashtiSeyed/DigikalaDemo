import { useSwiper } from "swiper/react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const SwiperBtn = () => {
    const swiper = useSwiper();
  return (
    <div>
      <button onClick={()=> swiper.slideNext()><ArrowBackIcon/></button>
      <button onClick={()=> swiper.slidePrev()><ArrowForwardIcon/></button>
    </div>
  )
}

export default SwiperBtn
