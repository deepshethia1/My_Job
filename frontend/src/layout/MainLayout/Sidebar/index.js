import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setUserData } from 'store/slices/authSlice';

// Material-UI
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Divider,
    Drawer,
    List,
    ListItemButton
} from '@mui/material';

// Third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// Icons
import { IconLogout, IconSettings, IconMenu2 } from '@tabler/icons';

// Project imports
import { useAppDispatch } from 'store';
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import './navStyle.css'


const Navbar = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const userData = useSelector((state) => state.authorization.userData);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [greeting, setGreeting] = useState('');
    const [uploadedPhoto, setUploadedPhoto] = useState();
    const [anchorEl, setAnchorEl] = useState(null); // For the user menu
    const open = Boolean(anchorEl);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        if (userData?.name) {
            setGreeting(`Hi, ${userData.name} ${userData.lastName}`);
        } else if (userData?.company_name) {
            setGreeting(`Hi, ${userData.company_name}`);
        } else if (userData?.building_name) {
            setGreeting(`Hi, ${userData.building_name}`);
        }
    }, [userData]);

    useEffect(() => {
        if (location.pathname === '/account-settings') {
            setSelectedIndex(0);
        } else {
            setSelectedIndex(-1);
        }
    }, [location.pathname]);

    useEffect(() => {
        setUploadedPhoto(`${userData?.data?.profile}`);
    }, [userData]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(setUserData(null));
        localStorage.removeItem('user_data');
        navigate('/login');
        handleClose();
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar position="fixed" color="default" elevation={0}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: theme.spacing(1.5, 2), 
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LogoSection />
                    </Box>

                    
                    <Box sx={{ display: { xs: 'none', md: 'flex' , gap: 2, alignItems: 'center'} }}> {/* Modified this Box */}
                        <MenuList />
  
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'user-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar
                                alt={userData?.username}
                                src={uploadedPhoto || '/images/src/1.jpg'}
                                sx={{ width: 32, height: 32 }}
                            />
                        </IconButton>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ ...(mobileOpen && { display: 'none' }) }}
                        >
                            <IconMenu2 />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* User Menu (Popper Replacement) */}
            <Menu
                anchorEl={anchorEl}
                id="user-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem disabled>
                    <Typography variant="body2">{greeting}</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { navigate('/account-settings'); handleClose(); }}>
                    <ListItemIcon>
                        <IconSettings stroke={1.5} size="1.3rem" />
                    </ListItemIcon>
                    <ListItemText>Account Settings</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <IconLogout stroke={1.5} size="1.3rem" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </Menu>... {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    width: 250,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 250,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItemButton selected={selectedIndex === 0} onClick={() => { navigate('/account-settings'); handleDrawerToggle(); }}>
                        <ListItemIcon><IconSettings stroke={1.5} size="1.3rem" /></ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Account Info</Typography>} />
                    </ListItemButton>
                    <ListItemButton onClick={() => { handleLogout(); handleDrawerToggle(); }}>
                        <ListItemIcon><IconLogout stroke={1.5} size="1.3rem" /></ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                    </ListItemButton>
                </List>
                <Divider />
                <PerfectScrollbar>
                    <Box sx={{ px: 2 }}>
                        <MenuList />
                    </Box>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Navbar;
