const calNights = (checkIn, checkOut) => {
  const milliDay = checkOut.getTime() - checkIn.getTime();
  const diffDays = milliDay / (1000 * 60 * 60 * 24);
  return diffDays;
};

const calTotal = (checkIn, checkOut, price) => {
  if (!checkIn || !checkOut) return;
  const totalNights = calNights(checkIn, checkOut);
  const total = totalNights * price;

  console.log("checkIn", checkIn);
  console.log("checkOut", checkOut);
  console.log("price", price);
  console.log("totalNights", totalNights);
  return { total, totalNights };
};

export { calNights, calTotal };