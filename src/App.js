import { useSelector } from "react-redux";

import Form from "./components/form/form.component";
import ChooseSeat from "./components/chooseSeat/chooseSeat.component";
import Bookings from "./components/bookings/bookings.component";

import "./App.css";

const App = () => {
  const { bookings } = useSelector((state) => state.booking);
  const { waitingList } = useSelector((state) => state.waitingList);

  return (
    <div className="App">
      <section className="container user">
        <Form className="form-user" />
        <ChooseSeat className="choose-seat" />
      </section>

      {bookings.length > 0 ? (
        <Bookings bookings={bookings} title={"Pasajeros"} workWith="bookings" />
      ) : (
        ""
      )}

      {waitingList.length > 0 ? (
        <Bookings
          bookings={waitingList}
          title={"Lista de espera"}
          workWith="waitingList"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
