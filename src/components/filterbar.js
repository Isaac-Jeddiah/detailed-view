import React, { useState } from "react";
import { useTheme } from '@mui/material/styles'
import '../global.css';
import {
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import { Settings, Edit } from "@mui/icons-material";
import Popup from "./popup";
import './filterbar.css'
const Filterbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const theme = useTheme();
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
    <Box className="filterbar-container"
    >
      {/* Profile Image with Editable Overlay */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box className="filterbar-profileImage"
          sx={{
            "&:hover .edit-overlay": { opacity: 1 },
          }}
          onClick={() => document.getElementById("imageUpload").click()}
        >
          <Avatar
            src={profileImage || "https://via.placeholder.com/48"}
       className="filterbar-avatar"     
            sx={{ width: 48, height: 48 }}
          />
          <Box
            className="edit-overlay"
           
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
        <Typography  sx={{fontSize:theme.typography.fontSizes.headingSize}}>Senior Manager</Typography>
      </Box>

      {/* Action Label Edit & Settings Icon */}
      <Grid
        container
        alignItems="center"
        sx={{
          width: "279px",
          height: "40px",
          gap:"4px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Button Group */}
        <ButtonGroup
          variant="contained"
          className="filterbar-buttonGroup"
          sx={{
            border: "1px solid #c9c9c9",
            "& .MuiButtonGroup-grouped:not(:last-of-type)": {
              borderColor: "#c9c9c9", // Match the border color
            },
            boxShadow: "none", // Remove shadow
            "& button": {
              boxShadow: "none",
              
            },
          }}
        >
          <Button sx={{backgroundColor: "white", boxShadow: "none", // Remove shadow
            "& button": {
              boxShadow: "none",
              
            },"&:hover": {
                //backgroundColor: "#f0f0f0",
                boxShadow: "none",
              },
              color: "#283356",}}>Action</Button>
          <Button sx={{backgroundColor: "white", boxShadow: "none", // Remove shadow
            "& button": {
              boxShadow: "none",
              
            },
              color: "#283356",
              "&:hover": {
                //backgroundColor: "#f0f0f0",
                boxShadow: "none",
              },}}>Label</Button>
          <Button
          onClick={openPopup}
           sx={{backgroundColor: "#1976D2",
            color: "white",}}
          >
            Edit
          </Button>
        </ButtonGroup>
{/* 
    <ButtonGroup
      variant="contained"
      className="filterbar-buttonGroup"
    >
      <Button className="actionButton">
        Action
      </Button>
      <Button className="labelButton">
        Label
      </Button>
      <Button
        onClick={openPopup}
        className="editButton"
      >
        Edit
      </Button>
    </ButtonGroup> */}
        {/* Settings Icon */}
        <IconButton
        className="filterbar-settings"
          
        >
          <Settings />
        </IconButton>
      </Grid>

      {showPopup && <Popup closePopup={closePopup} />}
    </Box>
  );
};

export default Filterbar;
