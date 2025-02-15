import { useSelector } from 'react-redux';

import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider, Snackbar, Alert } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useAppSelector, useAppDispatch } from 'store';

import { notificationClear } from './store/slices/notificationSlice';
import { useEffect, useRef } from 'react';
import { setUserData } from 'store/slices/authSlice';
import { useNavigate } from 'react-router';

// ==============================|| APP ||============================== //

const App = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const notificationInfo = useAppSelector((state) => state.notification);
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const inactivityInterval = 55 * 60 * 1000;
  const initialDelay = 5 * 60 * 1000;
  const userActivityTimeout = useRef(null);
  const localUser = localStorage.getItem('user_data');

  const handleLogout = async () => {
    appDispatch(setUserData(null));

    localStorage.removeItem('user_data');
    localStorage.removeItem('sortActions');
    localStorage.removeItem('visibleColumns');
    localStorage.removeItem('selectedDates');
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      } catch (error) {
        console.error('Error clearing cache:', error);
      }
    }
    navigate('/login');
  };

  useEffect(() => {
    const handleInactivity = () => {
      clearInterval(userActivityTimeout.current);

      userActivityTimeout.current = setTimeout(() => {
        if (localUser) {
          userActivityTimeout.current = setInterval(() => {
            handleLogout();
          }, inactivityInterval);
        }
      }, initialDelay);
    };

    window.addEventListener('mousemove', handleInactivity);
    window.addEventListener('keydown', handleInactivity);

    // Clean up the interval on component unmount
    return () => {
      clearTimeout(userActivityTimeout.current);
      clearInterval(userActivityTimeout.current);
      window.removeEventListener('mousemove', handleInactivity);
      window.removeEventListener('keydown', handleInactivity);
    };
    // }
  }, [handleLogout, initialDelay, inactivityInterval]);

  useEffect(() => {
    const container = document.body;
    container.style.zoom = '100%';
    return () => {
      container.style.zoom = '80%';
    };
  }, []);

  const clearNotification = () => {
    appDispatch(notificationClear());
  };

  const openNotification = () => {
    return notificationInfo.message ? true : false;
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        {notificationInfo?.message && (
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            className="notification-snackbar"
            open={openNotification()}
            onClose={clearNotification}
            autoHideDuration={notificationInfo.status ? 2500 : 10000}
          >
            <Alert
              className="notification-alert"
              onClose={clearNotification}
              severity={notificationInfo.status ? 'success' : 'error'}
              sx={{
                width: '100%',
                color: theme.palette.background.default,
                bgcolor: notificationInfo.status ? theme.palette.success.main : theme.palette.error.main
              }}
              variant="filled"
            >
              {notificationInfo.message}
            </Alert>
          </Snackbar>
        )}
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
