import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';
import { setManageStoreData, setSaveManageStoreData } from 'store/slices/manageStoreSlice';
import { setResetLoading } from 'store/slices/resetLoading';

export const getManageStoreList = createAsyncThunk('getManageStoreList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`/store-management/get-store`);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setManageStoreData(response?.data));
    } else {
      dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const updateManageStoreData = createAsyncThunk('updateManageStoreData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`store-management/add-update-credentials`, _request.data);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(Messages.SUCCESS.STOREUPDATEDSUCCESS));
      dispatch(getManageStoreList());
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
    if (error?.response?.status === 403 && error?.response?.data?.invalid_key === 'client_id_secret') {
      _request?.setOpenTokenScopeModal(true);
    }
  }
});

export const setDefaultStore = createAsyncThunk('setDefaultStore', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`store-management/default-store`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      const profile = JSON.parse(localStorage.getItem('user_data'));
      Object.keys(response?.data).forEach((key) => {
        profile[key] = response?.data[key];
      });
      localStorage.setItem('user_data', JSON.stringify(profile));
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(getManageStoreList());
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const createManageStoreData = createAsyncThunk('createAdminUserData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`store-management/create-store`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(Messages.SUCCESS.STORECREATEDSUCCESS));
      dispatch(setSaveManageStoreData(response?.data.data));
      dispatch(getManageStoreList());
      _request.callbackFunc();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
    if (error?.response?.status === 403) {
      _request?.setOpenTokenScopeModal(true);
      _request.callbackFunc();
    }
  }
});

export const deleteManageStoreData = createAsyncThunk('deleteManageStoreData', async (_request, { dispatch }) => {
  try {
    dispatch(setResetLoading(true));
    const response = await apiClient().delete(`store-management/delete-store/${_request.store_id}`);
    if (response?.data) {
      _request.callbackFunc();
      dispatch(getManageStoreList());
      dispatch(setResetLoading(false));
      dispatch(notificationSuccess(response?.data?.message));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setResetLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const deleteAdvertisementData = createAsyncThunk('deleteAdvertisementData', async (_request, { dispatch }) => {
  try {
    dispatch(setResetLoading(true));
    const response = await apiClient().delete(`store-management/delete-advertise/${_request.store_id}`);
    if (response?.data) {
      _request.callbackFunc();
      dispatch(getManageStoreList());
      dispatch(setResetLoading(false));
      dispatch(notificationSuccess(response?.data?.message));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setResetLoading(false));
    dispatch(notificationFail(response?.data?.message));
  }
});
