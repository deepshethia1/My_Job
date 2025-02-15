import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../utils/apiClient';
import Messages from '../../utils/messages';
import { notificationFail, notificationSuccess } from 'store/slices/notificationSlice';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { setGetAllPlan, setRedirectUrl } from 'store/slices/stripeSlice';

export const getAllPlans = createAsyncThunk('getAllPlans', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`stripe/all-plan`);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setGetAllPlan(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const choosePlans = createAsyncThunk('choosePlans', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`stripe/create-subscription/`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      const currentLocalStorageData = JSON.parse(localStorage.getItem('user_data'));
      currentLocalStorageData.data.stripe_customer_id = response?.data?.customer;
      localStorage.setItem('user_data', JSON.stringify(currentLocalStorageData));
      dispatch(setRedirectUrl(response?.data?.url));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    if (error?.response?.data?.error) {
      dispatch(notificationFail(error?.response?.data?.error));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  }
});

export const getNextInvoice = createAsyncThunk('getNextInvoice', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`stripe/get-next-invoice`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      localStorage.setItem('next-invoice', JSON.stringify(response.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const upgradePlan = createAsyncThunk('upgradePlan', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`stripe/upgrade-subscription/`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(Messages.SUCCESS.UPGRADEPLANSUCCESS));
      window.location.reload();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const cancelPlan = createAsyncThunk('cancelPlan', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`stripe/cancel-subscription/`);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(Messages.SUCCESS.CANCELPLANSUCCESS));
      window.location.reload();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getResumePlan = createAsyncThunk('resumePlan', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`stripe/resume-subscription/`);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(Messages.SUCCESS.RESUMEPLANSUCCESS));
      window.location.reload();
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message));
  }
});
