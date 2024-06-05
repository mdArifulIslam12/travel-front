import { IMeta } from "@/types";
import { baseApi } from "../api";

const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `/blog?limit=${arg.limit}&page=${arg.page}&sortBy=${arg.sortBy}&sortOrder=${arg.sortOrder}`,
        method: "GET",
      }),
      transformResponse: (response: any, meta: any) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: ["tours"],
    }),
    getAllBlogDbFrom: builder.query({
      query: () => ({
        url: `/blog`,
        method: "GET",
      }),
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),

      providesTags: (result: any, error: any, arg: any) => [
        "blogs",
        { type: "blog", id: arg.id },
      ],
    }),
    addBlog: builder.mutation({
      query: (data: any) => ({
        url: `/blog`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tours"],
    }),
    deleteBlog: builder.mutation({
      query: (id: any) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ data, id }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result: any, error: any, arg: any) => [
        "blogs",
        { type: "blog", id: arg.id },
      ],
    }),
  }),
});

export default tourApi;
export const {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useGetAllBlogDbFromQuery,
} = tourApi;
