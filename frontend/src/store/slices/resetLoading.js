import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false
};

const dataLoadingSlice = createSlice({
  name: 'reset_loading',
  initialState,
  reducers: {
    setResetLoading: (state, action) => ({
      ...state,
      loading: action.payload
    })
  }
});

export const { setResetLoading } = dataLoadingSlice.actions;

export default dataLoadingSlice.reducer;
