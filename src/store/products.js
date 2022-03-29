import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productlist: [
    { id: 1, title: 'p one', price: 5, description: 'some description one' },
    { id: 2, title: 'p two', price: 7, description: 'some description two' },
    {
      id: 3,
      title: 'p three',
      price: 9,
      description: 'some description three',
    },
    { id: 4, title: 'p four', price: 5, description: 'some description four' },
    { id: 5, title: 'p five', price: 3, description: 'five description one' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProdcut(state) {
      state.productlist.push({
        title: 'p one one',
        price: 5,
        description: 'some description one one',
      });
    },
  },
});

export default productsSlice;
