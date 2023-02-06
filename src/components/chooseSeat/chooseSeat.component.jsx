import { useSelector, useDispatch } from "react-redux";
import Seat from "../seat/seat.component";
import "./chooseSeat.style.css";

const ChooseSeat = () => {
  const { seats } = useSelector((state) => state.seat);

  return (
    <div className="choose">
      <h2 className="title">Escoje tu lugar</h2>
      <div className="choose__seat">
        {seats.map((seat) => (
          <Seat key={seat.seatNumber} seat={seat} />
        ))}
      </div>
    </div>
  );
};

export default ChooseSeat;
