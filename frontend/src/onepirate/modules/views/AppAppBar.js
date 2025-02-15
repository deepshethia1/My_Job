import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function AppAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {['Jobs', 'Company', 'Career'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={`/${text.toLowerCase()}`} underline="none" sx={{ color: 'inherit' }}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="login" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button href="/login" variant="contained" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', backgroundColor: '#3f51b5' }}>
              Login
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem key="signup" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button href="/register" variant="contained" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', backgroundColor: '#3f51b5' }}>
              Signup
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem key="postjob" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button href="/login" variant="outlined" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', color: '#3f51b5', borderColor: '#3f51b5' }}>
              Post a Job
            </Button>
          </ListItemButton>
        </ListItem>
        <ListItem key="findjob" disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Button href="/login" variant="outlined" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', color: '#3f51b5', borderColor: '#3f51b5' }}>
              Find a Job
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between', paddingX: 2 }}>

        
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/home" underline="none" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3f51b5', mr: 2 }}>
              Myjob
            </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              <Link href="/jobs" underline="none" sx={{ color: 'inherit', mr: 2 }}>  
                Jobs
              </Link>
              <Link href="/company" underline="none" sx={{ color: 'inherit', mr: 2 }}>
                Company
              </Link>
              <Link href="/career" underline="none" sx={{ color: 'inherit' }}>
                Career
              </Link>
            </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button href="/login" variant="contained" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', backgroundColor: '#3f51b5' }}>
                Login
              </Button>
              <Button href="/register" variant="contained" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', backgroundColor: '#3f51b5' }}>
                Signup
              </Button>
              <Button href="/login" variant="outlined" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', color: '#3f51b5', borderColor: '#3f51b5' }}>
                Post a Job
              </Button>
              <Button href="/login" variant="outlined" sx={{ borderRadius: '5px', textTransform: 'none', fontSize: '0.8rem', color: '#3f51b5', borderColor: '#3f51b5' }}>
                Find a Job
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}

export default AppAppBar;
