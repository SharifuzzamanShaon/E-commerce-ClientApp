import apiSlice from "../api/apiSlice";
export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchProdcut: builder.query({
            query: () => ({
                url: "product",
                method: "GET",
            }),
            async onQueryStarted(arg: any, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled
                } catch (error) {
                    console.log(error);
                    return error
                }
            }
        }),
        fetchAllCategory: builder.query({
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

export const { useFetchProdcutQuery, useFetchAllCategoryQuery } = shopApi