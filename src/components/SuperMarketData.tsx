import SuperMarketDataCard from "./SuperMarketDataCard"
import data from "../data/SuperMarketBannerData"
const SuperMarketData = () => {
  return (
    <div className="flex">
        {data.map(item => <SuperMarketDataCard img={item.img} offer={item.offer}/>)}
    </div>
  )
}

export default SuperMarketData
