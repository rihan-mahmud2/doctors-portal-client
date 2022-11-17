import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const Appointment = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="mr-6"
          />
          <p>You have selected {format(selectedDate, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
