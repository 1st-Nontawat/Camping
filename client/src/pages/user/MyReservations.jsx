import { listAllReservations } from "@/api/admin";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import ReservationsContainer from "../../components/admin/ReservationContainer";


const MyReservations = () => {
 
  const [reservations, setReservations] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    
    const token = await getToken();
    try {
      const res = await listAllReservations(token);
      console.log(res.data);
      // console.log(res.data.result);
      setReservations(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ReservationsContainer />

      {/* Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Total Reservations ({reservations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Booking ID</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Nights</TableHead>
                <TableHead className="text-center">Total Price</TableHead>
                <TableHead className="text-center">Check In</TableHead>
                <TableHead className="text-center">Check Out</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {reservations?.map((item) => {
                const { id, total, totalNights, checkIn, checkOut } = item;
                const { title } = item.landmark;
                return (
                  <TableRow key={id}>
                    <TableCell className="font-medium">{id}</TableCell>
                    <TableCell className="text-center">{title}</TableCell>
                    <TableCell className="text-center">{totalNights}</TableCell>
                    <TableCell className="text-center">
                      {formatNumber(total)}
                    </TableCell>
                    <TableCell className="text-center">{formatDate(checkIn)}</TableCell>
                    <TableCell className="text-center">{formatDate(checkOut)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
export default MyReservations;