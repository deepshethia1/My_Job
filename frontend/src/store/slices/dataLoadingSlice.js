import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  profileLoading: false,
  childLoading: false,
  totalLoading: null,
  loadingKeywordChartHistory: false
};

const dataLoadingSlice = createSlice({
  name: 'data_loading',
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload
    }),
    setProfileLoading: (state, action) => ({
      ...state,
      profileLoading: action.payload
    }),
    setChildLoading: (state, action) => ({
      ...state,
      childLoading: action.payload
    }),
    setLotalLoading: (state, action) => ({
      ...state,
      totalLoading: action.payload
    }),
    setLoadingKeywordChartHistory: (state, action) => ({
      ...state,
      loadingKeywordChartHistory: action.payload
    })
  }
});

export const { setLoading, setProfileLoading, setChildLoading, setLotalLoading, setLoadingKeywordChartHistory } =
  dataLoadingSlice.actions;

export default dataLoadingSlice.reducer;
