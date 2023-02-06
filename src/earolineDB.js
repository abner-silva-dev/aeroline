const seatNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seats = [];

seatNumber.forEach((el) => {
  seats.push({
    id: `$chair0${el}`,
    seatNumber: el,
    isReserved: false,
  });
});

export const aerolineDB = {
  user: {
    currentUser: {
      fullName: "",
      phoneNumber: 0,
      seat: 0,
    },
  },
  booking: { bookings: [] },
  waitingList: { waitingList: [] },
  seat: {
    currentSeat: {
      seatNumber: 0,
      seatChoose: false,
    },
    seats,
  },
};
