import Logo from '../assets/fresh.webp'
import Typeo from '../assets/fresh.svg'
const SuperMarketBanner = () => {
  return (
    <div className='flex justify-between items-center w-5/6 mx-auto bg-gray-300 py-4 rounded-2xl'
      style={{backgroundImage: `url(https://www.digikala.com/statics/img/svg/typography/freshPattern.svg)`}}
    >
      <div className='flex justify-evenly items-center gap-4'>
        <img src={Logo} alt="" />
        <img src={Typeo} alt="" />
        <div className='flex justify-center items-center bg-green-500 rounded-3xl'>
            <p className='text-white px-[10px] py-[2px]'>Offer to 35%</p>
        </div>
      </div>
    </div>
  )
}

export default SuperMarketBanner;
