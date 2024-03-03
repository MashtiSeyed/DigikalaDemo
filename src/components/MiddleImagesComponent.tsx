import ProductImages from '../data/MiddleImages'
import MiddleImagesCard from './MiddleImagesCard'
const MiddleImagesComponent = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 w-10/11 mx-auto mt-4 gap-4'>
      {ProductImages.map(productimage=> <MiddleImagesCard img={productimage.img}/>)}
    </div>
  )
}

export default MiddleImagesComponent
