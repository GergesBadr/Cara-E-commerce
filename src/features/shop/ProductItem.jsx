import { HiStar, HiOutlineShoppingCart, HiArrowUpRight } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { addToCart } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";

function ProductItem({ product, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    thumbnail,
  } = product || {};

  const productItemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.07 * index },
    }),
  };

  return (
    <motion.div
      className="relative flex flex-col gap-4 rounded-3xl border bg-white p-4 shadow-sm dark:border-2 dark:border-gray-800 dark:bg-dark-bg"
      variants={productItemVariants}
      initial={"hidden"}
      whileInView={"visible"}
      custom={index}
      viewport={{ once: true }}
    >
      {discountPercentage >= 1 && (
        <div className="absolute left-2 top-2 z-[1] flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 p-1 text-sm text-gray-100">
          {`${discountPercentage.toFixed()}%`}
        </div>
      )}

      <div className="overflow-hidden rounded-lg">
        <motion.img
          src={thumbnail}
          // As the api does not provide an alt for images, there is almost no way to dynamically
          // generate them here. but maybe the description would be better than nothing.
          alt={description}
          loading="lazy"
          className=" h-[250px] w-full object-cover"
          whileHover={{ scale: 1.2, rotate: 4 }}
        />
      </div>

      <div className="flex grow flex-col gap-2">
        <p className="sec-text font-medium tracking-wider"> {brand} </p>
        <p className="text-xl font-semibold"> {title} </p>
        <div className="flex items-center gap-1">
          {[...Array(Math.round(rating))].map((_, index) => {
            return <HiStar key={index} className="h-5 w-5 text-yellow-500" />;
          })}
          <span className="sec-text"> ({rating}) </span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold tracking-wide text-teal-700 dark:text-teal-500">
            {formatCurrency(price)}
          </span>
          <div className="flex items-center justify-center gap-3">
            <button
              aria-label={`Add ${title} to cart`}
              onClick={() => dispatch(addToCart(product))}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
            >
              <HiOutlineShoppingCart className="h-6 w-6 text-teal-500" />
            </button>
            <button
              onClick={() => navigate(`/shop/${id}`)}
              aria-label="Open product page"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800"
            >
              <HiArrowUpRight className="h-6 w-6 text-teal-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductItem;
