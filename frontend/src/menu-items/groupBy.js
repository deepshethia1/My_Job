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
  IconClick,
  IconTags
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
  IconClick,

  IconTags
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const groupBy = {
  id: 'menu',
  title: 'Items',
  type: 'group',
  children: [
    {
      id: 'cogs-list',
      title: 'CoGS',
      type: 'item',
      url: '/cogs-list',
      icon: icons.IconClipboard,
      breadcrumbs: false,
      role: [3]
    },
    {
      id: 'pnl-tags',
      title: 'Item Tags',
      type: 'item',
      url: '/pnl-tags',
      icon: icons.IconTags,
      breadcrumbs: false,
      role: [3]
    }
  ]
};

export default groupBy;
