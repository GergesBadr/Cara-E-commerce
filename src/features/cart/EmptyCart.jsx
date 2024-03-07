import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="mt-24 space-y-4 text-center">
      <p className="text-lg font-semibold">
        Your cart is empty. start adding new items now!
      </p>
      <Button onClick={() => navigate("/shop")}>Go to shop</Button>
    </div>
  );
}

export default EmptyCart;
