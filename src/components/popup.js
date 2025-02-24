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
  const formContext = useFormState();
    console.log('Form Context:', formContext);
    
    const { formState, updateField,resetform } = formContext;
    console.log('Form State:', formState.name);
    
  const [state, setState] = useState("Alabama");
  const [fieldValue, setFieldValue] = useState("Value"); // State for field value
  const [phoneValue, setPhoneValue] = useState("414 141 414"); // State for phone value

  
  
console.log(formState)
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
                  endAdornment: (
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
          <Typography variant="h6" sx={{ mb: 2 }}>
            Edit
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Section heading
          </Typography>

          <Grid container spacing={2}>
            {/* <Grid item xs={12} md={6}>
              <TextField
                label="Name*"
                //defaultValue="Value"
                size="small"
                fullWidth
                value={formState[namefield]}
                onChange={handleTextChange(namefield)}
                //focused={true}}
                color="rgba(25, 118, 210, 0.12)"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#1976d2", // blue color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1976d2", // blue color when focused
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
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
             */}
             {renderTextField('name', "Name*")}
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone*"
                //focused={true}}
                size="small"
                fullWidth
                value={formState.phone}
                onChange={handleTextChange("phone")}
                color="rgba(25, 118, 210, 0.12)"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#1976d2", // blue color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1976d2", // blue color when focused
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
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
          </Grid>

          <Grid container spacing={2} sx={{ mt: 0 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="state-label">State*</InputLabel>

                <Select
                  labelId="state-label"
                  value={formState.state}
                  //focused={true}}
                  label="State*"
                  onChange={(e)=>{handleTextChange("state"); updateField("state",e.target.value); console.log(formState.state)}}
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
                defaultValue=""
                //focused={true}}
                size="small"
                fullWidth
                value={formState.zipcode}
                onChange={handleTextChange("zipcode")}
                color="rgba(25, 118, 210, 0.12)"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#1976d2", // blue color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1976d2", // blue color when focused
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
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
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       <IconButton
                //         //onClick={() => handleSaveValue('zipcode')}
                //         edge="end"
                //         sx={{ color: 'green' }}
                //       >
                //         <CheckCircleIcon />
                //       </IconButton>
                //       <IconButton
                //         //onClick={() => handleClearValue('zipcode')}
                //         edge="end"
                //         sx={{ color: 'red' }}
                //       >
                //         <DeleteIcon />
                //       </IconButton>
                //     </InputAdornment>
                //   ),
                // }}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 2 }}>
            <TextField
              label="Bio*"
              ////focused={true}}
              defaultValue="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              size="small"
              fullWidth
              value={formState.bio}
              onChange={handleTextChange("bio")}
              color="rgba(25, 118, 210, 0.12)"
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#1976d2", // blue color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2", // blue color when focused
                  },
                },
              }}
              InputProps={{
                endAdornment: (
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
          </Box>
        </Box>

        {/* Section 2 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Typography
          </Typography>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Card number*"
              //focused={true}}
              defaultValue="4242 ** ** **"
              size="small"
              fullWidth
              value={formState.cardNumber}
              onChange={handleTextChange("cardNumber")}
              color="rgba(25, 118, 210, 0.12)"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#1976d2", // blue color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2", // blue color when focused
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
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
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Cardholder name*"
              //focused={true}}
              defaultValue="John Doe"
              size="small"
              fullWidth
              value={formState.cardHolder}
              onChange={handleTextChange("cardHolder")}
              color="rgba(25, 118, 210, 0.12)"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#1976d2", // blue color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976d2", // blue color when focused
                  },
                },
              }}
              InputProps={{
                endAdornment: (
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
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Expiration date*"
                //focused={true}}
                defaultValue="MM / YY"
                size="small"
                fullWidth
                value={formState.expiry}
                onChange={handleTextChange("expiry")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#1976d2", // blue color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1976d2", // blue color when focused
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
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
                color="rgba(25, 118, 210, 0.12)"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="CVC/CVV2*"
                //focused={true}}
                defaultValue="*"
                size="small"
                fullWidth
                value={formState.cvc}
                onChange={handleTextChange("cvc")}
                color="rgba(25, 118, 210, 0.12)"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#1976d2", // blue color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1976d2", // blue color when focused
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
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
          </Grid>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            onClick={()=>{closePopup(); 
              const savedData = JSON.parse(localStorage.getItem("formState"));
    
              if (savedData) {
               Object.entries(savedData).forEach(([field, value]) => {
                    updateField(field, value);
                  });
                
              }
            }}
            variant="outlined"
            color="inherit"
            sx={{
              textTransform: "none",
              borderColor: "grey.300",
            }}
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
            sx={{
              textTransform: "none",
              bgcolor: "#1976d2",
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Popup;
