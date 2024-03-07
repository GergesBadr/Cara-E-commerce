import { useSelector } from "react-redux";
import { useEffect } from "react";
import CartBanner from "../features/cart/CartBanner";
import CartTable from "../features/cart/CartTable";
import CartTotal from "../features/cart/CartTotal";
import EmptyCart from "../features/cart/EmptyCart";
import CartOperations from "../features/cart/CartOperations";
import AnimatedPage from "./AnimatedPage";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    document.title = "Cara E-commerce | Cart";
  }, []);

  return (
    <AnimatedPage>
      <CartBanner />

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartTable />
          <CartOperations />
          <CartTotal />
        </>
      )}
    </AnimatedPage>
  );
}

export default Cart;
