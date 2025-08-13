import { listMyCampings } from "@/api/admin";
import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect, useState } from "react";
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
import { formatNumber } from "@/utils/formats";

const MyCampings = () => {
  // JS
  const [campings, setCampings] = useState([]);
  const { getToken } = useAuth();

  const fetchBooking = useCallback(async () => {
    const token = await getToken();
    try {
      const res = await listMyCampings(token);
      setCampings(res.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [getToken]);

  useEffect(() => {
    fetchBooking();
  }, [fetchBooking]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Campings ({campings.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your campings.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">ID</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Price/Night</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {campings?.map((item) => {
              const { id, title, price } = item;

              return (
                <TableRow key={id}>
                  <TableCell className="font-medium text-center">{id}</TableCell>
                  <TableCell className="text-center">{title}</TableCell>
                  <TableCell className="text-center">
                    {formatNumber(price)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default MyCampings;