import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import Button from "../../components/Button";

function CartOperations() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mt-14 space-x-4 text-center">
      <Button onClick={() => navigate("/shop")} extraClasses="h-[52px]">
        Shop more
      </Button>
      <Button onClick={() => dispatch(clearCart())} variation="sec">
        Clear cart
      </Button>
    </div>
  );
}

export default CartOperations;
