import * as React from 'react';
import { useState,useEffect,useRef } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import { Accordion, AccordionDetails, AccordionSummary, Divider,Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import DataTable from './table';
import { Close } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  // ...add more states as needed
];

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}


 


export default function DetailsTable() {

  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: { value: 'name', edit: true },
    phone: { value: '12345', edit: true },
    state: { value: 'State', edit: true },
    zipcode: { value: '56', edit: true },
    bio: { value: 'I am ...', edit: false },
    cardNumber: { value: '', edit: false },
    cardHolder: { value: '', edit: false },
    expiry: { value: '', edit: false },
    cvc: { value: '', edit: false }
  });

  const [allFieldsEditable, setAllFieldsEditable] = useState(false);

  const handleChange = (event, newValue) => setActiveTab(newValue);
  // const handleEdit = (field) => {
  //   setEditableStates(prev => ({
  //     ...prev,
  //     [field]: !prev[field]
  //   }));
  // };

  const [editingFields, setEditingFields] = useState({});
  const [editableStates, setEditableStates] = useState({
    name: false,
    phone: false
  });

  const handleEdit1 = (fieldName) => {
    setEditingFields(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };
 


  const [fieldValues, setFieldValues] = useState({
    name: 'John Doe',
    email: 'xyz@abcmail.com',
    phone: '987654321',
    state: 'Alabama',
    zipcode: '534768',
    bio:'I am an employee of abc company and i am a full time employee. I am good at ...',
    cardNumber: '4123 **** **** ****',
    cardHolder: 'John Doe',
    expiry: '06/28',
    cvc: '5252'
  });
  // const [tempValue, setTempValue] = useState(fieldValues); 



  // const handleFieldChange = (key, value) => {
  //   setTempValue(value);
  // };

  // const handleSaveValue = (key) => {
  //   setFieldValues({ ...fieldValues, [key]: tempValue });
  //   setAllFieldsEditable();
  // };
 

const [editableFields, setEditableFields] = useState({
  name: false,
  phone: false,
  state: false,
  zipcode: false,
  bio: false,
  cardNumber: false,
  cardHolder: false,
  expiry: false,
  cvc: false
});
const [state, setState] = useState('Alabama');
const [tempValues, setTempValues] = useState({
  name: 'John Doe',
  email: 'xyz@abcmail.com',
  phone: '987654321',
  state: 'Alabama',
  zipcode: '534768',
  bio:'I am an employee of abc company and i am a full time employee. I am good at ...',
  cardNumber: '4123 **** **** ****',
  cardHolder: 'John Doe',
  expiry: '06/28',
  cvc: '5252'
});

const handleFieldChange = (key, value) => {
  setTempValues({ ...tempValues, [key]: value });
};

const handleSaveValue = (key) => {
  setFieldValues({ ...fieldValues, [key]: tempValues[key] });
  setEditableFields({ ...editableFields, [key]: false });
};

const handleEdit = (key) => {
  setEditableFields({ ...editableFields, [key]: true });
  setTempValues({ ...tempValues, [key]: fieldValues[key] });
};
const textFieldsContainerRef = React.useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (textFieldsContainerRef.current && !textFieldsContainerRef.current.contains(event.target)) {
      setAllFieldsEditable(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [textFieldsContainerRef]);

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
  


  const [showMoreOverdue, setShowMoreOverdue] = useState(false);
  const [showMoreCompleted, setShowMoreCompleted] = useState(false);

  const completedItems = [
    {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  },
  {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  },
 {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  },
    {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  }
  ];
  

const overdueItems = [
  {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  },
  {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  },
  {
    title: "Follow Up",
    date: "16:30:42, 4 Feb 2022",
    description: {
      segments: [
        {
          type: 'link',
          text: "Meghana P",
          url: "/profile/meghana"
        },
        
        {
          type: 'text',
          text: " has an upcoming task about a meeting at "
        },
        {
          type: 'link',
          text: "OVUM Hospitals- India",
          url: "/hospitals/ovum"
        },
        {
          type: 'text',
          text: "."
        }
      ]
    }
  }
];

// Modified renderTimelineItems function
const renderTimelineItems = (items, showMore, maxItems = 2) => {
  const displayItems = showMore ? items : items.slice(0, maxItems);

  return displayItems.map((item, index) => (
    <TimelineItem 
      key={index}
      sx={{
        '&:not(:last-child)': {
          '& .MuiTimelineContent-root': {
            paddingBottom: '8px',
            marginBottom: '8px'
          }
        }
      }}
    >
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: '#1976D2', boxShadow:'none' }} />
        {index !== displayItems.length - 1 && <TimelineConnector sx={{bgcolor:' rgba(25, 118, 210, 0.12)', boxShadow:'none' }} />}
      </TimelineSeparator>
      <TimelineContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="small" sx={{fontWeight: 'bold'}}>
            {item.title}
          </Typography>
          <Typography variant="caption" color="primary" sx={{ fontSize: '0.7rem' }}>
            {item.date}
          </Typography>
        </Box>
        <Typography
  variant="body2"
  color="text.secondary"
  sx={{
    fontFamily: 'var(--fontFamily)',
    fontSize: 'var(--fontSize1rem)',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.15px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
  }}
>
  {item.description.segments.map((segment, i) => (
    <span
      key={i}
      style={{
        fontFamily: 'var(--fontFamily)',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0.15px',
        textAlign: 'left',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
        display: 'inline',
      }}
    >
      {segment.type === 'link' ? (
        <Link
          href={segment.url}
          component="button"
          onClick={(e) => {
            e.preventDefault();
            console.log('Navigating to:', segment.url);
          }}
          sx={{
            color: '#1976D2',
            textDecoration: 'none',
            display: 'inline',
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }}
        >
          {segment.text}
        </Link>
      ) : (
        segment.text
      )}
    </span>
  ))}
  <Divider />
</Typography>


      </TimelineContent>
      <Divider />
    </TimelineItem>
  ));
};
const handleSave = () => {
  // Save the form values
  setFieldValues({ ...fieldValues, ...tempValues });

  // Optionally, persist to database or backend
  console.log("Saved values:", tempValues);

  // Reset edit mode
  setAllFieldsEditable(false);
};

