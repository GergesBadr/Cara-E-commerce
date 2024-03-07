import OneProduct from "../features/shop/OneProduct";
import SuggestedProducts from "../features/shop/SuggestedProducts";
import AnimatedPage from "./AnimatedPage";

function SingleProduct() {
  return (
    <AnimatedPage>
      <OneProduct />
      <SuggestedProducts />
    </AnimatedPage>
  );
}

export default SingleProduct;
