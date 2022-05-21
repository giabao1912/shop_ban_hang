import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, product) => {
            state.products = [...state.products, product.payload]
        },
        removefromcart: (state, product) => {
            console.log(product)
            let { orderId } = product.payload;
            let arr = state.products.filter(item => item.orderId !== orderId)
            // console.log(arr)
            state.products = arr    
        }
    }
})

export const { addtocart, removefromcart } = cartSlice.actions

export default cartSlice.reducer