import { createSlice } from '@reduxjs/toolkit';
import { getAuthUser } from '../../utils/services';

const initialState = {
  userData: getAuthUser(),
  verifyEmail: '',
  userDetails: {},
  profilePic: null,
  verifyEmailMessage: ''
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userData: action.payload
    }),
    setVerifyEmail: (state, action) => ({
      ...state,
      verifyEmail: action.payload
    }),
    setUserDetails: (state, action) => ({
      ...state,
      userDetails: action.payload
    }),
    setUserProfile: (state, action) => ({
      ...state,
      profilePic: action.payload
    }),
    setVerifyEmailMessage: (state, action) => ({
      ...state,
      verifyEmailMessage: action.payload
    })
  }
});

export const { setUserData, setVerifyEmail, setTagName, setUserDetails, setUserProfile, setVerifyEmailMessage } =
  authSlice.actions;

export default authSlice.reducer;
