interface Props {
  img: string;
}

const MiddleImagesCard = ({ img }: Props) => {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return <div className="w-[400px] h-[290px] rounded-2xl" style={styles}></div>;
};

export default MiddleImagesCard;
