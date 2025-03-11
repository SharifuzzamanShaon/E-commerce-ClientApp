"use clinet"
import apiSlice from "../api/apiSlice"

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(arg:any, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          console.log("Response:", response);

        } catch (error) {
          console.log(error);
          return error
        }
      }
    })
  })
})
export const { useRegisterMutation } = authApi