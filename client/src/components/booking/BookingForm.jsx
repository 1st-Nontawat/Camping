import { Card, CardTitle } from "@/components/ui/card";
import useBookingStore from "@/store/booking-store";
import { calTotal } from "@/utils/booking";
import { formatNumber } from "@/utils/formats";
import BookingComfirm from "../booking/BookingComfirm";




const BookingForm = () => {
  const price = useBookingStore((state) => state.price);
  const range = useBookingStore((state) => state.range);
  const CheckIn = range?.from;
  const CheckOut = range?.to;

  const result = calTotal(CheckIn, CheckOut, price);

  return (
    <div>
      <Card className="p-8 my-2">
        <CardTitle className="mb-4">Booking Summary</CardTitle>
        <p className="flex justify-between">
          <span>day</span>
          <span>
            {result
              ? `฿${price} x ${result.totalNights} nights`
              : "-"}
          </span>
          <span className="font-semibold">
            {result ? formatNumber(result.total) : "-"}
          </span>
        </p>
      </Card>
      <BookingComfirm />
    </div>
  );
};

export default BookingForm;