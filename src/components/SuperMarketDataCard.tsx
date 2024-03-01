interface Props {
  img: string;
  offer: number;
}

const SuperMarketDataCard = ({ img, offer }: Props) => {
  return (
    <div className="h-[76px] w-[76px] rounded-full bg-gray-200 relative" style={{backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>
      <span className="text-white bg-red-500 px-1 rounded-full absolute bottom-0 right-0">{offer}%</span>
    </div>
  );
};

export default SuperMarketDataCard;
