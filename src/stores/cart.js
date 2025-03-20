import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action){
        const {productId, quantity} = action.payload;
        state.items.push({productId, quantity});
        const indextProductId = state.items.findIndex(item => item.productId === productId);
        if (indextProductId >= 0) {
          state.items[indextProductId].quantity += quantity;
        }else{
          state.items.push({productId, quantity});
        }
      }
      
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer