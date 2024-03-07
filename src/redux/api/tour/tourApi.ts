import { IMeta, ITour } from "@/types";
import { baseApi } from "../api";

// async onQueryStarted (arg,{dispatch,queryFulfilled}){
//             try {
//                 const user = await queryFulfilled
//                 if (user?.data) {

//                     dispatch(addAllQuizes(user.data))
//                 }
//             } catch (error) {

//             }
//         },

const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTour: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `/tour?limit=${arg.limit}&page=${arg.page}&sortBy=${arg.sortBy}&sortOrder=${arg.sortOrder}`,
        method: "GET",
      }),
      transformResponse: (response: ITour[], meta: any) => {
        return {
          tours: response,
          meta,
        };
      },
      providesTags: ["tours"],
    }),
    getSingleTour: builder.query({
      query: (id) => ({
        url: `/tour/${id}`,
        method: "GET",
      }),

      providesTags: (result, error, arg) => [
        "tours",
        { type: "tour", id: arg },
      ],
    }),
    addTour: builder.mutation({
      query: (data: any) => ({
        url: `/tour`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tours"],
    }),
    deleteTour: builder.mutation({
      query: (id: any) => ({
        url: `/tour/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tour"],
    }),
    updateTour: builder.mutation({
      query: ({ data, id }) => ({
        url: `/tour/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result: any, error: any, arg: any) => [
        "tours",
        { type: "tour", id: arg.id },
      ],
    }),
  }),
});

export default tourApi;
export const {
  useAddTourMutation,
  useDeleteTourMutation,
  useGetAllTourQuery,
  useGetSingleTourQuery,
  useUpdateTourMutation,
} = tourApi;
