import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import { setItemKeyWordList, setSingleItemKeyWordList, setItemWiseKeywordList } from 'store/slices/keyWordSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';

export const getProductKeywordsList = createAsyncThunk('getProductKeywordsList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`keywords/product-keywords`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setItemKeyWordList(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const importKewords = createAsyncThunk('importKewords', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/keywords/csv-upload`, _request?.formData);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(notificationSuccess('Keywords Upload successfully'));
      let request = {
        store_id: [72],
        filter: {
          action: 'sort',
          name: 'product_id',
          direction: 'desc'
        },
        status: '',
        limit: 1000,
        page: 0,
        search: ''
      };
      dispatch(getProductKeywordsList(request));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const getSingleProductDetail = createAsyncThunk('getSingleProductDetail', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`keywords/product-keywords`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setSingleItemKeyWordList(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});
export const getKeywordListByItemId = createAsyncThunk('getKeywordListByItemId', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`keywords/product-keywords-detail`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setItemWiseKeywordList(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});
