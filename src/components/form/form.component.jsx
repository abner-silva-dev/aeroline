import { useSelector, useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import { setCurrentSeat } from "./../../util/redux/slices/seatSlice";
import { setBooking } from "../../util/redux/slices/bookingSlice";
import { setWaitingList } from "../../util/redux/slices/waitingListSlice";
import { setCurrentUser } from "../../util/redux/slices/userSlice";

import { setConfirmSeat } from "./../../util/redux/slices/seatSlice";

import "./form.style.css";
import { useRef } from "react";
import { seatIsOcupated } from "../../util/helpers/helpers";

const removeInputsForm = (form) => {
  form.current[0].value = "";
  form.current[1].value = "";
};

const AllSeatsIsOcupate = (seats) => {
  return seats.every((el) => el.isReserved === true);
};

const Form = () => {
  const { currentUser } = useSelector((state) => state.user);
  const seat = useSelector((state) => state.seat);
  const formUser = useRef(null);
  const dispatch = useDispatch();

  const setDefaultsParams = () => {
    dispatch(
      setCurrentSeat({
        seatNumber: 0,
        seatChoose: false,
      })
    );
    dispatch(
      setCurrentUser({
        currentUser: { fullName: "", phoneNumber: 0, seat: 0 },
      })
    );
    removeInputsForm(formUser);
  };

  const handlerSubmitDataBooking = (e) => {
    e.preventDefault();
    if (AllSeatsIsOcupate(seat.seats)) {
      dispatch(
        setWaitingList({
          waitingList: {
            ...currentUser,
            seat: 0,
            id: `${Date.now() + 1}`,
          },
        })
      );
      setDefaultsParams();

      return alert("Se agrego a la lista de espera");
    }

    // 1) Check if there are a choose seat
    if (!seat.currentSeat.seatChoose)
      return alert("Por favor elija un asiento");

    dispatch(
      setBooking({
        booking: {
          ...currentUser,
          seat: seat.currentSeat.seatNumber,
          id: `${Date.now() + 1}`,
        },
      })
    );

    // 2) Change the current seat to ocupated
    const chosenSeat = seatIsOcupated(seat, true);

    // 3) Update new state
    dispatch(setConfirmSeat({ seats: chosenSeat }));

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
            dispatch(
              setCurrentUser({
                currentUser: { ...currentUser, fullName: e.target.value },
              })
            );
          }}
        ></FormInput>
        <FormInput
          textLabel={"Numero de telefono"}
          type="number"
          className="form__input"
          handlerOnChange={(e) => {
            dispatch(
              setCurrentUser({
                currentUser: { ...currentUser, phoneNumber: e.target.value },
              })
            );
          }}
        ></FormInput>
        <button className="btn">Reservar vuelo</button>
      </form>
    </div>
  );
};

export default Form;
