import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project imports
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import SearchSection from './SearchSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const userData = useSelector((state) => state.authorization.userData);
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >

      </Box>
      {/* header search */}
      {userData?.role && userData?.role ==3 && location?.pathname == '/jobs' ? <SearchSection /> : ''}
      <Box sx={{ flexGrow: 0.1 }} />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ flexGrow: 0.01 }} />
      {(userData?.data?.user_type && userData?.data?.user_type !== 1 && location?.pathname == '/') ||
      (userData?.data?.user_type && userData?.data?.user_type !== 1 && location?.pathname == '/dashboard') ||
      location?.pathname == '/sales-dashboard' ||
      location?.pathname == '/sales-item' ||
      location?.pathname == '/pnl-item' ||
      location?.pathname == '/ppc-item' ||
      location?.pathname == '/ppc-category' ||
      location?.pathname == '/pnl-dashboard' ||
      location?.pathname == '/ppc-by-parent' ||
      location?.pathname == '/sales-by-parent' ||
      location?.pathname == '/sales-category' ? (
        <NotificationSection />
      ) : (
        ''
      )}
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
