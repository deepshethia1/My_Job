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
  IconCategory2,
  IconHierarchy2,
  IconListDetails
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
  IconCategory2,
  IconHierarchy2,
  IconListDetails
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const ppc = {
  id: 'menu',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconApps,
      breadcrumbs: false,
      role: [2, 3]
    },
    // {
    //   id: 'seller-order',
    //   title: 'Seller Order',
    //   type: 'item',
    //   url: '/seller-order',
    //   icon: icons.IconShoppingCart,
    //   breadcrumbs: false,
    //   role: [3]
    // },
    // {
    //   id: 'admin-users',
    //   title: 'Admin Users',
    //   type: 'item',
    //   url: '/admin-users',
    //   icon: icons.IconUsers,
    //   breadcrumbs: false,
    //   role: [3]
    // }
  ]
};

// const ppc = {
//   id: 'ppc',
//   title: 'PPC',
//   type: 'group',
//   children: [
//     {
//       id: 'ppc',
//       title: 'PPC',
//       type: 'collapse',
//       icon: icons.IconClick,
//       role: [3],
//       children: [
//         {
//           id: 'dashboard',
//           title: 'Dashboard',
//           type: 'item',
//           url: '/dashboard',
//           icon: icons.IconDashboard,
//           breadcrumbs: false,
//           role: [3]
//         },
       
//       ]
//     }
//   ]
// };

export default ppc;
