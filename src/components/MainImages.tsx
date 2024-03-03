import MainImage from "../data/MainImagesAt2";
const MainImages = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
      {MainImage.map((image) => (
        <a href="#" key={image.id}>
          <div className="w-[100%] h-[100%]">
            <img
              src={image.image}
              alt="Loading Failed"
              className="rounded-2xl"
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default MainImages;
