import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  saveList: []
};

const adminUserSlice = createSlice({
  name: 'admin-user',
  initialState,
  reducers: {
    setManageStoreData: (state, action) => ({
      ...state,
      list: action.payload
    }),
    setSaveManageStoreData: (state, action) => ({
      ...state,
      saveList: action.payload
    })
  }
});

export const { setManageStoreData, setSaveManageStoreData } = adminUserSlice.actions;

export default adminUserSlice.reducer;
