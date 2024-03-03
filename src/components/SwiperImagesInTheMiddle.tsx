interface Props {
  image: string;
}

const SwiperImagesInTheMiddle = ({ image }: Props) => {
  return (
    <div className="p-4 bg-gray-200 rounded-full w-[8rem] h-[8rem] flex justify-center items-center">
      <img src={image} alt="" className="mix-blend-multiply w-[70px] h-[70px]"/>
    </div>
  );
};

export default SwiperImagesInTheMiddle;