const accordionStyle = {
  minHeight: '60px',
  height: 'auto',
  border: 'none',
  width: '100%',
  maxWidth: '100%',
  boxShadow: 'none',
  borderTop: 'none',
  marginTop: '0px !important',
  position: 'relative', // Added for absolute positioning of divider
  '& .MuiAccordion-region': {
    height: '250px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0px'
    }
  },
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    borderTop: 'none',
    '&:before': {
      display: 'none',
    },
    '&:after': { // Add divider after summary
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1px',
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      zIndex: 1,
    }
  }
};

const summaryStyle = {
  position: 'relative',
  borderTop: 'none',
  color: '#1976D2',
  width: '100%',
  maxWidth: '100%',
  height: '40px !important',
  minHeight: '40px !important',
  paddingRight: '16px !important',
  borderRadius: '0px',
  display: 'flex',
  alignItems: 'center',
  '& .MuiAccordionSummary-content': {
    margin: '0 !important',
    alignItems: 'center',
    borderTop: 'none',
  },
  '&.Mui-expanded': {
    height: '40px !important',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    borderTop: 'none',
    '&:before': {
      display: 'none',
    }
  }
};

//

  return (
    <Box sx={{
      position: "relative",

      
      padding: "0px 0px 0px 8px",
   
    }}>
    <Box sx={{ 
    
      all: "unset", // **Prevents inheritance from parent styles**
      color: "initial", // Resets text color to browser default (usually black)
      fontStyle: "initial", // Resets font style to normal
      backgroundColor: "initial",
      position: 'relative',
      width: "100%", 
      height: "calc(100vh)", 
      overflow: "hidden",
      ml: -2.4 ,
    }}>
      <AppBar position="static" color="default" elevation={0}
       sx={{
        marginBottom:'-16px',
        
       }}>
        <Tabs 
          value={activeTab} 
          onChange={handleChange}
          sx={{
            minWidth: '444px',
            height: '4px',
            marginBottom:'0px',
            //ml: '304px',
            '& .MuiTab-root': {
              fontSize: '1rem',
              minHeight: '4px'
            }
          }}
        >
          <Tab label="Overview" />
          <Tab label="Related" />
        </Tabs>
      </AppBar>

      <TabPanel value={activeTab} index={0}>
      <Grid item xs={12} md={7} lg={7}> 
        <Grid container spacing={1.6}>
        
             <Grid item xs={8} >
      <Box 
        sx={{ 
          height:"240px", 
          backgroundColor: "white",
          width:"100%",
          //maxWidth: "calc(100% - 4px) !important",
          //width: "calc(100% - 4px) !important",
          borderRadius: '4px',
          borderTop: '1px solid #747474',
          gap:"0px",
          p: 2.4,
          ml:-2.2,
          borderRadius:"4px",
          overflow:"hidden",
          flexWrap: "wrap",
        }}
      >
 

<Box display="flex" alignItems="center" justifyContent="space-between" mb={0.5} mt={1.2}
 >
        <Typography variant="h6" padding="0 0 8px!important 0" >Section Heading</Typography>
      
        </Box>
        <Divider sx={{ flexGrow: 1,mb:1.9}} />
        
        <Grid container spacing={1.6}>
        
        <Grid item xs={6}>
        <TextField
          
          label="Name*"
          variant={!allFieldsEditable ? 'standard' : 'outlined'}
          fullWidth
          value={editableFields.name ? tempValues.name : fieldValues.name}
          onFocus={() => handleEdit('name')}
          onBlur={() => {handleSaveValue('name'); setAllFieldsEditable()}}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          disabled={!allFieldsEditable}
  sx={{
    '& .MuiInput-underline': {
      borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#c9c9c9",
    },
    '& .MuiInput-underline:before': {
      borderBottomWidth: "0px",borderBottomStyle: "solid", // Increase thickness
    },
    '& .MuiInputBase-root': {
      height: '36px',
      
    },
    // Remove extra spacing between label and input for standard variant
    '& .MuiInput-root': {
      marginTop: '3px',
    },
    // Adjust label position for standard variant
    '& .MuiInputLabel-root.MuiInputLabel-standard': {
      transform: 'translate(0, -1.5px) scale(0.75)',
       transformOrigin: 'top left',
      color: '#444444 !important',
    }
  }}
  InputLabelProps={{
    sx: {
      color: allFieldsEditable ? "#1976d2" : "inherit",
      ...(allFieldsEditable && {
        backgroundColor: "white",
      }),
    },
    shrink: true // Keep label shrunk
  }}
  InputProps={{
    sx: {
      fontSize: "12px",
      ...(allFieldsEditable ? {} : { paddingTop: "5px" }),
      ...(allFieldsEditable && {
        '&:after': {
          borderBottom: '2px solid #1976d2',
        },
        '&:before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
        },
        '&:hover:before': {
          borderBottom: '2px solid #1976d2',
        }
      })
    },
    endAdornment: (
      <InputAdornment position="end" sx={{
        position: 'relative',
        marginRight: '4px',
        marginBottom: "5px",
        '&.Mui-disabled': {
          color: '#1976d2',
        }
      }}>
        {!allFieldsEditable && (
          <>
            <EditIconButton
              onClick={() => setAllFieldsEditable(!allFieldsEditable)}
              edge="end"
              sx={{ marginLeft: allFieldsEditable ? "4px" : "0px" }}
            />
          </>
        )}
      </InputAdornment>
    ),
  }}
