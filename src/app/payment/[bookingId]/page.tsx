"use client";

import TourDetailsCheckout from "@/components/checkout/TourDetailsCheckout";
import SheardHeader from "@/components/Sheard/SheardHeader";
import SheardNewsletterSupport from "@/components/Sheard/SheardNewsletterSupport";
import { useGetSingleBookingQuery } from "@/redux/api/booking/bookingApi";

const BookingCheckout = ({ params }: { params: any }) => {
  const { data, isLoading, isError, isSuccess } = useGetSingleBookingQuery(
    params.bookingId
  );
  let content = null;
  if (isLoading) {
    content = <div>Loding..</div>;
  } else if (!isLoading && isError) {
    content = <div className="">Booking is not found!!</div>;
  } else if (!isLoading && !isError && isSuccess) {
    content = data;
  }

  console.log(content);
  return (
    <div>
      <SheardHeader title="Checkout" subTitle="checkout" />
      <div className="max-w-7xl mx-auto my-8">
        <div className="max-w-7xl mx-auto tour-page-small-device ">
          <div className=" grid lg:grid-cols-12 sm:grid-cols-12 gap-4 my-16  ">
            <div className="lg:col-span-8 sm:col-span-12 lg:pr-12 ">
              <TourDetailsCheckout BookingTour={content} />
            </div>
            <div className="lg:col-span-4 sm:col-span-12   tour-page-fliter-section ">
              {/* <BookingFromTour tour={tour} /> */}
            </div>
          </div>
        </div>
      </div>
      <SheardNewsletterSupport />
    </div>
  );
};

export default BookingCheckout;
