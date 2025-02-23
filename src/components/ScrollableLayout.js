// components/ScrollableLayout.js
import React from 'react';
import { Box } from '@mui/material';

const ScrollableLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        '&::-webkit-scrollbar': {
          display: 'none' 
        },
        '-ms-overflow-style': 'none',
        'scrollbarWidth': 'none', 

        '& > *': {
          minWidth: 'fit-content',
          width: '100%'
        }
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollableLayout;