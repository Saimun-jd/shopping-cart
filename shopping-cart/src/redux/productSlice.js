import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const calcID = (products) => {
  const maxID = products.reduce((maxID, product) => Math.max(maxID, product.id), -1);
  return maxID+1;
}

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
        addProduct: (state, action) => {
            state.push({id: calcID(state), ...action.payload});
        },
        addToCart: (state, action) => {
            const product = state.find(product => product.id === action.payload);
            if(product.quantity>=2) {
                product.quantity = product.quantity - 1;
            } else {
                product.quantity = 0;
            }
        },
        incrementOrder: (state, action) => {
            var product = state.find(product => product.id === action.payload);
            product.quantity -= 1;
        },
        decrementOrder: (state, action) => {
            var product = state.find(product => product.id === action.payload.id);
            product.quantity += action.payload.value;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addProduct, addToCart, incrementOrder, decrementOrder } = productSlice.actions;

export default productSlice.reducer;
