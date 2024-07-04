/* eslint-disable @next/next/no-img-element */

const TourDetailsCheckout = ({ BookingTour }: { BookingTour: any }) => {
  const {
    date,
    tour,
    adultTickets,
    youthTickets,
    childrenTickets,
    time,
    perAdultService,
    perYouthService,
    perBooking,
    bookingTotal,
  } = BookingTour;
  const { image, title, price, duration } = tour;

  return (
    <div>
      <div className="py-8 pr-5 border-y-[1px]">
        <div className="flex">
          <img src={image} alt="" className="w-[110px] h-[110px] mr-[35px]" />

          <div className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-medium text-black">{title}</h2>
              <h2 className="text-3xl font-medium text-black">{price}</h2>
            </div>
            <p className="text-[14px] font-normal text-black pt-3">
              Date: <span className="text-[#969BA1]">{date}</span>
            </p>
            <p className="text-[14px] font-normal text-black pb-3">
              Time: <span className="text-[#969BA1]">{time}</span>
            </p>
            <p className="text-[14px] font-normal text-black pb-3">
              Duration : <span className="text-[#969BA1]">{duration}</span>{" "}
            </p>
            <p className="text-[14px] font-normal text-black">Tickets:</p>
            <p className="text-[14px] font-normal text-[#969BA1]">{`Adult     x ${adultTickets} = $${
              adultTickets * price
            } `}</p>
            <p className="text-[14px] font-normal text-[#969BA1]">{`Youth     x ${youthTickets} = $${
              youthTickets * (price - 10)
            } `}</p>
            <p className="text-[14px] font-normal text-[#969BA1]">{`Children     x ${childrenTickets} = $${0} `}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <h2 className="text-lg font-bold text-[#808488]">
          Service per person :{" "}
          <span className="text-[16px] font-medium">
            Adult x {adultTickets} (${perAdultService}){" "}
          </span>{" "}
          <span className="text-[16px] font-medium">
            Youth x {youthTickets} (${perYouthService})
          </span>
        </h2>
        <div className="pr-5">
          <h2 className="text-xl text-black">
            ${adultTickets * perAdultService + youthTickets * perYouthService}
          </h2>
        </div>
      </div>
      <div className="text-end pr-5 mt-5">
        <h2 className="text-lg font-medium text-[#969BA1] mb-3">
          PerBooking :{" "}
          <span className="text-black font-bold">${perBooking}</span>
        </h2>
        <h2 className="text-lg font-medium text-[#969BA1] mb-3 ">
          SubTotal :{" "}
          <span className="text-black font-bold">${bookingTotal}</span>
        </h2>
        <h2 className="text-lg font-medium text-[#969BA1] mb-3">
          Total : <span className="text-black font-bold">${bookingTotal}</span>
        </h2>
        <h2 className="text-lg font-medium text-[#969BA1] mb-3">
          Amount Paid : <span className="text-black font-bold">${0}</span>
        </h2>
        <h2 className="text-lg font-medium text-[#969BA1]">
          Amount Due :{" "}
          <span className="text-black font-bold">${bookingTotal}</span>
        </h2>
      </div>
    </div>
  );
};

export default TourDetailsCheckout;
