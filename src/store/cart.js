import { createSlice } from '@reduxjs/toolkit';

const initialState = { itemCount: 0, toggle: false, productsInCart: [] };
const getIndex = (state, action) => {
  return state.productsInCart.map((item) => item.id).indexOf(action.payload.id);
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.itemCount = action.payload.itemCount;
      state.toggle = action.payload.toggle;
      state.productsInCart = action.payload.productsInCart
        ? action.payload.productsInCart
        : [];
    },
    addNewItem(state, action) {
      const index = getIndex(state, action);
      if (index < 0) {
        state.productsInCart.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
        });
      } else {
        state.productsInCart[index].quantity++;
        state.productsInCart[index].total += action.payload.price;
      }
      state.itemCount++;
      console.log('cartslice.add', action);
    },
    increment(state, action) {
      const index = getIndex(state, action);
      state.productsInCart[index].quantity++;
      state.productsInCart[index].total += action.payload.price;
      state.itemCount++;
    },
    decrement(state, action) {
      const index = getIndex(state, action);
      if (state.productsInCart[index].quantity === 1) {
        state.productsInCart = state.productsInCart.filter(
          (item) => item.id != action.payload.id
        );
        state.itemCount--;
      } else {
        state.productsInCart[index].quantity--;
        state.productsInCart[index].total -= action.payload.price;
        state.itemCount--;
      }
    },
    toggle(state) {
      state.toggle = !state.toggle;
      console.log('cartslice.toggle', state);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartSlice;
