import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './products';
import cartSlice, { cartReducer } from './cart';
import uiSlice ,{uiReducers} from './app';

const store = configureStore({
  reducer: { pr: productsSlice.reducer, cr: cartReducer, ar:uiReducers },
});

export default store;
