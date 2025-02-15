// assets
import {
  IconKey,
  IconDashboard,
  IconReportMoney,
  IconChartPie,
  IconCategory,
  IconUsers,
  IconHierarchy2,
  IconListDetails
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconKey,
  IconReportMoney,
  IconChartPie,
  IconCategory,
  IconUsers,
  IconHierarchy2,
  IconListDetails
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const sales = {
  id: 'sales',
  title: 'Sales',
  type: 'group',
  children: [
    {
      id: 'sales',
      title: 'Sales',
      type: 'collapse',
      icon: icons.IconReportMoney,
      role: [3],
      children: [
        {
          id: 'sales-dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/sales-dashboard',
          icon: icons.IconDashboard,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'sales-item',
          title: 'Sales by Item',
          type: 'item',
          url: '/sales-item',
          icon: icons.IconReportMoney,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'sales-category',
          title: 'Sales by Category',
          type: 'item',
          url: '/sales-category',
          icon: icons.IconCategory,
          breadcrumbs: false,
          role: [3]
        },

        {
          id: 'group-by-sales',
          title: 'Sales by Group',
          type: 'item',
          url: '/group-by-sales',
          icon: icons.IconHierarchy2,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'sales-by-parent',
          title: 'Sales by Parent',
          type: 'item',
          url: '/sales-by-parent',
          icon: icons.IconListDetails,
          breadcrumbs: false,
          role: [3]
        }
      ]
    }
  ]
};

export default sales;
