import { listBookings } from "@/api/booking";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatNumber } from "@/utils/formats";

const MyOrders = () => {
 
  const [bookings, setBookings] = useState([]);
  const { getToken } = useAuth();

  const fetchBooking = useCallback(async () => {
    
    const token = await getToken();
    try {
      const res = await listBookings(token);
      
      setBookings(res.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [getToken]);

  useEffect(() => {
    
    fetchBooking();
  }, [fetchBooking]);



  
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Invoice</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings?.map((item) => {
            const { id, total, totalNights, checkIn, checkOut } = item;
            const { title } = item.landmark;
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatNumber(total)}</TableCell>
                <TableCell>{formatDate(checkIn)}</TableCell>
                <TableCell>{formatDate(checkOut)}</TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default MyOrders;