import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
  status: null,
  type: null
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationFail: (state, action) => ({
      ...state,
      status: false,
      message: action.payload
    }),
    notificationSuccess: (state, action) => ({
      ...state,
      status: true,
      message: action.payload
    }),
    notificationClear: (state) => ({
      ...state,
      message: null,
      status: null,
      type: null
    })
  }
});

export const { notificationFail, notificationSuccess, notificationClear } = notificationSlice.actions;

export default notificationSlice.reducer;
