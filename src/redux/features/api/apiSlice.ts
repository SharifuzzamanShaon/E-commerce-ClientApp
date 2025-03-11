import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URI }),
    endpoints: (builder) => ({
        refreshToken: builder.mutation({
            query: (data) => ({
                url: '/auth/refresh-token',
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                }
            }),
        })
    })
})
export default apiSlice