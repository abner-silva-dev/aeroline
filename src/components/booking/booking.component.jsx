import { useSelector, useDispatch } from "react-redux";
import "./booking.style.css";

import { setBookings, setBooking } from "../../util/redux/slices/bookingSlice";
import { setWaitingLists } from "../../util/redux/slices/waitingListSlice";
import { setConfirmSeat } from "../../util/redux/slices/seatSlice";

import { seatIsOcupated } from "../../util/helpers/helpers";

const Booking = ({ booking, workWith }) => {
  const bookingState = useSelector((state) => state.booking);
  const seat = useSelector((state) => state.seat);
  const { waitingList } = useSelector((state) => state.waitingList);
  const dispatch = useDispatch();
  const tempArray =
    workWith === "bookings" ? bookingState.bookings : waitingList;
  const isWaitingList = workWith === "waitingList";

  const handlerOnChange = (bookingField) => {
    let bookingsTemp;
    let currentBooking;

    // 1) Create a copy of all bookings
    bookingsTemp = JSON.parse(JSON.stringify(tempArray));
    currentBooking = bookingsTemp.find((el) => el.id === booking.id);

    // 3) Update the field selected
    return (e) => {
      switch (bookingField) {
        case "fullName":
          currentBooking.fullName = e.target.value;
          break;
        case "phoneNumber":
          currentBooking.phoneNumber = e.target.value;
          break;
        default:
          return;
      }

      if (isWaitingList)
        return dispatch(setWaitingLists({ waitingList: bookingsTemp }));

      dispatch(setBookings({ bookings: bookingsTemp }));
    };
  };

  const handlerOnClickCancel = () => {
    // 1) Remove the booking selected on all bookings
    const newBookings = tempArray.filter((el) => el.id !== booking.id);

    if (!isWaitingList) {
      if (waitingList.length > 0) {
        const newWaitingList = waitingList.filter(
          (el) => el.id !== waitingList[0].id
        );

        dispatch(setBookings({ bookings: newBookings }));
        const waitingList1 = { ...waitingList[0], seat: booking.seat };
        dispatch(setWaitingLists({ waitingList: newWaitingList }));
        dispatch(setBooking({ booking: waitingList1 }));

        return;
      }

      // 2) Change the booking seat that not ocupated
      const newSeats = seatIsOcupated(seat, false, booking.seat);

      // 3) Update the state
      dispatch(setConfirmSeat({ seats: newSeats }));
      dispatch(setBookings({ bookings: newBookings }));
    } else {
      dispatch(setWaitingLists({ waitingList: newBookings }));
    }
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
          type="number"
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

      <button className="booking__btn" onClick={handlerOnClickCancel}>
        Cancelar
      </button>
    </div>
  );
};

export default Booking;
