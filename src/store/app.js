import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui-slice',
  initialState: { show: false, Notif: { title: '', message: '' } },
  reducers: {
    addNotification(state, action) {
      state.Notif.title = action.payload.title;
      state.Notif.message = action.payload.message;
      state.Notif.status = action.payload.status;
      state.show = true;
    },
    removeNotification(state) {
      state = {};
    },
    hide(state){
      state.show = false;
    }
  },
});

export const uiActions = uiSlice.actions;
export const uiReducers = uiSlice.reducer;
export default uiSlice;
