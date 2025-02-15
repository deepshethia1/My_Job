import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemKeyWordList: [],
  singleItemKeyWordList: [],
  itemWiseKeywordList: []
};

const keyWordSlice = createSlice({
  name: 'keyWordSlice',
  initialState,
  reducers: {
    setItemKeyWordList: (state, action) => ({
      ...state,
      itemKeyWordList: action.payload
    }),
    setSingleItemKeyWordList: (state, action) => ({
      ...state,
      singleItemKeyWordList: action.payload
    }),
    setItemWiseKeywordList: (state, action) => ({
      ...state,
      itemWiseKeywordList: action.payload
    })
  }
});

export const { setItemKeyWordList, setSingleItemKeyWordList, setItemWiseKeywordList } = keyWordSlice.actions;

export default keyWordSlice.reducer;
