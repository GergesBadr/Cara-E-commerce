import { useSelector } from "react-redux";
import CartTableRow from "./CartTableRow";
import { AnimatePresence } from "framer-motion";

function CartTable() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="mt-24 overflow-x-auto overflow-y-hidden px-8">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="dark:bg-dark-bg bg-gray-200 text-left [&>th]:p-4">
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          <AnimatePresence>
            {cart?.map((product) => {
              return <CartTableRow key={product.id} product={product} />;
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
