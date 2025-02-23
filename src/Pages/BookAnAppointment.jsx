import AppointmentForm from "../components/BookAppointment/AppointmentForm";
import BookAppointMentHeader from "../components/BookAppointment/BookAppointMentHeader";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";

const BookAnAppointment = () => {
  return (
    <div>
      <BookAppointMentHeader />
      <CommonWrapper>
        <AppointmentForm />
      </CommonWrapper>
    </div>
  );
};

export default BookAnAppointment;
