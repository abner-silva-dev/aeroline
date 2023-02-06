import { useSelector } from "react-redux";

import Form from "./components/form/form.component";
import ChooseSeat from "./components/chooseSeat/chooseSeat.component";
import Bookings from "./components/bookings/bookings.component";

import "./App.css";

const App = () => {
  const booking = useSelector((state) => state.booking);

  return (
    <div className="App">
      <section className="container user">
        <Form className="form-user" />
        <ChooseSeat className="choose-seat" />
      </section>

      {booking.bookings.length > 0 ? (
        <Bookings bookings={booking.bookings} title={"Pasajeros"} />
      ) : (
        ""
      )}

      {booking.waitingList.length > 0 ? (
        <Bookings bookings={booking.waitingList} title={"Lista de espera"} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
