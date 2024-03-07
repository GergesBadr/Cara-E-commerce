import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect } from "react";

function ComingSoon() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cara E-commerce | Coming Soon";
  }, []);

  return (
    <div className="mt-24 space-y-8 text-center">
      <p className="text-lg font-semibold md:text-3xl">
        Sorry, This content coming soon. stay tuned!
      </p>
      <Button onClick={() => navigate("/home")}>Back to homepage</Button>
    </div>
  );
}

export default ComingSoon;
