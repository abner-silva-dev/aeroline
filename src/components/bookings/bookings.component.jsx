import Booking from "./../booking/booking.component";

import "./bookings.style.css";

const Bookings = ({ bookings, title, workWith }) => {
  return (
    <section className="container bookings">
      <h2 className="title bookings__title">{title}</h2>
      {bookings.map((el) => {
        return <Booking key={el.id} booking={el} workWith={workWith} />;
      })}
    </section>
  );
};

export default Bookings;
