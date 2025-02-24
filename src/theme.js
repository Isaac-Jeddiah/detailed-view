// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSizes: {
      headingSize: '20px',//Adjust to variant h5
      subheadingSize: '18px',//adjust to variant h6
      contentSize: '14px',//Adjust to variant normal
    },
    spaces:{
         fieldSpacing : "16px",// Adjust field spacing here 
  dividerSpacing : "16px", // Adjust heading-divider spacing here
  dividerabovespacing : "8px", //Adjust divider-below spacing her
  Overviewbottomspacing :"8px",
    },
    fontFamily: 'Roboto',
  },
});

export default theme;
