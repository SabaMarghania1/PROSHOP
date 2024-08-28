import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery(baseQuery),
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});

console.log(apiSlice);
