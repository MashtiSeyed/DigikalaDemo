interface Props {
    images: string
}
const Images = ({images}:Props) => {
  return (
    <div>
      <img src={images}/>
    </div>
  )
}

export default Images
