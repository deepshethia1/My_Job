import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './slices/authSlice';
import notificationReducer from './slices/notificationSlice';
import dataLoadingReducer from './slices/dataLoadingSlice';
import sellerSliceReducer from './slices/sellerSlice';
import dashboardSlice from './slices/dashboardSlice';
import adminUserReducer from './slices/adminUserSlice';
import sellerUserSlice from './slices/sellerUserSlice';
import sellerItem from './slices/sellerItemSlice';
import resetLoading from './slices/resetLoading';
import updateClientId from './slices/updateClientId';
import manageStoreSlice from './slices/manageStoreSlice';
import stripeSlice from './slices/stripeSlice';
import keyWordSlice from './slices/keyWordSlice';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  authorization: authReducer,
  notification: notificationReducer,
  dataLoading: dataLoadingReducer,
  sellerSlice: sellerSliceReducer,
  adminUserSlice: adminUserReducer,
  sellerUserSlice: sellerUserSlice,
  sellerItemSlice: sellerItem,
  resetLoadingSlice: resetLoading,
  updateClientLoading: updateClientId,
  manageStore: manageStoreSlice,
  dashboardSlice: dashboardSlice,
  stripeSlice: stripeSlice,
  keyWordSlice: keyWordSlice
});

export default reducer;
