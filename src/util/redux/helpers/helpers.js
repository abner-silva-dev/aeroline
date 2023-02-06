export const seatIsOcupated = (booking, isReserved, seatNumber) => {
  const seatsTemp = JSON.parse(JSON.stringify([...booking.seats]));
  const seatIndex = seatsTemp.findIndex(
    (el) => el.seatNumber === (seatNumber ? seatNumber : booking.seat)
  );
  seatsTemp[seatIndex].isReserved = isReserved;
  return seatsTemp;
};
