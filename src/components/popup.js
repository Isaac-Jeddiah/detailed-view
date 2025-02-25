import { InputAdornment, IconButton } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useState, useEffect } from "react";
import { useFormState } from "../context/Formcontext";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import './popup.css';
import { useTheme } from "@mui/material/styles";
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
];

const Popup = ({ closePopup }) => {
  const theme = useTheme();
  
  const formContext = useFormState();
   
    const { formState, updateField,resetform } = formContext;
    
  const [state, setState] = useState("Alabama");
  const [fieldValue, setFieldValue] = useState("Value"); // State for field value
  const [phoneValue, setPhoneValue] = useState("414 141 414"); // State for phone value

  
  
// Handler for text field changes
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formState"));
    if (savedData) {
      // Use updateMultipleFields instead of updateField for bulk updates
      // if (typeof updateMultipleFields === 'function') {
      //   updateMultipleFields(savedData);
      // } else {
        // Fallback if updateMultipleFields isn't available
        Object.entries(savedData).forEach(([field, value]) => {
          updateField(field, value);
        });
      // }
    }
  }, []);
  
  // Handle text field changes
  const handleTextChange = (field) => (event) => {
    updateField(field, event.target.value);
  };

  // Handler for clearing individual fields
  const handleClearValue = (field) => {
    updateField(field, "");
  };
  
  // Save form state to localStorage
  const handleSave = () => {
    localStorage.setItem("formState", JSON.stringify(formState));
  };
  
   const EditIconButton = ({ onClick }) => (
      <IconButton
        size="small"
        onClick={onClick}
        sx={{
          mt: "5px",
          width: 20,
          height: 20,
          borderRadius: "50%",
          position: "relative",
          p: 0, // Remove padding for a better fit
        }}
      >
        {/* Use Cloudinary Image URL */}
        <img
          src="https://res.cloudinary.com/dpnmd6o7d/image/upload/e_colorize:100,co_rgb:808080/v1740197151/draw_h2elwl.png"
          alt="Edit"
          width="15"
          height="15"
          style={{ objectFit: "contain" }} // Ensures it fits properly
        />
      </IconButton>
    );
    const renderTextField = (field, label) => {
      return (
        <Grid item xs={12} md={6}>
              <TextField
                label={label}
                //defaultValue="Value"
                size="small"
                fullWidth
                value={formState[field]}
                onChange={handleTextChange(field)}
                //focused={true}}
                color="rgba(25, 118, 210, 0.12)"
                
                InputProps={{
                  sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        position: "relative",
                        marginRight: "0px",
                        marginBottom: "5px",
                      }}
                    >
                      {" "}
                      <EditIconButton //onClick={() => {handleEdit('name'); setAllFieldsEditable(!allFieldsEditable);
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
      );
    };
  const namefield="name";
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1300,
        p: 2,
      }}
    >
      <Paper
        elevation={24}
        sx={{
          width: "100%",
          maxWidth: "1000px",
          p: 3,
        }}
      >
        {/* Section 1 */}
      
    <Box sx={{ mb: 4 }}>
        <Typography sx={{
                              fontSize:
                                theme.typography.fontSizes.subheadingSize,
                              fontWeight: "bold",
                              mb:2
                            }}>Edit</Typography>
        <Typography  sx={{
                              fontSize:
                                theme.typography.fontSizes.subheadingSize,
                              fontWeight: "bold",
                              mb:2
                            }}>Section heading</Typography>
        <Grid container spacing={2}>
            {renderTextField('name', "Name*")}
            <Grid item xs={12} md={6}>
                <TextField
                    label="Phone*"
                    size="small"
                    fullWidth
                    value={formState.phone}
                    onChange={handleTextChange("phone")}
                    color="rgba(25, 118, 210, 0.12)"
                    className="textfield"
                    InputProps={{
                      sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                       
                    }}
                />
            </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 0 }}>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small">
                    <InputLabel  fontSize={theme.typography.fontSizes.contentSize}
                  id="state-label">State*</InputLabel>
                    <Select
                        labelId="state-label"
                        value={formState.state}
                        fontSize={theme.typography.fontSizes.contentSize}
                  
                        label="State*"
                        onChange={(e) => { handleTextChange("state"); updateField("state", e.target.value); console.log(formState.state) }}
                    >
                        {states.map((state) => (
                            <MenuItem key={state} value={state}>
                                {state}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="Zipcode*"
                    size="small"
                    fullWidth
                    value={formState.zipcode}
                    onChange={handleTextChange("zipcode")}
                    color="rgba(25, 118, 210, 0.12)"
                    className="textfield"
                    InputProps={{
                      sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                       
                    }}
                />
            </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
            <TextField
                label="Bio*"
                defaultValue="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                size="small"
                fullWidth
                value={formState.bio}
                onChange={handleTextChange("bio")}
                color="rgba(25, 118, 210, 0.12)"
                multiline
                rows={4}
                className="textfield"
                InputProps={{
                  sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                    
                }}
            />
        </Box>
    </Box>
        {/* Section 2 */}
    <Box sx={{ mb: 4 }}>
        <Typography sx={{
                              fontSize:
                                theme.typography.fontSizes.subheadingSize,
                              fontWeight: "bold",
                              mb:2
                            }}>Typography</Typography>

        <Box sx={{ mb: 2 }}>
            <TextField
                label="Card number*"
                defaultValue="4242 ** ** **"
                size="small"
                fullWidth
                value={formState.cardNumber}
                onChange={handleTextChange("cardNumber")}
                color="rgba(25, 118, 210, 0.12)"
                className="textfield"
                InputProps={{
                  sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                    startAdornment: (
                        <InputAdornment position="start">
                            <CreditCardIcon color="action" />
                        </InputAdornment>
                    ),
                    
                }}
            />
        </Box>

        <Box sx={{ mb: 2 }}>
            <TextField
                label="Cardholder name*"
                defaultValue="John Doe"
                size="small"
                fullWidth
                value={formState.cardHolder}
                onChange={handleTextChange("cardHolder")}
                color="rgba(25, 118, 210, 0.12)"
                className="textfield"
                InputProps={{
                  sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                    
                }}
            />
        </Box>

        <Grid container spacing={2} >
            <Grid item xs={12} md={6}>
                <TextField
                    label="Expiration date*"
                    defaultValue="MM / YY"
                    size="small"
                    fullWidth
                    value={formState.expiry}
                    onChange={handleTextChange("expiry")}
                    className="textfield"
                    InputProps={{
                      sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                       
                    }}
                    color="rgba(25, 118, 210, 0.12)"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    label="CVC/CVV2*"
                    defaultValue="*"
                    size="small"
                    fullWidth
                    value={formState.cvc}
                    onChange={handleTextChange("cvc")}
                    color="rgba(25, 118, 210, 0.12)"
                    className="textfield"
                    InputProps={{
                      sx:{ fontSize:theme.typography.fontSizes.contentSize,
                  },
                       
                    }}
                />
            </Grid>
        </Grid>
     </Box>
        {/* Buttons */}
        <Box className="buttonContainer">
            <Button
                onClick={() => {
                    closePopup();
                    const savedData = JSON.parse(localStorage.getItem("formState"));
                    if (savedData) {
                        Object.entries(savedData).forEach(([field, value]) => {
                            updateField(field, value);
                        });
                    }
                }}
                variant="outlined"
                className="cancelButton"
            >
                CANCEL
            </Button>
            <Button
                onClick={() => {
                    handleSave();
                    closePopup();
                }}
                type="submit"
                variant="contained"
                className="submitButton"
            >
                SUBMIT
            </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Popup;
