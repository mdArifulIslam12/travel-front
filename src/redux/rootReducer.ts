import { baseApi } from "./api/api";
import filterSlice from "./api/tour/filterTour";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  filter: filterSlice,
};
