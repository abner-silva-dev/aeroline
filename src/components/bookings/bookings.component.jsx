import Booking from "./../booking/booking.component";

import "./bookings.style.css";

const Bookings = ({ bookings, title }) => {
  return (
    <section className="container bookings">
      <h2 className="title bookings__title">{title}</h2>
      {bookings.map((el) => {
        return <Booking key={el.id} booking={el} />;
      })}
    </section>
  );
};

export default Bookings;
