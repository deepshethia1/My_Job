// assets
import {
  IconDashboard,
  IconUser,
  IconApps,
  IconUsers,
  IconShoppingCart,
  IconClipboard,
  IconBuildingWarehouse,
  IconBrandCampaignmonitor,
  IconClipboardCheck,
  IconClick
} from '@tabler/icons';
// constant
const icons = {
  IconDashboard,
  IconUser,
  IconApps,
  IconUsers,
  IconShoppingCart,
  IconClipboard,
  IconBuildingWarehouse,
  IconBrandCampaignmonitor,
  IconClipboardCheck,
  IconClick
};

const sideMenus = [
  {
    parent: {
      id: 'menu',

      title: 'Extranal',
      type: 'group',
      role: [1, 2, 4],
      children: [
        {
          id: 'sellers',
          title: 'Manage Sellers',
          type: 'item',
          url: '/sellers',
          icon: icons.IconApps,
          breadcrumbs: false,
          role: [1]
        },
        {
          id: 'users',
          title: 'Users Sellers',
          type: 'item',
          url: '/users',
          icon: icons.IconUser,
          breadcrumbs: false,
          role: [1, 2]
        },
        {
          id: 'sellerItem',
          title: 'Seller Item',
          type: 'item',
          url: '/item-sku',
          icon: icons.IconClipboard,
          breadcrumbs: false,
          role: [2, 4]
        },
        {
          id: 'sellerOrder',
          title: 'Seller Order',
          type: 'item',
          url: '/seller-order',
          icon: icons.IconShoppingCart,
          breadcrumbs: false,
          role: [2, 4]
        },
        {
          id: 'adminUsers',
          title: 'Admin Users',
          type: 'item',
          url: '/admin-users',
          icon: icons.IconUsers,
          breadcrumbs: false,
          role: [1]
        }
      ]
    }
  },
  {
    parent: {
      id: 'menu',
      title: 'PPC',
      type: 'group',
      role: [2, 4],
      children: [
        {
          id: 'ppc',
          title: 'PPC Children',
          type: 'collapse',
          icon: icons.IconClick,
          role: [2, 4],
          subChild: [
            {
              id: 'ppc',
              title: 'Dashboard',
              type: 'item',
              url: '/dashboard',
              icon: icons.IconDashboard,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'ppcCampaign',
              title: 'PPC by Campaign',
              type: 'item',
              url: '/ppc-campaign',
              icon: icons.IconBrandCampaignmonitor,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'ppcGroup',
              title: 'PPC by Ad Group',
              type: 'item',
              url: '/ppc-group',
              icon: icons.IconUsers,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'ppcItem',
              title: 'PPC by Item',
              type: 'item',
              url: '/ppc-item',
              icon: icons.IconClipboardCheck,
              breadcrumbs: false,
              role: [2, 4]
            }
          ]
        }
      ]
    }
  },
  {
    parent: {
      id: 'pages',
      title: 'Sales',
      type: 'group',
      role: [2, 4],
      children: [
        {
          id: 'sales',
          title: 'Sales Children',
          type: 'collapse',
          icon: icons.IconReportMoney,
          role: [2, 4],
          subChild: [
            {
              id: 'sales-dashboard',
              title: 'Dashboard',
              type: 'item',
              url: '/sales-dashboard',
              icon: icons.IconDashboard,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'salesbyitem',
              title: 'Sales by item',
              type: 'item',
              url: '/sales-item',
              icon: icons.IconReportMoney,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'salesbybrand',
              title: 'Sales by brand',
              type: 'item',
              url: '/sales-brand',
              icon: icons.IconChartPie,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'salesbycategory',
              title: 'Sales by category',
              type: 'item',
              url: '/sales-category',
              icon: icons.IconCategory,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'salesbygroup',
              title: 'Sales by group',
              type: 'item',
              url: '/sales-group',
              icon: icons.IconUsers,
              breadcrumbs: false,
              role: [2, 4]
            }
          ]
        }
      ]
    }
  },
  {
    parent: {
      id: 'utilities',
      title: 'PnL',
      type: 'group',
      role: [2, 4],
      children: [
        {
          id: 'pnl',
          title: 'PnL Children',
          type: 'collapse',
          icon: icons.IconChartAreaLine,
          role: [2, 4],
          subChild: [
            {
              id: 'pnl-dashboard',
              title: 'Dashboard pnl sub child',
              type: 'item',
              url: '/pnl-dashboard',
              icon: icons.IconDashboard,
              breadcrumbs: false,
              role: [2, 4]
            },
            {
              id: 'pnl-by-item',
              title: 'PnL by Item',
              type: 'item',
              url: '/pnl-item',
              icon: icons.IconBusinessplan,
              breadcrumbs: false,
              role: [2, 4]
            }
          ]
        }
      ]
    }
  }
];
export default sideMenus;
