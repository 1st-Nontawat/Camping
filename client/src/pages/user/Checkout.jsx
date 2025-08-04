import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useAuth } from "@clerk/clerk-react";
import { checkOut } from "@/api/booking";
import { useParams } from "react-router";
import { useCallback } from "react"; 

const stripePromise = loadStripe(
  "pk_test_51RsLXM4fhzlEb0Cv5c3qUAG0eD2NaOmWCqZbZaP4E8zCEwSx2eMPSrg5VFMhvaySbF1ZVon5a6oviZ6u7XvnQ8v700JDFDcPAI"
);

const Checkout = () => {
  const { getToken } = useAuth();
  const { id } = useParams();

  
  const fetchClientSecret = useCallback(async () => {
    const token = await getToken();
    try {
      const res = await checkOut(token, id);
      
      return res.data.clientSecret;
    } catch (error) {
      console.error("Failed to fetch client secret:", error);
      
      return "";
    }
  }, [getToken, id]); // 3. Add dependencies

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};
export default Checkout;