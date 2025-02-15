import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  nextInvoice: [],
  url: null
};

const stripeSlice = createSlice({
  name: 'stripePlans',
  initialState,
  reducers: {
    setGetAllPlan: (state, action) => ({
      ...state,
      list: action.payload
    }),
    setRedirectUrl: (state, action) => ({
      ...state,
      url: action.payload
    }),
    setNextInvoice: (state, action) => ({
      ...state,
      nextInvoice: action.payload
    })
  }
});

export const { setGetAllPlan, setRedirectUrl, setNextInvoice } = stripeSlice.actions;

export default stripeSlice.reducer;
