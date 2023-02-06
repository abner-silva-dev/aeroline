export const seatIsOcupated = (seat, isReserved, seatNumber) => {
  const seatsTemp = JSON.parse(JSON.stringify([...seat.seats]));
  const seatIndex = seatsTemp.findIndex(
    (el) =>
      el.seatNumber === (seatNumber ? seatNumber : seat.currentSeat.seatNumber)
  );
  seatsTemp[seatIndex].isReserved = isReserved;
  return seatsTemp;
};

export const saveState = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};
