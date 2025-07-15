import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

const Logo = () => {
  return (
    <Button asChild className="border-2 border-black rounded px-4 py-2">
      <Link to="/">Logo</Link>
    </Button>
  );
};

export default Logo;