import { USERS_URL } from "../constants";
import { apiSlice } from "../constants";

export const usersApiSlice = apiSlice.injectEndPoints({
  endPoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
