import SuperMarketDataCard from "./SuperMarketDataCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import data from "../data/SuperMarketBannerData";
const SuperMarketData = () => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-3.5">
          {data.map((item) => (
            <a href="#">
              <SuperMarketDataCard img={item.img} offer={item.offer} />
            </a>
          ))}
        </div>
        <a href="#">
          <div className="inline-block bg-white py-3.5 px-4 rounded-full">
            <span className="text-green-500">بیش از صد کالا</span>
            <ArrowForwardIcon className="text-green-500" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SuperMarketData;
