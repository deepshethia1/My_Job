import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery, Grid, Alert, AlertTitle, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import navigation from 'menu-items';
import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'store';

// assets
import { IconChevronRight } from '@tabler/icons';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const location = useLocation();
  const advertiserPagePaths = ['/', '/dashboard', '/ppc-item', '/ppc-category'];
  const [open, setOpen] = useState(false);
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const { selectedStoreIds } = useAppSelector((state) => state.dashboardSlice);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };
  const navigate = useNavigate();

  const redirectToStorePage = () => {
    navigate('/account-settings');
  };

  useEffect(() => {
    setOpen(false);
    if (selectedStoreIds && selectedStoreIds?.length) {
      selectedStoreIds?.map((val) => {
        if (!val?.userSetting?.advertise_id?.length) {
          setOpen(true);
        }
      });
    }
  }, [selectedStoreIds]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar style={{ height: 86 }}>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {advertiserPagePaths?.includes(location?.pathname) && open && (
          <Box mb={3}>
            <Grid container spacing="2">
              <Grid item xs={12} className="advertise-id-warning">
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  severity="warning"
                >
                  <AlertTitle>Warning</AlertTitle>
                  Looks like either you have entered wrong advertisement id or not provided in store management. Please{' '}
                  <strong>
                    <a href="#" onClick={() => redirectToStorePage()}>
                      Click here{' '}
                    </a>
                  </strong>
                  to check it
                </Alert>
              </Grid>
            </Grid>
          </Box>
        )}
        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
        <Outlet />
      </Main>
      {/* <Customization /> */}
    </Box>
  );
};

export default MainLayout;
