import Logo from "../assets/fresh.webp";
import Typeo from "../assets/fresh.svg";
import SuperMarketData from "./SuperMarketData";
const SuperMarketBanner = () => {
  return (
    <div
      className="py-5 rounded-2xl w-10/11 mx-auto"
      style={{
        backgroundImage: `url(https://www.digikala.com/statics/img/svg/typography/freshPattern.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(240,240,240)'
      }}
    >
      <div className="flex justify-around">
        <div className="flex items-center gap-4">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <img src={Typeo} alt="" />
          </div>
          <div className="bg-green-500 rounded-full">
            <p className="text-white px-[10px] py-[2px]">تخفیف تا %35</p>
          </div>
        </div>
        <div>
          <SuperMarketData/>
        </div>
      </div>
    </div>
  );
};

export default SuperMarketBanner;
