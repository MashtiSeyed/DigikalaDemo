
interface Props {
    img: string;
    offer: number;
}

const SuperMarketDataCard = ({img, offer}:Props) => {
  return (
    <div className="rounded-full relative overflow-hidden ">
        <img src={img} alt="" />
    </div>
  )
}

export default SuperMarketDataCard
