import { useSelector, useDispatch } from "react-redux";
import "./booking.style.css";

import {
  setBookings,
  confirmSeatsetFullName,
  setFullName,
  setPhoneNumber,
  setBooking,
  confirmSeat,
  setNumberSeat,
  setWaitingList,
} from "../../util/redux/slices/bookingSlice";
import { seatIsOcupated } from "../../util/redux/helpers/helpers";

const Booking = ({ booking }) => {
  const bookingState = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const handlerOnChange = (bookingField) => {
    let chooseFieldBooking;
    let bookingsTemp;
    let currentBooking;
    let isWaitingList = false;

    bookingsTemp = JSON.parse(JSON.stringify(bookingState.bookings));
    currentBooking = bookingsTemp.find((el) => el.id === booking.id);

    if (!currentBooking) {
      bookingsTemp = JSON.parse(JSON.stringify(bookingState.waitingList));
      currentBooking = bookingsTemp.find((el) => el.id === booking.id);
      isWaitingList = true;
    }

    switch (bookingField) {
      case "fullName":
        chooseFieldBooking = currentBooking.fullName;
        break;
      case "phoneNumber":
        chooseFieldBooking = currentBooking.phoneNumber;
    }

    return (e) => {
      chooseFieldBooking = e.target.value;

      if (isWaitingList)
        return dispatch(setWaitingList({ waitingList: [...bookingsTemp] }));

      dispatch(setBookings({ bookings: [...bookingsTemp] }));
    };
  };

  return (
    <div className="booking">
      <div className="booking__group">
        <label>ID vuelo</label>
        <input
          className="booking__input"
          type="text"
          defaultValue={booking.id}
          readOnly
        />
      </div>
      <div className="booking__group">
        <label>Nombre usuario</label>
        <input
          className="booking__input"
          type="text"
          defaultValue={booking.fullName}
          onChange={handlerOnChange("fullName")}
        />
      </div>
      <div className="booking__group">
        <label>Telefono usuario</label>
        <input
          className="booking__input"
          type="text"
          defaultValue={booking.phoneNumber}
          onChange={handlerOnChange("phoneNumber")}
        />
      </div>
      <div className="booking__group">
        <label>Numero de asiento</label>
        <input
          className="booking__input"
          type="text"
          defaultValue={booking.seat}
          readOnly
        />
      </div>

      <button
        className="booking__btn"
        onClick={() => {
          const newBookings = bookingState.bookings.filter(
            (el) => el.id !== booking.id
          );

          const newSeats = seatIsOcupated(bookingState, false, booking.seat);
          dispatch(confirmSeat({ seats: newSeats }));

          dispatch(setBookings({ bookings: newBookings }));
        }}
      >
        Cancelar
      </button>
    </div>
  );
};

export default Booking;
