import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  storeList: [],
  jobsList: [],
  viewJobApplied: [],
  pieChart: [],
  date: [],
  menuFilterType: [],
  menuFilterTypeChart: [],
  salesMyJob: [],
  newSalesMatrics: [],
  ppcChart: [],
  salesChartV: [],
  pnlData: [],
  storeId: [],
  tagId: [],
  pnlByItemData: [],
  ppcByItemData: [],
  pnlByItemDataExport: [],
  ppcCategoryData: [],
  groupByProductData: [],
  groupByPPCData: [],
  groupBySalesData: [],
  productVariantData: [],
  salesByBrandData: [],
  pnlDataAccoutGraphData: [],
  graphColors: [
    '#9d9b00',
    '#00aebd',
    '#00007f',
    '#007f14',
    '#c70d0f',
    '#FF5733',
    '#65e8b4',
    '#d0ae8b',
    '#4cd6f1',
    '#ae0e52',
    '#ff80ed',
    '#a9e37c',
    '#25bdfe',
    '#038c93',
    '#e3c6ff'
  ],
  itemLevelGraphData: [],
  graphColorsItemLevel: [
    '#72849d',
    '#9c8ec1',
    '#83846e',
    '#c57465',
    '#aaaaaa',
    '#c3b8a5',
    '#93865f',
    '#535c3d',
    '#8e4c1a',
    '#88391b',
    '#d0e978',
    '#dcc059',
    '#7eae7a',
    '#567883',
    '#37545f'
  ],
  selectedStoreIds: [],
  childData: [],
  byItemTotal: {},
  byCategoryTotal: {},
  byGroupyTotal: {},
  keywordHistoryData: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData: (state, action) => ({
      ...state,
      list: action.payload
    }),
    setDashboardPieChartData: (state, action) => ({
      ...state,
      pieChart: action.payload
    }),
    setSalesDashboardData: (state, action) => ({
      ...state,
      ppcChart: action.payload
    }),
    setSalesVDashboardData: (state, action) => ({
      ...state,
      salesChartV: action.payload
    }),
    setPnlDashboardData: (state, action) => ({
      ...state,
      pnlData: action.payload
    }),
    setPnlByItemData: (state, action) => ({
      ...state,
      pnlByItemData: action.payload
    }),
    setPpcProductCategory: (state, action) => ({
      ...state,
      ppcCategoryData: action.payload
    }),
    setGroupByProduct: (state, action) => ({
      ...state,
      groupByProductData: action.payload
    }),
    setGroupByPPC: (state, action) => ({
      ...state,
      groupByPPCData: action.payload
    }),
    setGroupBySales: (state, action) => ({
      ...state,
      groupBySalesData: action.payload
    }),
    setProductVariant: (state, action) => ({
      ...state,
      productVariantData: action.payload
    }),
    setSalesByBrandData: (state, action) => ({
      ...state,
      salesByBrandData: action.payload
    }),
    setPpcByItemData: (state, action) => ({
      ...state,
      ppcByItemData: action.payload
    }),
    setDashboardStoreData: (state, action) => ({
      ...state,
      storeList: action.payload
    }),
    setDashboardJobList: (state, action) => ({
      ...state,
      jobsList: action.payload
    }),
    setViewJobApplied: (state, action) => ({
      ...state,
      viewJobApplied: action.payload
    }),
    setDashboardDateRange: (state, action) => ({
      ...state,
      date: action.payload
    }),
    setmenuFilterType: (state, action) => ({
      ...state,
      menuFilterType: action.payload
    }),
    setPnlByItemExport: (state, action) => ({
      ...state,
      pnlByItemDataExport: action.payload
    }),
    setmenuFilterTypeChart: (state, action) => ({
      ...state,
      menuFilterTypeChart: action.payload
    }),
    setSalesMyJobChart: (state, action) => ({
      ...state,
      salesMyJob: action.payload
    }),
    setNewSalesMatrics: (state, action) => ({
      ...state,
      newSalesMatrics: action.payload
    }),
    setStoreIdChart: (state, action) => ({
      ...state,
      storeId: action.payload
    }),
    setTagId: (state, action) => ({
      ...state,
      tagId: action.payload
    }),
    setPnlDataAccoutGraphData: (state, action) => ({
      ...state,
      pnlDataAccoutGraphData: action.payload
    }),
    setItemLevelGraphData: (state, action) => ({
      ...state,
      itemLevelGraphData: action.payload
    }),
    setSelectedStoreIds: (state, action) => ({
      ...state,
      selectedStoreIds: action.payload
    }),
    setChildData: (state, action) => ({
      ...state,
      childData: action.payload
    }),
    setByItemTotal: (state, action) => ({
      ...state,
      byItemTotal: action.payload
    }),
    setByCategoryTotal: (state, action) => ({
      ...state,
      byCategoryTotal: action.payload
    }),
    setByGroupTotal: (state, action) => ({
      ...state,
      byGroupTotal: action.payload
    }),
    setKeywordHistoryData: (state, action) => ({
      ...state,
      keywordHistoryData: action.payload
    })
  }
});

export const {
  setDashboardJobList,
  setViewJobApplied,
  setDashboardData,
  setDashboardStoreData,
  setDashboardPieChartData,
  setSalesDashboardData,
  setSalesByBrandData,
  setSalesVDashboardData,
  setPnlDashboardData,
  setPpcByItemData,
  setPnlByItemData,
  setPpcProductCategory,
  setGroupByProduct,
  setGroupByPPC,
  setGroupBySales,
  setProductVariant,
  setDashboardDateRange,
  setPnlByItemExport,
  setmenuFilterType,
  setmenuFilterTypeChart,
  setSalesMyJobChart,
  setNewSalesMatrics,
  setStoreIdChart,
  setTagId,
  setPnlDataAccoutGraphData,
  setItemLevelGraphData,
  setSelectedStoreIds,
  setChildData,
  setByItemTotal,
  setByCategoryTotal,
  setByGroupTotal,
  setKeywordHistoryData
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
