import React, { useState } from 'react';
import { Box, ButtonGroup, Button, IconButton } from '@mui/material';
import { Settings, Person } from '@mui/icons-material'; // Added Person icon
import Popup from './popup'; 
import { Typography } from '@mui/material';

const Filterbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true); 
    };

    const closePopup = () => {
        setShowPopup(false); 
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                backgroundColor: "white",
                width: "100%",
                height: "60px",
                padding: "0 16px",
                position: "relative",
            }}
        >
            {/* Modified title section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Person sx={{ color: '#283356' }} />
                <Typography variant="h5">Senior Manager</Typography>
            </Box>

            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    sx={{ backgroundColor: "white" }}
                >
                    <Button
                        sx={{
                            backgroundColor: "white", 
                            color: "#283356", 
                            '&:hover': {
                                backgroundColor: "#1976D2", 
                                color: "white",
                            },
                            '&:active, &:focus, &.Mui-focused': {
                                backgroundColor: "#1976D2", 
                                color: "white",
                            }
                        }}
                    >
                        Action
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: "white", 
                            color: "#283356", 
                            '&:hover': {
                                backgroundColor: "#1976D2", 
                                color: "white",
                            },
                            '&:active, &:focus, &.Mui-focused': {
                                backgroundColor: "#1976D2", 
                                color: "white",
                            }
                        }}
                    >
                        Label
                    </Button>
                    // In Filterbar.js, add this right before the popup component
{showPopup && (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: 9
    }}
  />
)}
                    <Button
                        sx={{
                            backgroundColor: "white", 
                            color: "#283356", 
                            '&:hover': {
                                backgroundColor: "#1976D2", 
                                color: "white",
                            },
                            '&:active, &:focus, &.Mui-focused': {
                                backgroundColor: "#1976D2", 
                                color: "white",
                            }
                        }}
                        onClick={openPopup} 
                    >
                        Edit
                    </Button>
                </ButtonGroup>

                <IconButton
                    sx={{
                        color: "grey",
                        borderRadius: "50%",
                        padding: "8px",
                        marginLeft: "16px", 
                    }}
                >
                    <Settings />
                </IconButton>
            </Box>

            {showPopup && <Popup closePopup={closePopup} />}
        </Box>
    );
};

export default Filterbar;