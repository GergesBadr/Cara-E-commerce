import { AnimatePresence, motion } from "framer-motion";
import { HiXCircle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import {
  deleteFromCart,
  decrementQuantity,
  incrementQuantity,
} from "./cartSlice";
import Button from "../../components/Button";

function CartTableRow({ product }) {
  const dispatch = useDispatch();
  const { id, title, thumbnail, price, quantity } = product;

  const productVariants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, y: -50 },
  };

  return (
    <motion.tr
      className="border-b-2 dark:border-b-gray-800 [&>td]:p-4"
      variants={productVariants}
      initial="hidden"
      whileInView="enter"
      exit="leave"
      viewport={{ once: true, margin: "-100px" }}
    >
      <td>
        <img
          src={thumbnail}
          alt=""
          loading="lazy"
          className="h-28 w-28 rounded-lg object-fill object-center"
        />
      </td>

      <td className="text-lg font-medium"> {title} </td>
      <td className="sec-text text-lg">{formatCurrency(price)}</td>

      <td>
        <Button onClick={() => dispatch(decrementQuantity(id))}>-</Button>
        <AnimatePresence mode="wait">
          <motion.div
            key={quantity}
            className="mx-3 inline-block"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: -40 }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          >
            {quantity ? quantity : 1}
          </motion.div>
        </AnimatePresence>
        <Button onClick={() => dispatch(incrementQuantity(id))}>+</Button>
      </td>

      <td className="sec-text text-lg">{formatCurrency(price * quantity)}</td>

      <td>
        <button
          aria-label="Delete product from cart"
          onClick={() => dispatch(deleteFromCart(product))}
        >
          <HiXCircle className="h-8 w-8 text-red-400 dark:text-red-500" />
        </button>
      </td>
    </motion.tr>
  );
}

export default CartTableRow;
