import useBookingStore from "@/store/booking-store";


const BookingForm = () => {
  const Book = useBookingStore();
  console.log("BookingForm Book:", Book);
  return (
    <div>
      {/* form content */}
    </div>
  );
};

export default BookingForm;