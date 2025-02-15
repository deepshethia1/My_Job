import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  tagList: [],
  productTagList: [],
  orderList: [],
  exportSKU: null
};

const sellerSlice = createSlice({
  name: 'sellerItem',
  initialState,
  reducers: {
    setSellerItem: (state, action) => ({
      ...state,
      list: action.payload
    }),
    setItemTags: (state, action) => ({
      ...state,
      tagList: action.payload
    }),
    setProductTagList: (state, action) => ({
      ...state,
      productTagList: action.payload
    }),
    setSellerOrder: (state, action) => ({
      ...state,
      orderList: action.payload
    }),
    setExportSku: (state, action) => ({
      ...state,
      exportSKU: action.payload
    })
  }
});

export const { setSellerItem, setItemTags, setSellerOrder, setExportSku, setProductTagList } = sellerSlice.actions;

export default sellerSlice.reducer;
