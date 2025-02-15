import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';
import { setSellerUser } from '../slices/sellerUserSlice';

export const getSellerUserList = createAsyncThunk('getSellerUserList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`users/seller/user-list/${_request?.id}`);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setSellerUser(response?.data?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const createSellerUserData = createAsyncThunk('createSellerUserData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`/users/seller/create`, _request.data);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess('User created successfully'));
      dispatch(getSellerUserList({ id: _request.data.seller_id }));
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const updateSellerUser = createAsyncThunk('updateSellerUser', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().put(`/users/seller/update/${_request.seller_id}`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(getSellerUserList({ id: _request.data.seller_id }));
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const deleteSellerUserData = createAsyncThunk('deleteSellerUserData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().delete(`/users/seller/delete/${_request.id}/${_request.store_name}`);
    if (response?.data) {
      _request.callbackFunc();
      dispatch(getSellerUserList({ id: _request.seller_id }));
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
