import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const cardStyle = {
  minWidth: 300,
  padding: '20px',
  background: '#F8F8F8', // Light gray background
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  textAlign: 'center'
};

const iconStyle = {
  fontSize: '100px',
  marginBottom: '10px',
  color: '#009688' // Teal color for the icon
};

const textStyle = {
  marginBottom: '10px',
  color: '#333' // Dark gray text color
};

const ComingSoonPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        background: '#E1F5FE', // Light blue background
        color: '#333' // Dark gray text color
      }}
    >
      <Card style={cardStyle}>
        <CardContent>
          <RocketLaunchIcon style={iconStyle} /> {/* Replace this with your own space-themed icon */}
          <Typography variant="h4" component="h2" style={textStyle}>
            Coming Soon!
          </Typography>
          <Typography variant="body1" component="p" style={textStyle}>
            We are preparing for an intergalactic launch.
          </Typography>
          <Typography variant="body2" component="p" style={textStyle}>
            Stay tuned for the cosmic adventure of a lifetime!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoonPage;
