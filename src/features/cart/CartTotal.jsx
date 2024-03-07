import { useSelector } from "react-redux";
import { cartTotalPrice } from "./cartSlice";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";

function CartTotal() {
  const shipping = useSelector((state) => state.cart.shipping);
  const totalPrice = useSelector(cartTotalPrice);

  return (
    <div className="responsive-container mt-14 space-y-4">
      <h2 className="heading-2">Cart totals</h2>

      <div className="max-w-[500px] space-y-2 rounded-lg border-2 p-4 dark:border-gray-800">
        <p className="sec-text flex justify-between rounded-lg border-2 p-3 text-lg dark:border-gray-800">
          <span>Cart subtotal: </span>
          <span> {formatCurrency(totalPrice)} </span>
        </p>
        <p className="sec-text flex justify-between rounded-lg border-2 p-3 text-lg dark:border-gray-800">
          <span>Shipping:</span>
          <span> {shipping === 0 ? "Free" : formatCurrency(shipping)} </span>
        </p>
        <p className="flex justify-between rounded-lg border-2 p-3 text-lg font-semibold dark:border-gray-800 ">
          <span>Total:</span>
          <span>{formatCurrency(totalPrice + shipping)}</span>
        </p>
      </div>

      <Button> Proceed to checkout </Button>
    </div>
  );
}

export default CartTotal;
