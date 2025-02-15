import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  userList: []
};

const sellerSlice = createSlice({
  name: 'seller',
  initialState,
  reducers: {
    setSellerData: (state, action) => ({
      ...state,
      list: action.payload
    }),
    setSellerUser: (state, action) => ({
      ...state,
      userList: action.payload
    })
  }
});

export const { setSellerData, setSellerUser } = sellerSlice.actions;

export default sellerSlice.reducer;
