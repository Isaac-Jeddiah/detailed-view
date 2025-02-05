import BackspaceIcon from '@mui/icons-material/Backspace';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import React, { useState } from 'react';
import { Box, Button, Typography, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Popup = ({ closePopup }) => {
  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);
  const [values, setValues] = useState({
    email1: 'Value',
    email2: 'Small',
    state: 'Alabama',
    zipcode: '567032',
    bio: 'test test',
    cardNumber1: '4242 **** **** ****',
    cardNumber2: '4242 **** **** ****',
    expDate: 'MM/YY',
    cvc: '567032'
  });

  const handleBackspace = (field) => {
    setValues(prev => ({
      ...prev,
      [field]: prev[field].slice(0, -1)
    }));
  };
  return (
    <Box
      sx={{
        position: 'fixed', // Fix the position on screen
        top: '15vh', // Reduce the margin from the top to make it larger
        left: '20vw', // Reduce the margin from the left to make it larger
        width: '70vw', // Increase width to 70% of the viewport
        height: '70vh', // Increase height to 70% of the viewport
        bgcolor: 'background.paper',
        border: '2px solid white',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    > 
       <Box sx={{ backgroundColor: "white", width: "96%", height: "460px", pb: 20, p: 3 }}>
       <Typography 
    variant="body1" 
    sx={{ 
      color: '#666',
      mb: 1  // Margin bottom to create space between "Edit" and "Section Heading"
    }}
  >
    Edit
  </Typography>
  <Typography 
    variant="h5" 
    sx={{ 
      mb: 3  // Margin bottom for space before the form fields
    }}
  >
    Section Heading
  </Typography>
            <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Email*"
              id="outlined-size-small"
              defaultValue="Value"
              size="small"
              fullWidth
              sx={{ width: "55ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              //onBlur={() => setEmailEdit(true)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Email*"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              //onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="State*"
              id="outlined-size-small"
              defaultValue="Alabama"
              size="small"
              fullWidth
              sx={{ width: "55ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              //{...setEmailEdit(!emailEdit)}
             // onBlur={() => setEmailEdit(true)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Zipcode*"
              id="outlined-size-small"
              defaultValue="567032"
              size="small"
              fullWidth
              sx={{ width: "60ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
             // {...setEmailEdit(!emailEdit)}
             // onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Bio*"
              id="outlined-size-small"
              defaultValue="test test"
              size="normal"
              fullWidth
              sx={{ width: "119ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
             // {...setEmailEdit(!emailEdit)}
             // onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mb: 2,paddingRight:2, marginLeft: 0,mt:2}}>Typography</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Cardnumber*"
              id="outlined-size-small"
              defaultValue="4242 **** **** ****"
              size="small"
              fullWidth
              sx={{ width: "119ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
             // {...setEmailEdit(!emailEdit)}
             // onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>

        
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Expiration date*"
              id="outlined-size-small"
              defaultValue="MM/YY"
              size="small"
              fullWidth
              sx={{ width: "55ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
             // {...setEmailEdit(!emailEdit)}
             // onBlur={() => setEmailEdit(true)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="CVC/CVC2*"
              id="outlined-size-small"
              defaultValue="567032"
              size="small"
              fullWidth
              sx={{ width: "60ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleBackspace('email1')}
                      edge="end"
                      sx={{ 
                        color: 'red',
                        bgcolor: 'white',
                        
                        '&:hover': { bgcolor: 'white' }
                      }}
                    >
                      <BackspaceIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            //  {...setEmailEdit(!emailEdit)}
              //onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
        <Button
            onClick={closePopup}
            sx={{
              color: "black",
              backgroundColor: "#ffffff00",
              border: "1px solid lightgrey",
              textTransform: 'none',
              padding: '6px 16px',
            }}
          >
            CANCEL
          </Button>

                        <Button
                        onClick={closePopup}
            type="submit"
            variant="contained"
            sx={{ padding: '6px 16px' }}
          >
            SUBMIT
          </Button>
                    </Box>
      </Box>
      
       </Box>
  );
};

export default Popup;





