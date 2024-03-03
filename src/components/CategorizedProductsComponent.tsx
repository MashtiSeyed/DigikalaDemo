import Products from "../data/CategorizedProducts";
import CategorizedProductsImages from "./CategorizedProductsImages";
const CategorizedProductsComponent = () => {
  return (

    <>
      <h1 className="text-3xl text-center mt-8">Buy based on categorize</h1>
      <div className="grid grid-cols-7">
        {Products.map((product) => (
          <CategorizedProductsImages
            image={product.img}
            alt="Loading failed"
            caption={product.caption}
          />
        ))}
      </div>
    </>
  );
};

export default CategorizedProductsComponent;
