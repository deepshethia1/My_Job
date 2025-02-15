// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const externalMenu = {
  id: 'menu',
  type: 'group',
  children: [
    {
      id: 'jobs',
      title: 'Jobs List',
      type: 'item',
      url: '/jobs',
      breadcrumbs: false,
      role: [3]
    },
    {
      id: 'list-new-job',
      title: 'List New Job',
      type: 'item',
      url: '/list-new-job',
      breadcrumbs: false,
      role: [2]
    },
    {
      id: 'job-listing',
      title: 'View Listing',
      type: 'item',
      url: '/job-listing',
      breadcrumbs: false,
      role: [2]
    },
  ]
};

export default externalMenu;
