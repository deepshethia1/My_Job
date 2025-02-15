import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const adminUserSlice = createSlice({
  name: 'admin-user',
  initialState,
  reducers: {
    setAdminUserData: (state, action) => ({
      ...state,
      list: action.payload
    })
  }
});

export const { setAdminUserData } = adminUserSlice.actions;

export default adminUserSlice.reducer;
