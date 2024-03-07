import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="mt-24 min-h-[50vh] space-y-8 text-center">
      <h1 className="heading-1">Sorry, this page does not exist!</h1>
      <Button onClick={() => navigate("/home")}>Back to homepage</Button>
    </div>
  );
}

export default NotFound;
