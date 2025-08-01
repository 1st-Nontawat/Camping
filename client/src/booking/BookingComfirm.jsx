// rafce
import useBookingStore from "@/store/booking-store";
import Buttons from "../components/form/Buttons"; 
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createBooking } from "@/api/booking";
import { useNavigate } from "react-router";

const BookingConfirm = () => {
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;
  const campingId = useBookingStore((state) => state.campingId);

  const { getToken, userId } = useAuth();

  const { handleSubmit, setValue, formState } = useForm();
  const { isSubmitting } = formState;

  const navigate = useNavigate();

  

  useEffect(() => {
    if (campingId) setValue("campingId", campingId);
    if (checkIn) setValue("checkIn", checkIn);
    if (checkOut) setValue("checkOut", checkOut);
  }, [campingId, checkIn, checkOut, setValue]);

  const hdlBooking = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();
    try {
      const res = await createBooking(token, value);
      const bookingId = res.data.bookingId; 
  
      navigate(`/user/checkout/${bookingId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!userId) {
    return (
      <div className="flex justify-center">
        <SignInButton
          mode="modal"
          forceRedirectUrl={`/user/camping/${campingId}`}
        >
          <Button>SignIn please</Button>
        </SignInButton>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(hdlBooking)}>
        <Buttons text="Confirm Button" isPending={isSubmitting} />
      </form>
    </div>
  );
};

export default BookingConfirm;