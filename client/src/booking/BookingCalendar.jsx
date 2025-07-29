// rafce
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import useBookingStore from "@/store/booking-store";

const defaultSelected = {
  from: undefined,
  to: undefined,
};

const BookingCalendar = () => {
  const [range, setRange] = useState(defaultSelected);

  useEffect(() => {
    useBookingStore.setState({
      range: range,
    });
    console.log("BookingCalendar range:", range);
  }, [range]);

  return (
    <div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        disabled={range.from && range.to}
        className="rounded-md border"
      />
      <style jsx>{`
        button[disabled] {
          background: #000000 !important;
          color: #fff !important;
          border-radius: 8px !important; 
          border: none !important;
          box-shadow: none !important;
          opacity: 1 !important; 
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
export default BookingCalendar;
