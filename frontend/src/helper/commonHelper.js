// function for show menu selected
export const menuItems = {
  pnl: ['/pnl-dashboard', '/pnl-item', '/pnl-by-category', '/parent-sku', '/group-by-pnl'],
  // ppc: ['/dashboard', '/ppc-item', '/ppc-category', '/group-by-ppc', '/ppc-by-parent'],
  sales: ['/sales-dashboard', '/sales-item', '/sales-category', '/group-by-sales', '/sales-by-parent'],
  items: ['/cogs-list', '/pnl-tags'],
  keywordtrackingmenu: ['/keyword-tracking']
};

export const parentMenuByChild = (child) => {
  for (const category in menuItems) {
    if (menuItems[category].includes(child)) {
      return category;
    }
  }
  return null;
};

