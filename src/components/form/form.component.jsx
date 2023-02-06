import { useSelector, useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import { chooseSeat } from "./../../util/redux/slices/seatSlice";
import {
  setFullName,
  setPhoneNumber,
  setBooking,
  confirmSeat,
  setWaitingList,
  setNumberSeat,
} from "../../util/redux/slices/bookingSlice";

import "./form.style.css";
import { useRef } from "react";
import { seatIsOcupated } from "../../util/redux/helpers/helpers";

const removeInputsForm = (form) => {
  form.current[0].value = "";
  form.current[1].value = "";
};

const AllSeatsIsOcupate = (seats) => {
  return seats.every((el) => el.isReserved === true);
};

const Form = () => {
  const seat = useSelector((state) => state.seat.seat);
  const booking = useSelector((state) => state.booking);
  const formUser = useRef(null);
  const dispatch = useDispatch();

  const setDefaultsParams = () => {
    dispatch(
      chooseSeat({
        seatNumber: 0,
        seatChoose: false,
      })
    );
    dispatch(setFullName({ fullName: "" }));
    dispatch(setFullName({ setPhoneNumber: 0 }));
    dispatch(setNumberSeat({ numberSeat: 0 }));
    removeInputsForm(formUser);
  };

  const handlerSubmitDataBooking = (e) => {
    e.preventDefault();
    if (AllSeatsIsOcupate(booking.seats)) {
      dispatch(
        setWaitingList({ waitingList: { ...booking, id: `${Date.now() + 1}` } })
      );
      setDefaultsParams();

      return alert("Se agrego a la lista de espera");
    }

    // 1) Check if there are a choose seat
    if (!seat.seatChoose) return alert("Por favor elija un asiento");
    dispatch(setBooking({ booking: { ...booking, id: `${Date.now() + 1}` } }));

    // 2) Change the new choose seat to ocupated
    const newSeats = seatIsOcupated(booking, true);

    // 3) Update new state
    dispatch(confirmSeat({ seats: newSeats }));

    // 4) put values in default
    setDefaultsParams();
  };

  return (
    <div className="form">
      <h2 className="title">Ingrese datos de pasajero</h2>

      <form
        className="form-user"
        ref={formUser}
        onSubmit={handlerSubmitDataBooking}
      >
        <FormInput
          textLabel={"Nombre completo"}
          type="text"
          className="form__input"
          handlerOnChange={(e) => {
            dispatch(setFullName({ fullName: e.target.value }));
          }}
        ></FormInput>
        <FormInput
          textLabel={"Numero de telefono"}
          type="number"
          className="form__input"
          handlerOnChange={(e) => {
            dispatch(setPhoneNumber({ phoneNumber: e.target.value }));
          }}
        ></FormInput>
        <button className="btn">Reservar vuelo</button>
      </form>
    </div>
  );
};

export default Form;
