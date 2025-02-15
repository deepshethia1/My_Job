// assets
import { IconFileText } from '@tabler/icons';

const groupBy = {
  id: 'menu',
  title: 'Jobs',
  type: 'group',
  children: [
    {
      id: 'Jobs',
      title: 'Keyword Tracking',
      type: 'item',
      url: '/keyword-tracking',
      icon: IconFileText,
      breadcrumbs: false,
      role: [3],
      display: false
    }
  ]
};

export default groupBy;
