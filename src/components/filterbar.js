import React, { useState } from 'react';
import { Box, ButtonGroup, Button, IconButton, Typography, Avatar } from '@mui/material';
import { Settings, Edit } from '@mui/icons-material'; // Removed Person icon as it's not used
import Popup from './popup';

const Filterbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                backgroundColor: "white",
                height: "auto",
                minHeight: "52px",
                width: `calc(100% - 20px)`, 
                position: "relative",
                marginLeft: `calc(2px + 4px)`,
                marginRight: "10px",
                padding: "4px"
            }}
        >
            {/* Profile Image with Editable Overlay */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box 
                    sx={{
                        position: "relative",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        cursor: "pointer",
                        "&:hover .edit-overlay": { opacity: 1 },
                    }}
                    onClick={() => document.getElementById('imageUpload').click()} // Clicking on Avatar opens file input
                >
                    <Avatar 
                        src={profileImage || "https://via.placeholder.com/48"}
                        sx={{ width: 48, height: 48 }} 
                    />
                      <Box 
        className="edit-overlay"
        sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,  // Initially hidden
            transition: "opacity 0.3s ease-in-out",
        }}
        onClick={() => document.getElementById('imageUpload').click()} // Clicking on overlay also opens file input
    >
        <Edit sx={{ color: "white", fontSize: 24 }} />
    </Box>
                </Box>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                />
                <Typography variant="h5">Senior Manager</Typography>
            </Box>

            {/* Button Group and Settings Icon */}
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
                            '&:hover': { backgroundColor: "#1976D2", color: "white" }
                        }}
                    >
                        Action
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: "white",
                            color: "#283356",
                            '&:hover': { backgroundColor: "#1976D2", color: "white" }
                        }}
                    >
                        Label
                    </Button>

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
                            '&:hover': { backgroundColor: "#1976D2", color: "white" }
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
                        marginLeft: "4rem"
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
