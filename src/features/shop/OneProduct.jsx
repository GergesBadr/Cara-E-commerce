import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useProductById } from "../../services/useProductById";
import { addToCart } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../components/Spinner";
import ErrorIndicator from "../../components/ErrorIndicator";
import Button from "../../components/Button";

function OneProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: product, isLoading, isError, error } = useProductById(id);
  const [newThumbnail, setNewThumbnail] = useState("");

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorIndicator errorMessage={error} />;

  const {
    title,
    thumbnail,
    description,
    price,
    images,
    stock,
    brand,
    warrantyInformation,
  } = product;
  const onlyFourImages = images?.slice(0, 4);

  function handleChangeThumbnail(e) {
    setNewThumbnail(e.target.getAttribute("src"));
  }

  return (
    <div className="responsive-container mt-14 flex flex-col-reverse gap-8 md:flex-row">
      <div className={`grid basis-[50%] grid-cols-4 gap-6 lg:basis-[40%]`}>
        <img
          src={newThumbnail || thumbnail}
          alt="thumbnail."
          loading="lazy"
          className={`col-span-4 h-full w-full rounded-lg object-center`}
        />
        <div
          className={`col-span-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2`}
        >
          {onlyFourImages?.map((img, index) => {
            return (
              <button
                key={img}
                onClick={handleChangeThumbnail}
                className="h-36 w-full overflow-hidden rounded-lg sm:h-32"
              >
                <img
                  src={img}
                  alt={`Sub image, ${index + 1} from ${images.length}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex basis-[50%] flex-col gap-4 lg:basis-[60%]">
        <h1 className="heading-1"> {title} </h1>
        <p className="text-2xl font-medium"> {formatCurrency(price)} </p>
        <Button
          onClick={() => dispatch(addToCart(product))}
          extraClasses="w-fit"
        >
          Add to cart
        </Button>
        <div className="space-y-4">
          <p className="sec-text text-lg">
            {description}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            aliquam optio nisi, soluta eius ipsam possimus. Voluptatem voluptas
            ratione dolor. Alias natus porro ex atque.
          </p>

          <p className="text-lg font-medium">
            Stock: <span className="sec-text font-normal"> {stock}</span>
          </p>

          <p className="text-lg font-medium">
            Brand: <span className="sec-text font-normal"> {brand}</span>
          </p>

          <p className="text-lg font-medium">
            Warranty:
            <span className="sec-text font-normal"> {warrantyInformation}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
