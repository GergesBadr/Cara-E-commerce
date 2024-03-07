import ErrorIndicator from "../../components/ErrorIndicator";
import Spinner from "../../components/Spinner";
import { useFeaturedProducts } from "../../services/useFeaturedProducts";
import ProductItem from "./ProductItem";

function FeaturedProducts() {
  const { data, isLoading, isError, error } = useFeaturedProducts();

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator errorMessage={error} />;

  return (
    <section className="responsive-container mt-24">
      <div className="mb-12 space-y-4 text-center">
        <h2 className="heading-2">Featured Products</h2>
        <p className="text-lg sec-text">
          Summer collection new modern design
        </p>
      </div>

      <div className="flex items-center gap-6 overflow-x-auto overflow-y-hidden [&>div]:min-w-[300px]">
        {data?.products?.map((product, index) => {
          return (
            <ProductItem key={product.id} product={product} index={index} />
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedProducts;
