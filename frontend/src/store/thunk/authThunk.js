import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from 'store/slices/dataLoadingSlice';
import { notificationSuccess, notificationFail } from 'store/slices/notificationSlice';
import { setUserData } from 'store/slices/authSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';

export const loginUser = createAsyncThunk('loginUser', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const { username, password, navigate } = _request;
    const response = await apiClient().post(`/sign-in`, { username, password });
    dispatch(setLoading(false));
    if (response?.data && response?.data.token) {
      if (response?.data && response?.data?.role === 3) {
        navigate('/jobs');
      } else {
        navigate('/job-listing');
      }

      localStorage.setItem('user_data', JSON.stringify(response?.data));
      dispatch(setUserData(response?.data));
      dispatch(notificationSuccess(Messages.SUCCESS.LOGIN));
    } else {
      dispatch(notificationFail('Failed to login using this credentials' || Messages.ERROR.LOGIN));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.LOGIN));
  }
});

export const registerUser = createAsyncThunk('registerUser', async (_request, { dispatch }) => {
  try {
    console.log("_request_request", _request)
    dispatch(setLoading(true));

    const response = await apiClient().post(`sign-up`, _request?.formData);

    dispatch(setLoading(false));
    if (response?.data) {
      _request.callbackFunc();
      _request.navigate('/login');
      dispatch(notificationSuccess(response.data.message));
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.REGISTER));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.REGISTER));
  }
});

export const createJob = createAsyncThunk('createJob', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`job/create`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response.data.message));
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.REGISTER));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.REGISTER));
  }
});


export const registerEmployer = createAsyncThunk('registerEmployer', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().post(`employer/sign-up`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      _request.callbackFunc();
      _request.navigate('/login');
      dispatch(notificationSuccess(response.data.message));
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.REGISTER));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.REGISTER));
  }
});

