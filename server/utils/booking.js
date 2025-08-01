const calNights = (checkIn, checkOut) => {
  const milliDay = checkOut.getTime() - checkIn.getTime();
  const diffDays = milliDay / (1000 * 60 * 60 * 24);
  return diffDays;
};

const calTotal = (checkIn, checkOut, price) => {
  if (!checkIn || !checkOut) return;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const totalNights = calNights(checkInDate, checkOutDate);
  const total = totalNights * price;

  return { total, totalNights };
};

module.exports = { calNights, calTotal };