import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import { setSellerData } from 'store/slices/sellerSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';

export const getSellerList = createAsyncThunk('getSellerList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`/users`);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setSellerData(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const updateSellerData = createAsyncThunk('updateSellerData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().put(`/users/update/${_request.seller_id}`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(getSellerList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const createSellerData = createAsyncThunk('createSellerData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`/users/create`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess('Seller created successfully'));
      dispatch(getSellerList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const deleteSellerData = createAsyncThunk('deleteSellerData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().delete(`/users/delete/${_request.seller_id}`);
    if (response?.data) {
      _request.callbackFunc();
      dispatch(getSellerList());
      dispatch(setLoading(false));
      dispatch(notificationSuccess(response?.data?.message));
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});
