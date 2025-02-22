import React, { useState } from "react";
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
        color: "initial", // Resets text color to browser default (usually black)
        fontStyle: "initial", // Resets font style to normal
        backgroundColor: "initial",
        backgroundColor: "white",
        height: "auto",
        minHeight: "52px",
        width: `calc(100% - 20px)`,
        position: "relative",
        marginLeft: `calc(2px + 4px)`,
        marginRight: "20px",
        padding: "16px 24px 16px 24px",
      }}
    >
      {/* Profile Image with Editable Overlay */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
          onClick={() => document.getElementById("imageUpload").click()}
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
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
            }}
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
          sx={{
            border: "1px solid blue",
            
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

        {/* Settings Icon */}
        <IconButton
          sx={{
            color: "grey",
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          <Settings />
        </IconButton>
      </Grid>

      {showPopup && <Popup closePopup={closePopup} />}
    </Box>
  );
};

export default Filterbar;
