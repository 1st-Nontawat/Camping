import { formatDate } from "@/utils/formats";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { FileText, RotateCw } from "lucide-react";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#f0f0f0",
    padding: 5,
    textAlign: "center",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    textAlign: "center",
  },
  total: {
    marginTop: 20,
    fontSize: 14,
    textAlign: "right",
  },
});

const BookingInvoice = ({ booking }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Invoice */}
      <View style={styles.section}>
        <Text style={styles.header}>Booking Invoice</Text>
        <Text>Booking ID: {booking.id}</Text>
        <Text>Campsite: {booking.landmark.title}</Text>
        <Text>Invoice Date: {formatDate(new Date())}</Text>
      </View>

      {/* Details Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Nights</Text>
          <Text style={styles.tableColHeader}>Total Price</Text>
          <Text style={styles.tableColHeader}>Check-In</Text>
          <Text style={styles.tableColHeader}>Check-Out</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>{booking.totalNights}</Text>
          <Text style={styles.tableCol}>{booking.total} THB</Text>
          <Text style={styles.tableCol}>{formatDate(booking.checkIn)}</Text>
          <Text style={styles.tableCol}>{formatDate(booking.checkOut)}</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.total}>Total: {booking.total} THB</Text>
      </View>
    </Page>
  </Document>
);

const BookingPDF = ({ booking }) => {
  return (
    <PDFDownloadLink
      document={<BookingInvoice booking={booking} />}
      fileName={`invoice-${booking.id}.pdf`}
      className="flex items-center gap-2"
    >
      {({ loading }) =>
        loading ? (
          <>
            <RotateCw className="animate-spin" size={16} /> Loading...
          </>
        ) : (
          <>
            <FileText size={16} /> Download
          </>
        )
      }
    </PDFDownloadLink>
  );
};

export default BookingPDF;