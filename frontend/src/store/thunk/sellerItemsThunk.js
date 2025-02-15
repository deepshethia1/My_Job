import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading, setProfileLoading } from 'store/slices/dataLoadingSlice';
import { notificationFail, notificationSuccess } from 'store/slices/notificationSlice';
import Messages from '../../utils/messages';
import apiClient from '../../utils/apiClient';
import { setExportSku, setItemTags, setSellerItem, setSellerOrder, setProductTagList } from 'store/slices/sellerItemSlice';
import { setUserData } from 'store/slices/authSlice';
import { setTagId } from 'store/slices/dashboardSlice';
import { rowsPerPage } from 'store/constant';

export const getSellerItemList = createAsyncThunk('getSellerItemList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`products`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setSellerItem(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const getTagsTableData = createAsyncThunk('getTagsTableData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`tags`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setItemTags(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const createItemTags = createAsyncThunk('createItemTags', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/tags/store`, _request?.store);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      _request?.navigate('/pnl-tags');
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const updateItemTags = createAsyncThunk('updateItemTags', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));

    const response = await apiClient().put(`/tags/update/${_request.id}`, _request.data);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess(response?.data?.message));
      let store = {
        filter: {
          action: 'search',
          direction: 'desc',
          name: 'id'
        },
        limit: 10,
        page: 0,
        search: '',
        status: 'ACTIVE',
        store_id: _request?.store_id
      };
      dispatch(getTagsTableData(store));
      dispatch(setTagId(_request?.data?.product_id));
      if (_request.callbackFunc) {
        _request.callbackFunc();
      }
      if (_request.handleBack) {
        _request.handleBack();
      }
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const fetchItemList = createAsyncThunk('fetchItemList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    await apiClient().get(`products/get-wallmart-products`);

    dispatch(getSellerItemList());
    dispatch(notificationSuccess(Messages.SUCCESS.FETCHEDINPROCESS));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const getSellerOrderList = createAsyncThunk('getSellerOrderList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().get(`/orders`, _request);

    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setSellerOrder(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const fetchSellerOrderList = createAsyncThunk('fetchSellerOrderList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    await apiClient().get(`orders/get-wallmart-orders`, _request);

    dispatch(setLoading(false));
    dispatch(notificationSuccess(Messages.SUCCESS.FETCHEDINPROCESS));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const addCogsData = createAsyncThunk('addCogsData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/cogs/store`, _request.data);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(notificationSuccess('COGS Added successfully'));
      _request?.callbackFunc();
      dispatch(getSellerItemList(_request?.store));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const UploadCogsData = createAsyncThunk('UploadCogsData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/cogs/csv-upload`, _request?.formData);
    dispatch(setLoading(false));
    dispatch(getSellerItemList(_request?.store));
    if (response?.data) {
      dispatch(notificationSuccess('COGS Upload successfully'));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const UploadTagsData = createAsyncThunk('UploadTagsData', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/tags/csv-upload`, _request?.formData);
    dispatch(setLoading(false));

    if (response?.data) {
      dispatch(notificationSuccess('Tags Upload successfully'));
      let store = {
        filter: {
          action: 'sort',
          name: 'id',
          direction: 'desc'
        },
        limit: 10,
        page: 0,
        search: '',
        status: 'ACTIVE',
        store_id: _request?.store_id
      };
      dispatch(getTagsTableData(store));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const deleteItemTag = createAsyncThunk('deleteItemTag', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().delete(`/tags/delete/${_request.id}`);
    if (response?.data) {
      dispatch(setLoading(false));
      dispatch(notificationSuccess(response?.data?.message));

      let store = {
        filter: {
          action: 'search',
          name: 'id',
          direction: 'desc'
        },
        limit: 10,
        page: 0,
        search: '',
        status: 'ACTIVE',
        store_id: _request.store_id
      };
      dispatch(getTagsTableData(store));
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.DEFAULT));
    }
    _request.callbackFunc();
  } catch (error) {
    _request.callbackFunc();
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const UploadProfilePicture = createAsyncThunk('UploadCogsData', async (_request, { dispatch }) => {
  try {
    dispatch(setProfileLoading(true));
    const response = await apiClient().post(`/users/upload-profile-image/`, _request);
    dispatch(setProfileLoading(false));
    if (response?.data) {
      const profile = JSON.parse(localStorage.getItem('user_data'));
      profile.data = response.data.data;
      localStorage.setItem('user_data', JSON.stringify(profile));
      dispatch(setUserData(response?.data));
      dispatch(notificationSuccess(Messages.SUCCESS.PROFILEPICTUREUPLOAD));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setProfileLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportItemSku = createAsyncThunk('exportItemSku', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`export-products`, _request, {
      responseType: 'arraybuffer'
    });
    dispatch(setExportSku(response?.data));
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = 'Cogs-list.xlsx';

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportItemTags = createAsyncThunk('exportItemTags', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`tags/export-tags`, _request, {
      responseType: 'arraybuffer'
    });
    dispatch(setExportSku(response?.data));
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = 'Tag-list.xlsx';

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportKeywordsResult = createAsyncThunk('exportKeywordsResult', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`keywords/export-product-keyword-info`, _request, {
      responseType: 'arraybuffer'
    });
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = 'Product-keywords-result.xlsx';

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportKeywords = createAsyncThunk('exportKeywords', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`keywords/export-product-keyword`, _request, {
      responseType: 'arraybuffer'
    });
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = 'Product-keywords.xlsx';

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportPnlByItem = createAsyncThunk('exportPnlByItem', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`export-products/export-pnl-by-item`, _request, {
      responseType: 'arraybuffer'
    });
    dispatch(setExportSku(response?.data));
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = _request?.keyName;

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportPpcByCategory = createAsyncThunk('exportPpcByCategory', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`ppc/export-ppc-by-category-v2`, _request, {
      responseType: 'arraybuffer'
    });
    dispatch(setExportSku(response?.data));
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = _request?.keyName;

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportGroupBy = createAsyncThunk('exportGroupBy', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`product/export-product-brand-v2`, _request, {
      responseType: 'arraybuffer'
    });
    dispatch(setExportSku(response?.data));
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = _request?.keyName;

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const exportProductVarient = createAsyncThunk('exportProductVarient', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`product/export-product-varient-v2`, _request, {
      responseType: 'arraybuffer'
    });
    dispatch(setExportSku(response?.data));
    const csvData = new Blob([response?.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a data URI for the Blob
    const csvUrl = window.URL.createObjectURL(csvData);

    // Create an anchor element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = csvUrl;
    downloadLink.download = _request?.keyName;

    // Trigger a click event on the anchor to initiate the download
    downloadLink.click();

    // Clean up by revoking the data URI
    window.URL.revokeObjectURL(csvUrl);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});

export const getProductTagList = createAsyncThunk('getProductTagList', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/tags/product-tags`, _request);
    dispatch(setLoading(false));
    if (response?.data) {
      dispatch(setProductTagList(response?.data));
    } else {
      dispatch(notificationFail(Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(Messages.ERROR.DEFAULT));
  }
});

export const removeTagFromProduct = createAsyncThunk('removeTagFromProduct', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().post(`/tags/delete-product-tag`, _request?.data);
    if (response?.data) {
      dispatch(setLoading(false));
      dispatch(notificationSuccess(response?.data?.message));
      const sortActions = JSON.parse(localStorage.getItem('sortActions_tags'));
      let reqObj = {
        store_id: _request?.store_id,
        filter: {
          action: sortActions?.action || 'sort',
          name: sortActions?.sortOrder?.name || 'product_id',
          direction: sortActions?.sortOrder?.direction || 'desc'
        },
        status: _request?.active ? 'ACTIVE' : 'INACTIVE',
        limit: _request?.action?.limit || rowsPerPage,
        page: _request?.action?.page || 0,
        search: _request?.action?.search || ''
      };
      dispatch(getProductTagList(reqObj));
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});
export const updateProductTags = createAsyncThunk('updateProductTags', async (_request, { dispatch }) => {
  try {
    dispatch(setLoading(true));
    const response = await apiClient().put(`/tags/update-product-tag`, _request?.update_product_req);
    if (response?.data) {
      dispatch(setLoading(false));
      dispatch(notificationSuccess(response?.data?.message));
      dispatch(getProductTagList(_request?.product_list_req));
      if (_request?.close_popup) {
        _request?.close_popup();
      }
    } else {
      dispatch(notificationFail(response?.data?.message || Messages.ERROR.DEFAULT));
    }
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(notificationFail(error?.response?.data?.message || Messages.ERROR.DEFAULT));
  }
});
