import { IMeta } from "@/types";
import { baseApi } from "../api";

const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: (id) => ({
        url: `/booking`,
        method: "GET",
        body: { id },
      }),
      providesTags: ["bookings"],
    }),
    // getAllBookingDbFrom: builder.query({
    //   query: () => ({
    //     url: `/blog`,
    //     method: "GET",
    //   }),
    // }),
    getSingleBooking: builder.query({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "GET",
      }),

      providesTags: (result: any, error: any, arg: any) => [
        "bookings",
        { type: "booking", id: arg.id },
      ],
    }),
    addBooking: builder.mutation({
      query: (data: any) => ({
        url: `/booking/create-booking`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["bookings"],
    }),
    deleteBooking: builder.mutation({
      query: (id: any) => ({
        url: `/booking/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
    updateBooking: builder.mutation({
      query: ({ data, id }) => ({
        url: `/booking/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result: any, error: any, arg: any) => [
        "bookings",
        { type: "booking", id: arg.id },
      ],
    }),
  }),
});

export default tourApi;
export const {
  useAddBookingMutation,
  useDeleteBookingMutation,
  useGetAllBookingQuery,
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} = tourApi;
