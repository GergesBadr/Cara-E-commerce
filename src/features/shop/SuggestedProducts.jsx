import { useParams } from "react-router-dom";
import { useProductById } from "../../services/useProductById";
import { useProductsByCategory } from "../../services/useProductsByCategory";
import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/ErrorIndicator";
import ProductItem from "./ProductItem";

function SuggestedProducts() {
  const { id } = useParams();
  const { data: currProduct } = useProductById(id);
  const { category } = currProduct || {};

  const { data, isLoading, isError, error } = useProductsByCategory(category);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator errorMessage={error} />;

  if (category)
    return (
      <div className="mt-24">
        <div className="mb-14 space-y-2 text-center">
          <h2 className="heading-2"> You might also like </h2>
          <p className="sec-text text-lg">
            More{" "}
            <span className="font-medium text-teal-700 dark:text-teal-500">
              {" "}
              {category}{" "}
            </span>
            products
          </p>
        </div>
        <div className="responsive-container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {data?.products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
}

export default SuggestedProducts;
