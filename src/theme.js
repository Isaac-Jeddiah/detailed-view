// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSizes: {
      headingSize: '20px',//Adjust to variant h5
      subheadingSize: '18px',//adjust to variant h6
      contentSize: '14px',
      labelsize:'14px'//Adjust to variant normal
    },
    fontWeight:{
      headingWeight: 500, //Adjust to variant h5
      subheadingWeight: 400, //Adjust to variant h6
      contentWeight: 500, //Adjust to variant normal
    },
    color:{
      //  heading:"black",
      //  subheading:"black",
      //  content:"black",
       timelineheading:'#444444',
       value:'#181818',
       label:'#444444',
       fieldunderline:'#d2d2d2',
       border:'#747474',
       icon:'#707070',
    },
    spaces:{
         fieldSpacing : "16px",// Adjust field spacing here 
  dividerSpacing : "16px",
  dividerbelow:"16px", // Adjust heading-divider spacing here
  dividerabovespacing : "8px", //Adjust divider-below spacing her
  Overviewbottomspacing :"8px",
  topspacing : "16px",
  filterbarabove:"0px",
    },
    padding:{
      fieldpadding : "8px",// Adjust field padding here
      fieldpaddingbottom : "8px",
      fieldpaddingtop : "8px",
      normalpadding : "20px",

    },
    fontFamily: 'Roboto',
  },
});

export default theme;
