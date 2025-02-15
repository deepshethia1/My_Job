import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const sellerSlice = createSlice({
  name: 'sellerUser',
  initialState,
  reducers: {
    setSellerUser: (state, action) => ({
      ...state,
      list: action.payload
    })
  }
});

export const { setSellerUser } = sellerSlice.actions;

export default sellerSlice.reducer;
