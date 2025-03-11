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
          await queryFulfilled;
        } catch (error) {
          console.log(error);
          return error
        }
      }
    }),
    login:builder.mutation({
      query:(data)=>({
        url:"auth/login",
        method:"POST",
        body:data
      }),
      async onQueryStarted(arg:any, {queryFulfilled, dispatch}){
        try {
          await queryFulfilled
        } catch (error) {
          console.log(error);
          return error
        }
      }
    })
  })
})
export const { useRegisterMutation, useLoginMutation } = authApi