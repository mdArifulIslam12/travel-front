import { useAddBookingMutation } from "@/redux/api/booking/bookingApi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const BookingFromTour = ({ tour }: { tour: any }) => {
  const router = useRouter();
  const [addBooking, { isSuccess, isError, isLoading }] =
    useAddBookingMutation();
  const { price } = tour;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [adultTickets, setAdultTickets] = useState(0);
  const [youthTickets, setYouthTickets] = useState(0);
  const [childrenTickets, setChildrenTickets] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [isPerPerson, setIsPerPerson] = useState(false);
  const [bookingTotal, setbookingTotal] = useState(0);

  useEffect(() => {
    const AdultTotal = price * adultTickets;

    let YouthTotal = 0;
    if (youthTickets > 0) {
      YouthTotal = (price - 10) * youthTickets;
    }
    let perPerson = 0;
    let perBooking = 0;
    if (isPerPerson) {
      const totalMen = adultTickets * 18 + youthTickets * 15;
      perPerson = totalMen;
    }
    if (isBooking) {
      perBooking = 30;
    }
    const totalPrice = AdultTotal + YouthTotal + perBooking + perPerson;

    setbookingTotal(totalPrice);
  }, [
    adultTickets,
    youthTickets,
    childrenTickets,
    isBooking,
    isPerPerson,
    price,
  ]);
  if (isLoading) {
    return <p>loading</p>;
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Handle the form submission logic here

    let bookingTour: any = {
      date,
      time,
      adultTickets,
      youthTickets,
      childrenTickets,
      bookingTotal,
      tour: tour._id,
      perBooking: 30,
      perAdultService: 18,
      perYouthService: 15,
      paid: false,
      userId: "65dd8d234110adfe0e89c988",
    };

    const res = await addBooking(bookingTour);
    if (!!res) {
      // message.success("AC Department added successfully");
      console.log("Booking added successfully");
      // router.push("/");
    }

    // if (isSuccess) {
    //   router.push("/");
    // }
  };

  return (
    <div className="border-[1px] border-dotted border-[#CFD3DA] px-7 py-9 ">
      <form onSubmit={handleSubmit} className="">
        <h2 className="text-2xl text-black font-bold">Book This Tour</h2>
        <div className="mb-4">
          <input
            type="date"
            id="date"
            name="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-black subHeaderTitle text-md font-bold mb-2"
            htmlFor="tickets"
          >
            Tickets
          </label>
          <div className="mb-2 flex items-center justify-between">
            <label className="block text-gray-700 text-sm mb-1">
              Adult (18+ years)
              <span className="headerTitle text-black text-lg font-bold ml-1">
                ${tour?.price}
              </span>
            </label>
            <input
              type="number"
              value={adultTickets}
              onChange={(e) => setAdultTickets(Number(e.target.value))}
              min="0"
              className="shadow appearance-none border rounded w-[90px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2  flex items-center justify-between">
            <label className="block text-gray-700 text-sm mb-1">
              Youth (13-17 years)
              <span className="headerTitle text-black text-lg font-bold ml-1">
                ${tour?.price - 10}
              </span>
            </label>
            <input
              type="number"
              value={youthTickets}
              onChange={(e) => setYouthTickets(Number(e.target.value))}
              min="0"
              className="shadow appearance-none border rounded w-[90px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="block text-gray-700 text-sm mb-1">
              Children (0-12 years)
            </label>
            <input
              type="number"
              value={childrenTickets}
              onChange={(e) => setChildrenTickets(Number(e.target.value))}
              min="0"
              className="shadow appearance-none border rounded w-[90px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="w-full  border-t-[1px] border-dotted border-[#CFD3DA] mt-[30px] mb-[20px] "></div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-[12px]">Add Extra</h2>
          <div className="mb-2 flex items-center">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={isBooking}
              onChange={(e) => setIsBooking(!isBooking)}
              className="checkbox checkbox-sm mr-2"
            />
            <label className=" text-gray-700 text-sm w-full flex justify-between items-center ">
              <span> Service per booking</span>{" "}
              <span className="text-black text-md font-bold">$30</span>
            </label>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className=" flex  items-center">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={isPerPerson}
                onChange={(e) => setIsPerPerson(!isPerPerson)}
                className="checkbox checkbox-sm mr-2"
              />
              <label className=" text-gray-700 text-sm">
                Service per person
              </label>
            </div>
            <ul className=" list-inside text-gray-700 text-sm mb-[-25px] ">
              <li className="">
                Adult:
                <span className="text-md text-black font-bold pl-1"> $18</span>
              </li>
              <li>
                Youth: <span className="text-md text-black font-bold">$15</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  border-t-[1px] border-dotted border-[#CFD3DA] mt-[50px] mb-[20px] "></div>
        <div className="mb-[25px] ">
          <p className="flex justify-between items-center w-full text-bold">
            <span className="font-bold">Total</span>{" "}
            <span className="text-xl font-bold text-[#e46d30]">
              ${bookingTotal}
            </span>{" "}
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#e46d30] hover:bg-[#db5d1c] text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline w-full "
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingFromTour;
