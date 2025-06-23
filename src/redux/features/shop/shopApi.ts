import apiSlice from "../api/apiSlice";
export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchProdcut: builder.query({
            query: (query) => {
                const params = new URLSearchParams();
                if (query.categoryId) params.append("categoryId", query.categoryId);
                if (query.size) params.append("size", query.size);
                if (query.color) params.append("color", query.color);
                if (query.price) params.append("price", `${query.price.from}-${query.price.to}`);
                return {
                  url: `product?${params.toString()}`,
                  method: "GET",
                };
              },
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