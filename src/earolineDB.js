const users = [];
const booking = [];
const waitingList = [];
const airplane = {
  id: "airplane001",
  name: "GT1",
  capacity: 10,
  seats: [],
};

const seatNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

seatNumber.forEach((el) => {
  airplane.seats.push({
    id: `$chair0${el}`,
    seatNumber: el,
    isReserved: false,
  });
});

export const aerolineDB = {
  users,
  booking,
  waitingList,
  airplane,
};
