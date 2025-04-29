import apiSlice from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        fetchCategory:builder.query({
            query: () => ({
                url: "product/all-categories",
                method: "GET"
            }),
            async onQueryStarted(arg: any, { queryFulfilled, dispatch }) {
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
export const { useFetchCategoryQuery } = productApi