// InputProps={{
//   endAdornment: (
//     <InputAdornment position="end">
//       <IconButton
//         onClick={() => handleBackspace('email1')}
//         edge="end"
//         sx={{ 
//           color: 'red',
//           bgcolor: 'white',
          
//           '&:hover': { bgcolor: 'white' }
//         }}
//       >
//         <BackspaceIcon />
//       </IconButton>
//     </InputAdornment>
//   ),
// }}

import { InputAdornment, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BackspaceIcon from '@mui/icons-material/Backspace';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import React, { useState } from 'react';
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
  Paper
} from '@mui/material';


const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const handleBackspace = (field) => {
  // setValues(prev => ({
  //   ...prev,
  //   [field]: prev[field].slice(0, -1)
  // }));
};
const Popup = ({ closePopup }) => {
  const [state, setState] = useState('Alabama');
  const [fieldValue, setFieldValue] = useState("Value"); // State for field value
  const [phoneValue, setPhoneValue] = useState("414 141 414"); // State for phone value

  const handleSaveValue = (setter) => {
    // This function can be used to save the value if needed
    setter((prev) => prev); // Placeholder for saving logic
  };
  const [formValues, setFormValues] = useState({
    email: 'xyz@abcmail.com',
    phone: '987654321',
    zipcode: '534768',
    bio:'I am an employee of abc company and i am a full time employee. I am good at ...',
    cardNumber: '4123 **** **** ****',
    cardHolder: 'John Doe',
    expiry: '06/28',
    cvc: '5252'
  });
  
  // Handler for text field changes
  const handleTextChange = (field, value) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handler for clearing individual fields
  const handleClearValue = (field) => {
    setFormValues(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1300,
        p: 2
      }}
    >
      <Paper
        elevation={24}
        sx={{
          width: '100%',
          maxWidth: '1000px',
          p: 3
        }}
      >
        {/* Section 1 */}
        <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Edit</Typography>
          
          <Typography variant="h6" sx={{ mb: 2 }}>Section heading</Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email*"
                //defaultValue="Value"
                size="small"
                fullWidth
                value={formValues.email}
                onChange={(e) => handleTextChange('email', )}
                //focused={true}}
                 color="rgba(25, 118, 210, 0.12)"
                 sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#1976d2', // blue color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2', // blue color when focused
                    },
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
          label="Phone*"
          //focused={true}}
          size='small'
          fullWidth
          
          color="rgba(25, 118, 210, 0.12)"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#1976d2', // blue color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976d2', // blue color when focused
              },
            }
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
                  value={state}
                  //focused={true}}
                  label="State*"
                  
                  onChange={(e) => setState(e.target.value)}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>{state}</MenuItem>
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
                value={formValues.zipcode}
                onChange={(e) => handleTextChange('zipcode', )}
                  color="rgba(25, 118, 210, 0.12)"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#1976d2', // blue color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // blue color when focused
                      },
                    }
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
              value={formValues.bio}
                onChange={(e) => handleTextChange('bio', )}
                  color="rgba(25, 118, 210, 0.12)"
              multiline
              rows={4}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: '#1976d2', // blue color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2', // blue color when focused
                  },
                }
              }}
            />
          </Box>
        </Box>

        {/* Section 2 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Typography</Typography>
          
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Card number*"
              //focused={true}}
              defaultValue="4242 ** ** **"
              size="small"
              fullWidth
              value={formValues.cardNumber}
                onChange={(e) => handleTextChange('cardNumber', )}
                  color="rgba(25, 118, 210, 0.12)"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#1976d2', // blue color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // blue color when focused
                      },
                    }
                  }}
              InputProps={{
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
              //focused={true}}
              defaultValue="John Doe"
              size="small"
              fullWidth
              value={formValues.cardHolder}
                onChange={(e) => handleTextChange('cardHolder', )}
                  color="rgba(25, 118, 210, 0.12)"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#1976d2', // blue color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // blue color when focused
                      },
                    }
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
                value={formValues.expiry}
                onChange={(e) => handleTextChange('expiry', )}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#1976d2', // blue color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2', // blue color when focused
                    },
                  }
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
                value={formValues.cvc}
                onChange={(e) => handleTextChange('cvc', )}
                  color="rgba(25, 118, 210, 0.12)"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#1976d2', // blue color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // blue color when focused
                      },
                    }
                  }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            onClick={closePopup}
            variant="outlined"
            color="inherit"
            sx={{
              textTransform: 'none',
              borderColor: 'grey.300'
            }}
          >
            CANCEL
          </Button>
          <Button
          onClick={closePopup}
            type="submit"
            variant="contained"
            sx={{ 
              textTransform: 'none',
              bgcolor: '#1976d2'
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