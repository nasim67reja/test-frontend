// productApi file
import { URL } from "@/components/Reuse";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { URL } from "../components/Reuses/URL";
// import { HYDRATE } from "next-redux-wrapper";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}/api/v1/product/all`,

    // http://localhost:8000/api/v1/product/all
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/",
      ssr: true,
    }),
    getProductsById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const useGetProductsQuery = productApi.endpoints.getProducts.useQuery;
export const useGetProductsByNumberQuery =
  productApi.endpoints.getProductsById.useQuery;
