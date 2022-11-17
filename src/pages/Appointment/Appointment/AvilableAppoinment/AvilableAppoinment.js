import { format } from "date-fns";
import Loading from "../../../../Shared/Loading/Loading";
import AppoinmentOptions from "../AppoinmentOptions";

const AvilableAppoinment = ({
  selectedDate,
  setSelectedOption,
  setTreatment,
  avilableServices,
  isLoading,
}) => {
  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAvilableServices(data));
  // }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <p className="text-center text-secondary text-2xl">
        Available Appointment on {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {avilableServices?.map((service) => (
          <AppoinmentOptions
            setSelectedOption={setSelectedOption}
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          ></AppoinmentOptions>
        ))}
      </div>
    </div>
  );
};

export default AvilableAppoinment;
