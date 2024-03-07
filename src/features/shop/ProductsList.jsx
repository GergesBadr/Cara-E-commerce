import ErrorIndicator from "../../components/ErrorIndicator";
import Spinner from "../../components/Spinner";
import { useProducts } from "../../services/useProducts";
import ProductItem from "./ProductItem";

function ProductsList() {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator errorMessage={error} />;

  return (
    <section className="responsive-container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
      {data?.products?.map((product, index) => {
        return <ProductItem key={product.id} product={product} index={index} />;
      })}
    </section>
  );
}

export default ProductsList;
