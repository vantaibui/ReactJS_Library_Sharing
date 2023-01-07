import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    loader: false,
    products: [],
    productDetail: {}
}

const productSlice = createSlice({
    name: "get",
    initialState: initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = [...state.products, action.payload];

        }
    }

});


export const {getProducts} = productSlice.actions;
export default productSlice.reducer