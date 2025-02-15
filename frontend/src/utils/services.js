export const getAuthUser = () => (localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')) : null);
