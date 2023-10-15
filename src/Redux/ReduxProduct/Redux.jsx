import { createSlice } from "@reduxjs/toolkit";


export const sliceProducts = createSlice({
    name: "products",
    initialState: {
        cart: [
        ]
    },
    reducers: {
        addToCart: (state, action) => {
            const newProduct = state.cart.find(item => item.id === action.payload.id)
            if (newProduct) {
                newProduct.quantity++
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeToCart: (state, action) => {
            const newProducts = state.cart.filter(item => item.id !== action.payload)

            state.cart = newProducts
        }
    }
})

export const { addToCart, removeToCart, incrementQuantity, decrementQuantity } = sliceProducts.actions;
export default sliceProducts.reducer