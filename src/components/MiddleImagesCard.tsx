interface Props {
  img: string;
}

const MiddleImagesCard = ({ img }: Props) => {
  return (
    <div className="">
      <img src={img} className="w-100 h-auto rounded-2xl" />
    </div>
  );
};

export default MiddleImagesCard;
