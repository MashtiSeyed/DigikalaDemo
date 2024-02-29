interface Props {
  img: string;
  price: number;
  offer: number;
}
const Card = ({ img, price, offer }: Props) => {
  return (
    <div className="flex justify-between flex-col w-[182px] h-[260px] bg-white p-4">
      <a href="#">
        <div className="image">
          <img src={img} className="w-[150px] h-[150px]" />
        </div>
        <div className="flex justify-between">
          <span>${price}</span>
          <span className="px-2 bg-red-600 rounded-full text-gray-100">
            {offer}%
          </span>
        </div>
      </a>
    </div>
  );
};

export default Card;
