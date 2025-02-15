// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconClipboard,
  IconDashboard,
  IconBusinessplan,
  IconChartAreaLine,
  IconCategory2,
  IconTags,
  IconHierarchy2,
  IconListDetails
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconTypography,
  IconPalette,
  IconClipboard,
  IconShadow,
  IconWindmill,
  IconBusinessplan,
  IconChartAreaLine,
  IconCategory2,
  IconTags,
  IconHierarchy2,
  IconListDetails
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const pnl = {
  id: 'pnl',
  title: 'PnL',
  type: 'group',
  children: [
    {
      id: 'pnl',
      title: 'PnL',
      type: 'collapse',
      icon: icons.IconChartAreaLine,
      role: [3],
      children: [
        {
          id: 'pnl-dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/pnl-dashboard',
          icon: icons.IconDashboard,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'pnl-item',
          title: 'PnL by Item',
          type: 'item',
          url: '/pnl-item',
          icon: icons.IconBusinessplan,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'pnl-by-category',
          title: 'PnL by Category',
          type: 'item',
          url: '/pnl-by-category',
          icon: icons.IconCategory2,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'group-by-pnl',
          title: 'PnL by Group',
          type: 'item',
          url: '/group-by-pnl',
          icon: icons.IconHierarchy2,
          breadcrumbs: false,
          role: [3]
        },
        {
          id: 'parent-sku',
          title: 'PnL by Parent',
          type: 'item',
          url: '/parent-sku',
          icon: icons.IconListDetails,
          breadcrumbs: false,
          role: [3]
        }
      ]
    }
  ]
};

export default pnl;
