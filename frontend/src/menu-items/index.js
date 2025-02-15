import { useState, useEffect } from 'react';
// import ppc from './ppc';
// import sales from './sales';
// import pnl from './pnl';
import externalMenu from './externalMenu';
// import groupBy from './groupBy';
// import keywordTrackingMenu from './keywordTrackingMenu';

const getMenuItems = () => {
  const menuItems = {
    items: [externalMenu]
  };
  // if (userType?.role == 2) {
  // Filter out Pages, Other, and Utilities groups that should not be shown to usertype 1
  // menuItems.items = menuItems.items.filter((item) => item?.title !== 'Jobs');
  // }
  // else {
  //   menuItems.items = menuItems.items.filter((item) => item?.title !== 'External');
  // }

  return menuItems;
};

export default function useMenuItems() {
  const [menuItems, setMenuItems] = useState(getMenuItems());

  useEffect(() => {
    function handleStorageChange() {
      // Update menuItems when userType changes in localStorage
      setMenuItems(getMenuItems());
    }

    // Listen for changes in localStorage
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return menuItems;
}
