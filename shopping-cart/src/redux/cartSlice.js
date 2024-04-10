// jotogula product add to cart dibo sob gula card theke cart e transfer hobbe
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
        addCart: (state, action) => {
            // find if this item exist if so add quantity else create one
            const {id, imageUrl, productName, productCategory, price, quantity} = action.payload;
            var product = state.find(product => product.id === id);
            if(product === undefined) { 
                product = {
                    id, imageUrl, productName, productCategory, price, quantity: 1
                }
                state.push(product);
            } else {
                product.quantity = product.quantity + 1;
            }
        },
        placeOrder: (state, action) => {
            state.length = 0;
        },
        incrementItem: (state, action) => {
            var product = state.find(product => product.id === action.payload);
            product.quantity += 1;
        },
        decrementItem: (state, action) => {
            var product = state.find(product => product.id === action.payload);
            if(product.quantity>0) {
                product.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            var product = state.find(product => product.id === action.payload);
            product.quantity = 0;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addCart, placeOrder, incrementItem, decrementItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
