import { useState, useRef, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Badge,
  Box,
  ButtonBase,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';

// assets
import { IconHourglassLow, IconCalendarTime } from '@tabler/icons';
import moment from 'moment';
import { useAppSelector } from 'store';

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const [dayLeft, setDayLeft] = useState(null);

  const [open, setOpen] = useState(false);

  const setUserData = useAppSelector((state) => state.authorization);

  const planDetails = setUserData?.userDetails?.data?.stripeSubscriptions;

  const unixPeriod = moment.unix(planDetails?.trial_end);

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    const today = moment();
    const diffrenceDays = unixPeriod.diff(today, 'days');
    setDayLeft(diffrenceDays);
  }, [unixPeriod]);

  return (
    <>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          [theme.breakpoints.down('md')]: {
            mr: 2
          }
        }}
      >
        <Badge badgeContent={dayLeft > 0 ? dayLeft : ''} color={dayLeft > 0 ? 'primary' : 'error'}>
          <ButtonBase sx={{ borderRadius: '12px' }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                background: theme.palette.secondary.light,
                color: theme.palette.secondary.dark,
                '&[aria-controls="menu-list-grow"],&:hover': {
                  background: theme.palette.secondary.dark,
                  color: theme.palette.secondary.light
                }
              }}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
            >
              {dayLeft > 0 ? <IconCalendarTime stroke={1.5} size="1.3rem" /> : <IconHourglassLow stroke={1.5} size="1.3rem" />}
            </Avatar>
          </ButtonBase>
        </Badge>
      </Box>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 20]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Grid container direction="column" spacing={2} sx={{ mb: '10px' }}>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ pt: 2, px: 2 }}>
                        <Grid item>
                          {dayLeft > 0 ? (
                            <Stack direction="row" spacing={2}>
                              <Chip
                                size="small"
                                label={dayLeft}
                                sx={{
                                  color: theme.palette.background.default,
                                  bgcolor: theme.palette.warning.dark,
                                  mr: '-10px'
                                }}
                              />
                              <Typography variant="subtitle1"> Days remaining of your subscription trial ends!</Typography>
                            </Stack>
                          ) : isNaN(dayLeft) ? (
                            <Stack direction="row" spacing={2}>
                              <Typography variant="subtitle1">Please Select Your Plan! </Typography>
                            </Stack>
                          ) : (
                            <Stack direction="row" spacing={2}>
                              <Typography variant="subtitle1">Your trial period has expired! </Typography>
                            </Stack>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider />
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;