/>

    </Grid>

          <Grid item xs={6}>
          <TextField
          
        label="Phone*"
        variant={!allFieldsEditable ? "standard" : "outlined"}
        fullWidth
        value={editableFields.phone ? tempValues.phone : fieldValues.phone}
        onFocus={() => handleEdit('phone')}
        onBlur={() => {handleSaveValue('phone'); setAllFieldsEditable()}}
        onChange={(e) => handleFieldChange('phone', e.target.value)}
       
       disabled={!allFieldsEditable}
        sx={{
          '& .MuiInput-underline': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",// Increase thickness
          },
          '& .MuiInput-underline:before': {
            borderBottomWidth: "0px",borderBottomStyle: "solid",// Increase thickness
          },
          '& .MuiInputBase-root': {
            height: '36px',
            color: '#181818',
          },
          // Remove extra spacing between label and input for standard variant
          '& .MuiInput-root': {
            marginTop: '3px',
            color: '#181818',
          },
          // Adjust label position for standard variant
          '& .MuiInputLabel-root.MuiInputLabel-standard': {
            transform: 'translate(0, -1.5px) scale(0.75)',
             transformOrigin: 'top left',
      color: '#444444 !important',
          }
        }}
        InputLabelProps={{
          sx: {
            color: allFieldsEditable ? "#1976d2" : "#444444",
            ...(allFieldsEditable && {
              backgroundColor: "white",
            }),
          },
          shrink: true // Keep label shrunk
        }}
        InputProps={{
          sx: { 
             fontSize: "12px",
             color: '#181818',
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
            ...(allFieldsEditable && {
              '&:after': {
                borderBottom: '2px solid #1976d2',
              },
              '&:before': {
                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
              },
              '&:hover:before': {
                borderBottom: '2px solid #1976d2',
              }
            })
          },
          endAdornment: (
            <InputAdornment position="end" sx={{ 
              position: 'relative', 
              marginRight: '4px', 
              marginBottom: "5px",
              '&.Mui-disabled': {
                color: '#1976d2',
              }
             }}>
             
              {!allFieldsEditable && (
                <>
                  <EditIconButton
                    onClick={() => setAllFieldsEditable(!allFieldsEditable)}
                    edge="end"
                    sx={{ marginLeft: allFieldsEditable ? "4px" : "0px" }}
                  />
                </> 
              )}
            </InputAdornment>
          ),
        }}
      />
          </Grid>
          
          <Grid item xs={6}>
    <TextField
    
      label="State *"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      select
      value={state}
      onFocus={() => handleEdit('state')}
      onBlur={(e) => {handleSaveValue('state'); setState(e.target.value); setAllFieldsEditable()}}
      onChange={(e) =>{ setState(e.target.value); handleFieldChange('state', e.target.value); }}
      disabled={!allFieldsEditable}
      size="small"
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
        },
        '& .MuiInputBase-root': { height: '36px' },
        '& .MuiInput-root': { marginTop: '3px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        }
      }}
    >
      {US_STATES.map((state) => (
        <MenuItem key={state} value={state}>
          {state}
        </MenuItem>
      ))}
    </TextField>
  </Grid>
        
  <Grid item xs={6}>
    <TextField
      label="Zip Code*"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      value={editableFields.zipcode ? tempValues.zipcode : fieldValues.zipcode}
      onFocus={() => handleEdit('zipcode')}
      onBlur={() => {handleSaveValue('zipcode'); setAllFieldsEditable()}}
      onChange={(e) => handleFieldChange('zipcode', e.target.value)}
     
      disabled={!allFieldsEditable}
      size="small"
      sx={{
        '& .MuiInput-underline:before': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
          },
        '& .MuiInputBase-root': { height: '36px' },
        '& .MuiInput-root': { marginTop: '3px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }),
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        },
        endAdornment: (
          <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom: "5px", '&.Mui-disabled': { color: '#1976d2' } }}>
           
            {!allFieldsEditable && <EditIconButton onClick={() => { handleEdit('zipcode'); setAllFieldsEditable(!allFieldsEditable) }} />}
          </InputAdornment>
        ),
      }}
    />
  </Grid>
          
  <Grid item xs={12}>
    <TextField
      label="Bio*"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      multiline
      rows={3}
      value={editableFields.bio ? tempValues.bio : fieldValues.bio}
      onFocus={() => handleEdit('bio')}
      onBlur={() => {handleSaveValue('bio'); setAllFieldsEditable()}}
      onChange={(e) => handleFieldChange('bio', e.target.value)}
     
      disabled={!allFieldsEditable}
      size="small"
      sx={{
        
          '& .MuiInput-underline': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
          },
          '& .MuiInput-underline:before': {
            borderBottomWidth: "0px",borderBottomStyle: "solid",// Increase thickness
          },
        '& .MuiInputBase-root': { height: 'auto' },
        '& .MuiInput-root': { marginTop: '10px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        },
        endAdornment: (
          <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom: "0px", '&.Mui-disabled': { color: '#1976d2' } }}>
          
            {!allFieldsEditable && <EditIconButton onClick={() => { handleEdit('bio'); setAllFieldsEditable(!allFieldsEditable) }} />}
          </InputAdornment>
        ),
      }}
    />
      </Grid>
        
        </Grid>
    </Box>

      <Box 
        sx={{ 
          backgroundColor: "white",
          maxWidth: "100%",
          width: "100%",
        
          borderRadius: '4px',
          //boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          margin: '0 auto',
          ml:-2.2,
          mt: 2.4,
          p: 2.4,
          
        }}
      >
       
       <Box display="flex" alignItems="center" justifyContent="space-between" mb={0.5} mt={1.2}
 >
        <Typography variant="h6" padding="0 0 8px!important 0" >Typography</Typography>
      
        </Box>
        <Divider sx={{ flexGrow: 1,mb:1.9}} />
        
              
        <Grid container spacing={1.6}>
        <Grid item xs={12}>
    <TextField
      label="Card Number*"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      value={editableFields.cardNumber ? tempValues.cardNumber : fieldValues.cardNumber}
      onFocus={() => handleEdit('cardNumber')}
      onBlur={() => {handleSaveValue('cardNumber'); setAllFieldsEditable()}}
      onChange={(e) => handleFieldChange('cardNumber', e.target.value)}
     
      disabled={!allFieldsEditable}
      size="small"
      sx={{
        '& .MuiInput-underline:before': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
          },
        '& .MuiInputBase-root': { height: '40px' },
        '& .MuiInput-root': { marginTop: '3px' },
       // '& .MuiInput-root': { marginBottom: '0px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        },
        startAdornment: (
          <InputAdornment position="start">
            <CreditCardIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom: "5px", '&.Mui-disabled': { color: '#1976d2' } }}>
           
            {!allFieldsEditable && <EditIconButton onClick={() => { handleEdit('cardNumber'); setAllFieldsEditable(!allFieldsEditable) }} />}
          </InputAdornment>
        ),
      }}
    />
    </Grid>

    <Grid item xs={12}>
    <TextField
      label="Card Holder Name*"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      value={editableFields.cardHolder ? tempValues.cardHolder : fieldValues.cardHolder}
      onFocus={() => handleEdit('cardHolder')}
      onBlur={() => {handleSaveValue('cardHolder'); setAllFieldsEditable()}}
      onChange={(e) => handleFieldChange('cardHolder', e.target.value)}
     
      disabled={!allFieldsEditable}
      size="small"
      sx={{
        '& .MuiInput-underline:before': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
          },
        '& .MuiInputBase-root': { height: '36px' },
        '& .MuiInput-root': { marginTop: '3px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        },
        endAdornment: (
          <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom: "5px", '&.Mui-disabled': { color: '#1976d2' } }}>
           
            {!allFieldsEditable && <EditIconButton onClick={() => { handleEdit('cardHolder'); setAllFieldsEditable(!allFieldsEditable) }} />}
          </InputAdornment>
        ),
      }}
    />
    </Grid>

          <Grid item xs={6}>
    <TextField
      label="Expiry*"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      value={editableFields.expiry ? tempValues.expiry : fieldValues.expiry}
      onFocus={() => handleEdit('expiry')}
      onBlur={() => {handleSaveValue('expiry'); setAllFieldsEditable()}}
      onChange={(e) => handleFieldChange('expiry', e.target.value)}
     
      disabled={!allFieldsEditable}
      size="small"
      sx={{
        '& .MuiInput-underline:before': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
          },
        '& .MuiInputBase-root': { height: '36px' },
        '& .MuiInput-root': { marginTop: '3px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        },
        endAdornment: (
          <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom: "5px", '&.Mui-disabled': { color: '#1976d2' } }}>
           
            {!allFieldsEditable && <EditIconButton onClick={() => { handleEdit('expiry'); setAllFieldsEditable(!allFieldsEditable) }} />}
          </InputAdornment>
        ),
      }}
    />
    </Grid>

    <Grid item xs={6}>
    <TextField
      label="CVC/CV2*"
      variant={!allFieldsEditable ? "standard" : "outlined"}
      fullWidth
      value={editableFields.cvc ? tempValues.cvc : fieldValues.cvc}
      onFocus={() => handleEdit('cvc')}
      onBlur={() => {handleSaveValue('cvc'); setAllFieldsEditable()}}
      onChange={(e) => handleFieldChange('cvc', e.target.value)}
     
        disabled={!allFieldsEditable}
      size="small"
      sx={{
        '& .MuiInput-underline:before': {
            borderBottomWidth: "1px",borderBottomStyle: "solid",borderBottomColor: "#c9c9c9",
          },
        '& .MuiInputBase-root': { height: '36px' },
        '& .MuiInput-root': { marginTop: '3px' },
        '& .MuiInputLabel-root.MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.75)',
           transformOrigin: 'top left',
      color: '#444444 !important',
        }
      }}
      InputLabelProps={{
        sx: {
          color: allFieldsEditable ? "#1976d2" : "inherit",
          ...(allFieldsEditable && { backgroundColor: "white" }),
        },
        shrink: true
      }}
      InputProps={{
        sx: {
           fontSize: "12px",
            ...(allFieldsEditable ? {} : { paddingTop: "5px" }), 
            
          ...(allFieldsEditable && {
            '&:after': { borderBottom: '2px solid #1976d2' },
            '&:before': { borderBottom: '1px solid rgba(0, 0, 0, 0.42)' },
            '&:hover:before': { borderBottom: '2px solid #1976d2' }
          })
        },
        endAdornment: (
          <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom: "5px", '&.Mui-disabled': { color: '#1976d2' } }}>
           
            {!allFieldsEditable && <EditIconButton onClick={() => { handleEdit('cvc'); setAllFieldsEditable(!allFieldsEditable) }} />}
          </InputAdornment>
        ),
      }}
        />
      </Grid>
        {/* Save Button */}
  
        </Grid>
    </Box>
    <Box sx={{
      backgroundColor: "white",
      maxWidth: "100%",
      width: "100%",
    
      borderRadius: '4px',
      height:"30px",
      margin: '0 auto',
      ml:-2.2,
      mt: 2.4,
      p: 2.4,
      
    }}>
    <Grid item xs={12} container justifyContent="flex-end" >
    <Button
      variant="contained"
      color="primary"
      sx={{
        marginBottom: 1,
        marginTop: -1,
        paddingX: 3,
        paddingY: 1,
        width:"70px",
        height:"40px !important",
        backgroundColor: "#1976d2",
        "&:hover": { backgroundColor: "#1565c0" },
      }}
      onClick={handleSave}
    >
      Save
    </Button>
  </Grid>
  </Box>
              </Grid>
      
    
          <Grid item xs={4}>
    <Grid container sx={{ width: '100%', flexWrap: 'wrap' }}>
    
      <Box 
        sx={{ 
          borderRadius:"4px",
          backgroundColor: "white",
          
          width:"100%",
          height:"auto",
          //width: "409px !important",
         // height: "650px !important",
          borderRadius: '4px',
          padding: '20px 28px',
          gap: '0px',
          marginLeft:'24px',
         // boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          //margin: 'auto 1.4rem',
          // display: 'flex',
          // flexDirection: 'column',
          flexWrap:"wrap",
          //overflowX:"auto",
          
        }}
      >

        <Box display="flex" alignItems="center" justifyContent="space-between" mb={0.5} mt={1.2}
 >
        <Typography variant="h6" padding="0 0 8px!important 0" >Timeline</Typography>
      
        </Box>
        <Divider sx={{ flexGrow: 1,mb:1.9}} />
        <Accordion defaultExpanded sx={accordionStyle}>
          <AccordionSummary 
            expandIcon={<ExpandMore sx={{color:"#1976D2"
}}/> }
            sx={summaryStyle}
          >
  <Typography variant="body" sx={{ marginLeft: "-8px",fontSize:"16px" }}>Upcoming & Overdue</Typography>


           
          </AccordionSummary>
          <AccordionDetails sx={{ p:1, display:'flex' ,flexDirection: 'column',
            backgroundColor: 'white',
         
          }}>
            <Timeline sx={{ 
              width: '100%',
              padding: '0 ',margin: '0',
              [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
              // '& .MuiTimelineDot-root': { 
              //   width: 2, 
              //   height: 2,
              //   backgroundColor:' rgba(80, 80, 80, 0.4)',
              //   borderWidth: '6px 0 0 6px',
              //   transform: 'rotate(45deg)',
              //   borderRadius: 0, // Remove default border radius
                
              // },
   '& .MuiTimelineDot-root': { 
  width: 8,  // Adjust this value to change size
  height: 8, // Keep same as width for symmetry
  backgroundColor: 'rgba(80, 80, 80,0.7)',
  clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
  transform: 'translateX(2px)', // Fine-tune positioning if needed
  padding: 0,
  margin: '11.5px 0', // Maintain MUI Timeline spacing
  borderRadius: 0,
},

              mb:1
            }}>
              {renderTimelineItems(overdueItems, showMoreOverdue)}
            </Timeline>
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}>
              <Chip 
                label={showMoreOverdue ? "View Less" : "View More"} 
                variant={"outlined"}
                onClick={() => setShowMoreOverdue(!showMoreOverdue)}
                sx={{ cursor: 'pointer' }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionStyle}>
          <AccordionSummary 
            expandIcon={<ExpandMore sx={{color:"#1976D2"}}/> }
            sx={summaryStyle}
          >
          <Typography variant="body" sx={{ marginLeft: "-8px", fontSize:"16px" }}>Completed</Typography></AccordionSummary>
          <AccordionDetails sx={{ p: 1, display: 'flex', flexDirection: 'column',
             backgroundColor: 'white',
            //  borderBottomLeftRadius: '8px',
            //  borderBottomRightRadius: '8px',
            // border: '1px solid rgba(0,0,0,0.1)',
             borderTop: 'none'
           }}>
            <Timeline sx={{ 
              [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
              '& .MuiTimelineDot-root': { 
                width: 8,  // Adjust this value to change size
                height: 8, // Keep same as width for symmetry
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                transform: 'translateX(2px)', // Fine-tune positioning if needed
                padding: 0,
                margin: '11.5px 0', // Maintain MUI Timeline spacing
                borderRadius: 0,
              },
            }}>
              {renderTimelineItems(completedItems, showMoreCompleted)}
            </Timeline>
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
              <Chip 
                label={showMoreCompleted ? "View Less" : "View More"} 
                variant={"outlined"}
                onClick={() => setShowMoreCompleted(!showMoreCompleted)}
                sx={{ cursor: 'pointer' }}
             />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
          </Grid>
        </Grid>
      </Grid>
        
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
      <Box sx={{
      backgroundColor: "white",
      maxWidth: "100%",
      width: "100%",
    
      borderRadius: '4px',
      height:"auto",
      margin: '0 auto',
      ml:-2.2,
      p: 2.4,
      borderTop: '1px solid #747474',
      
    }}>
      <Typography variant="h6" padding="0 0 8px!important 0" sx={{mb:"30px"}}>
        Deals
        </Typography>
        <DataTable />
        </Box>
      </TabPanel>
    </Box>
    </Box>
  );
}
