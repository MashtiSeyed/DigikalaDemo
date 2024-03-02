import Products from "../data/CategorizedProducts";
import CategorizedProductsImages from "./CategorizedProductsImages";
const CategorizedProductsComponent = () => {
  return (
    <div className="grid grid-cols-7">
      {Products.map((product) => (
        <CategorizedProductsImages
          image={product.img}
          alt="Loading failed"
          caption={product.caption}
        />
      ))}
    </div>
  );
};

export default CategorizedProductsComponent;
