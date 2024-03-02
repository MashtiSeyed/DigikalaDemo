
interface Props {
    image: string;
    caption: string;
    alt: string;
}

const CategorizedProductsImages = ({image, caption, alt}:Props) => {
  return (
    <a href="#">
      <div className="mt-16 flex flex-col justify-between items-center w-[100px] w-10/11 mx-auto">
          <div>
              <img src={image} alt={alt} />
          </div>
          <div className=" text-center">
              <span className="font-mono">{caption}</span>
          </div>
      </div>
    </a>
  )
}

export default CategorizedProductsImages
