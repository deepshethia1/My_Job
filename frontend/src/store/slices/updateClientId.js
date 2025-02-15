import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false
};

const dataLoadingSlice = createSlice({
  name: 'updateClient_loading',
  initialState,
  reducers: {
    setClientLoading: (state, action) => ({
      ...state,
      loading: action.payload
    })
  }
});

export const { setClientLoading } = dataLoadingSlice.actions;

export default dataLoadingSlice.reducer;
