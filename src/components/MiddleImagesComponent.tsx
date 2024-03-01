import ProductImages from '../data/MiddleImages'
import MiddleImagesCard from './MiddleImagesCard'
const MiddleImagesComponent = () => {
  return (
    <div className='flex w-5/6 mx-auto mt-4'>
      {ProductImages.map(productimage=> <MiddleImagesCard img={productimage.img}/>)}
    </div>
  )
}

export default MiddleImagesComponent
