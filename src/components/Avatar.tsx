interface Props {
  image: string;
}

const Avatar = ({ image }: Props) => {
  return (
    <img
      className="rounded-full w-[82px] h-[82px] object-contain"
      src={image}
      alt=""
    />
  );
};

export default Avatar;
