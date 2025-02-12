import * as React from 'react';
import { useState } from "react";
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
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
 
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
  const handleEdit = (field) => {
    setEditableStates(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

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
  // const handleFieldChange = (field, value) => {
  //   setFieldValues(prev => ({
  //     ...prev,
  //     [field]: value
  //   }));
  // };
  


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
  const [tempValue, setTempValue] = useState(fieldValues.name); 



  const handleFieldChange = (key, value) => {
    setTempValue(value);
  };

  const handleSaveValue = (key) => {
    setFieldValues({ ...fieldValues, [key]: tempValue });
    setAllFieldsEditable(false);
  };
  const EditIconButton = ({ onClick }) => (
    <IconButton 
      size="small" 
      onClick={onClick}
      sx={{
        marginTop: '5px',
        width: 28,
        height: 28,
        color:"primary",
       
        borderRadius: "50%", 
       
      }}
    >
      <EditIcon 
        fontSize="small" 
        sx={{
          color: "transparent",
          stroke: "#90A4AE",
          strokeWidth: 2, 
        }} 
      />
    </IconButton>
  );

  const [showMoreOverdue, setShowMoreOverdue] = useState(false);
  const [showMoreCompleted, setShowMoreCompleted] = useState(false);

  // const overdueItems = [
  //   {
  //     title: "Follow Up",
  //     date: "16:30:42, 4 Feb 2022",
  //     description: "Meghana P has an upcoming task about a meeting at OVUM Hospitals- India."
  //   },
    
  //   {
  //     title: "Follow Up",
  //     date: "16:30:42, 4 Feb 2022",
  //     description: "Meghana P has an upcoming task about a meeting at OVUM Hospitals- India."
  //   },
  //   {
  //     title: "Follow Up",
  //     date: "16:30:42, 4 Feb 2022",
  //     description: "Meghana P has an upcoming task about a meeting at OVUM Hospitals- India."
  //   },
    
  // ];

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
  
 const [text , setText] = useState("")

  const clearTextField = () => setText("")
  
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
const handleClearValue = (field) => {
  setFormData(prev => ({
    ...prev,
    [field]: ''
  }));
};
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
  // const renderTimelineItems = (items, showMore, maxItems = 2) => {
  //   const displayItems = showMore ? items : items.slice(0, maxItems);
    
  //   return displayItems.map((item, index) => (
  //     <TimelineItem key={index}
  //     sx={{
  //       '&:not(:last-child)': {
  //         '& .MuiTimelineContent-root': {
  //          paddingBottom: '16px',
  //           marginBottom: '16px'
  //         }
  //       }
  //     }}

  //     >
  //       <TimelineSeparator>
  //         <TimelineDot sx={{ bgcolor: '#1976D2' }} />
  //         {index !== displayItems.length - 1 && <TimelineConnector sx={{ bgcolor: '#1976D2' }} />}
  //       </TimelineSeparator>
  //       <TimelineContent>
  //         <Box display="flex" justifyContent="space-between">
  //           <Typography variant="small" sx={{ fontSize: '1rem' }}>{item.title}</Typography>
  //           <Typography variant="caption" color="primary" sx={{ fontSize: '0.7rem' }}>
  //             {item.date}
  //           </Typography>
  //         </Box>
  //         <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
  //           {item.description}
  //         </Typography>
  //       </TimelineContent>
  //     </TimelineItem>
  //   ));
  // };

  const accordionStyle = {
    minHeight: '60px',
    height: 'auto',
    border: 'none',
    marginRight:'32px !important',
    boxShadow: 'none',
    marginTop: '0px !important', // Prevents unwanted movement
    '& .MuiAccordion-region': {
      height: '250px',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        width: '0px'
      }
    }
  };
  

  const summaryStyle = {
    position: 'relative',
    bgcolor: '#1976D21F',
    color: '#1976D2',
    marginRight: '32px !important',
    height: '40px !important',
    minHeight: '40px !important',
    paddingRight: '16px !important',
    borderRadius: '4px',
    display: 'flex', // Ensures the text stays centered
    alignItems: 'center', // Centers text vertically
    '& .MuiAccordionSummary-content': {
      margin: '0 !important', // Remove margin changes
      alignItems: 'center', // Keep text centered
    },
    '&.Mui-expanded': {
      height: '40px !important',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  };
  


  return (
    <Box sx={{ 
      //display: 'flex',
      //height:"100vh",
      position: 'relative',
      width: "100%", 
      height: "calc(100vh - 120px)", 
      overflow: "hidden",
      ml: 1 ,
      
    }}>
      <AppBar position="static" color="default" elevation={0}>
        <Tabs 
          value={activeTab} 
          onChange={handleChange}
          sx={{
            minWidth: '444px',
            height: '42px',
            //ml: '304px',
            '& .MuiTab-root': {
              fontSize: '1rem',
              minHeight: '42px'
            }
          }}
        >
          <Tab label="Overview" />
          <Tab label="Related" />
        </Tabs>
      </AppBar>

      <TabPanel value={activeTab} index={0}>
      <Grid item xs={12} md={7} lg={7}> 
        <Grid container spacing={2.4}>
        
    <Grid item xs={7} >
      <Box 
        sx={{ 
          height:"240px", 
          backgroundColor: "white",
          width:"100%",
          //maxWidth: "calc(100% - 4px) !important",
          //width: "calc(100% - 4px) !important",
          borderRadius: '4px',
          gap:"0px",
          p: 2.4,
          ml:-2.4,
          borderRadius:"4px",
          overflow:"hidden",
          flexWrap: "wrap",
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="h6" padding="0 0 16px 0" >
            Section Heading
          </Typography>
          {/* <IconButton 
            size="small" 
            onClick={() => setAllFieldsEditable(!allFieldsEditable)}
            sx={{ ml: 1 }}
          >
            <EditIcon fontSize="small" />
          </IconButton> */}
        </Box>
        
        <Grid container spacing={2.4}>
        <Grid item xs={6}>
      <TextField
        label="Name*"
        variant="outlined"
        fullWidth
        value={fieldValues.name}
        onChange={(e) => handleFieldChange('name', e.target.value)}
        disabled={!allFieldsEditable}
        size="small"
        InputLabelProps={{
          sx: {
            color: allFieldsEditable ? "#1976d2" : "inherit",
            ...(allFieldsEditable && {
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": { borderColor: "#1976d2" }, // blue on hover
                "&.Mui-focused fieldset": { borderColor: "#1976d2" }, // blue when focused
              },
            }),
          },
        }}
        InputProps={{
          shrink: allFieldsEditable,
          sx: { fontSize: "12px" },
          endAdornment: (
            <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
              '&.Mui-disabled': {
                color: '#1976d2',
              }
             }}>
              {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() =>{ handleSaveValue("name"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() =>{ handleClearValue("name"); fieldValues.name ="";}}
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7 ,marginTop: '5px',
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>
              )}
              {!allFieldsEditable && (  <>
              <EditIconButton
                onClick={() => setAllFieldsEditable(!allFieldsEditable)}
                edge="end"
                sx={{ marginLeft: allFieldsEditable ? "4px" : "0px" }}
              ></EditIconButton>
              </> )}
              
            </InputAdornment>
          ),
        }}
      />
    </Grid>

          <Grid item xs={6}>
            <TextField
              label="Phone *"
              variant="outlined"
              fullWidth
              value={fieldValues.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
              
                sx: { 
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#1976d2', // blue color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2', // blue color when focused
                    },
                  },
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
                endAdornment: (
               <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
                    '&.Mui-disabled': {
                      color: '#1976d2',
                    }
                   }}>     
                    {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() => {handleSaveValue("phone"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() => {handleClearValue("phone"); fieldValues.phone = "";}}
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7 ,marginTop: '5px',
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>
              )}
               {!allFieldsEditable && (  <>
                    <EditIconButton onClick={() => {handleEdit('phone'); setAllFieldsEditable(!allFieldsEditable);
                    }} />
                    </> )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              label="State *"
              variant="outlined"
              fullWidth
              select
              value={fieldValues.state}
              onChange={(e) => handleFieldChange('state',)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
              
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#1976d2', // blue color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1976d2', // blue color when focused
                      },
                    }
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
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
              id="outlined-multiline-static"
              variant="outlined"
              fullWidth
              rows="2"
              value={fieldValues.zipcode}
              onChange={(e) => handleFieldChange('zipcode', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
                
                //               
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
                endAdornment: (
               <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
                    '&.Mui-disabled': {
                      color: '#1976d2',
                    }
                   }}>      
                    {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() =>{ handleSaveValue("zipcode"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() => {handleClearValue("zipcode"); fieldValues.zipcode=""}}
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7 ,marginTop: '5px',
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>

              )}{!allFieldsEditable && (  <>
              <EditIconButton onClick={() => {handleEdit('zipcode'); setAllFieldsEditable(!allFieldsEditable);
                    }} /></> )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="Bio*"
              variant="outlined"
              fullWidth
              rows={4}
              multiline
              
              value={fieldValues.bio}
              onChange={(e) => handleFieldChange('bio', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
                
                //               
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
                endAdornment: (
               <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
                    '&.Mui-disabled': {
                      color: '#1976d2',
                    }
                   }}>    
                    {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() =>{ handleSaveValue("bio"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() => {handleClearValue("bio"); fieldValues.bio=""; }}
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7 ,marginTop: '5px',
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>
              )}  {!allFieldsEditable && (  <>
                   <EditIconButton onClick={() => {handleEdit('bio'); setAllFieldsEditable(!allFieldsEditable);
                    }} /></> )}
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
          maxWidth: "calc(100% - 4px)",
          width: "calc(100% - 4px)",
        
          borderRadius: '4px',
          //boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          margin: '0 auto',
          ml:-2.4,
          mt: 2.4,
          p: 2.4
        }}
      >
        <Typography variant="h6" padding="0 0 16px 0" sx={{marginBottom:"10px"}}>Typography</Typography>
        <Grid container spacing={2.4}>
        <Grid item xs={12}>
            <TextField
              label="Card Number*"
              id="outlined-multiline-static"
              variant="outlined"
              fullWidth
              rows="2"
              value={fieldValues.cardNumber}
              onChange={(e) => handleFieldChange('cardNumber', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
                
                //               
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
                
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
        startAdornment: (
          <InputAdornment position="start" >
          <CreditCardIcon color="action" />
        </InputAdornment>
        ),
        sx: {
          fontSize: '0.75rem',
          marginTop: '0',
          '& .MuiInputBase-input': {
            paddingTop: '8px',
            paddingBottom: '8px',
          },
          ...(allFieldsEditable && {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1976d2',
              borderWidth: '1px',
            }
          }),
          '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.87)', // Maintains text color when disabled
            WebkitTextFillColor: 'rgba(0, 0, 0, 0.87)',
          }
        },
        endAdornment: (
          <InputAdornment 
            position="end" 
            sx={{ 
              position: 'relative', 
              marginLeft: '0px',
              marginRight: '4px', 
              marginBottom: "5px",
              '&.Mui-disabled': {
                color: '#1976d2',
              }
            }}
          > {allFieldsEditable && (
            <>
              <IconButton
              
                onClick={() =>{handleSaveValue("cardnumber"); setAllFieldsEditable(!allFieldsEditable)}}
                edge="end"
                sx={{  opacity: 0.7,marginTop: '5px',
                  width: 28,
                  height: 28, marginRight: '1px' }}
              >
                <CheckCircleIcon />
              </IconButton>
              <IconButton
                //onClick={() => {handleClearValue("cardNumber"); fieldValues.cardNumber="";}}
                onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                edge="end"
                sx={{  opacity: 0.7 ,marginTop: '5px',
                  width: 28,
                  height: 28,marginRight: '1px'}}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
          {!allFieldsEditable && (  <>
            <EditIconButton 
              onClick={() => {
                handleEdit('cardNumber');
                setAllFieldsEditable(!allFieldsEditable);
              }}
            />  </> )}
          </InputAdornment>
        ),
      }}
      sx={{
      
        '& .MuiInputBase-root': {
          paddingTop: '0',
          paddingBottom: '0',
        }
      }}
    />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Holder Name*"
              id="outlined-multiline-static"
              variant="outlined"
              fullWidth
              rows="2"
              value={fieldValues.cardHolder}
              onChange={(e) => handleFieldChange('cardHolder', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
                
                //               
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
                endAdornment: (
               <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
                    '&.Mui-disabled': {
                      color: '#1976d2',
                    }
                   }}>     
                    {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() =>{ handleSaveValue("cardHolder"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() =>{ handleClearValue("cardHolder"); fieldValues.cardHolder="";}}
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7 ,marginTop: '5px',
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>
              )}{!allFieldsEditable && (  <>
                    <EditIconButton onClick={() => {handleEdit('cardholder'); setAllFieldsEditable(!allFieldsEditable);
                    }} />  </> )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiry*"
              id="outlined-multiline-static"
              variant="outlined"
              fullWidth
              rows="2"
              value={fieldValues.expiry}
              onChange={(e) => handleFieldChange('expiry', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
                
                //               
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
                endAdornment: (
               <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
                    '&.Mui-disabled': {
                      color: '#1976d2',
                    }
                   }}>      
                    {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() =>{handleSaveValue("expiry"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() => {handleClearValue("expiry"); fieldValues.expiry="";}}
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7 ,marginTop: '5px',
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>

              )}
              {!allFieldsEditable && (  <><EditIconButton onClick={() => {handleEdit('expiry'); setAllFieldsEditable(!allFieldsEditable);
                    }} /></> )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVC/CV2*"
              id="outlined-multiline-static"
              variant="outlined"
              fullWidth
              rows="2"
              value={fieldValues.cvc}
              onChange={(e) => handleFieldChange('cvc', e.target.value)}
                disabled={!allFieldsEditable}             
              size="small"
               InputLabelProps={{ 
                
                //               
                sx: { 
                
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    
                  })
                } 
              }}
             InputProps={{
               shrink: allFieldsEditable,
            
                sx: { fontSize: '12px' },
                
                endAdornment: (
               <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px",
                    '&.Mui-disabled': {
                      color: '#1976d2',
                    }
                   }}>     
                    {allFieldsEditable && (
                <>
                  <IconButton
                  
                    onClick={() =>{ handleSaveValue("cv2"); setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    sx={{  opacity: 0.7,marginTop: '5px',
                      width: 28,
                      height: 28, marginRight: '1px' }}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    //onClick={() => {handleClearValue("cv2"); fieldValues.cvc="";}}
                    
                    onClick={() => {setAllFieldsEditable(!allFieldsEditable)}}
                    edge="end"
                    
                    sx={{  opacity: 0.7 ,marginTop: '5px',//borderRadius: "50%",
                      width: 28,
                      height: 28,marginRight: '1px'}}
                  >
                    <CloseIcon />
                  </IconButton>
                </>
              )}{!allFieldsEditable && (  <>
                    <EditIconButton onClick={() => {handleEdit('cv2'); setAllFieldsEditable(!allFieldsEditable);
                    }} /> </> )}
                  </InputAdornment>

                ),
              }}
            />
          </Grid>
        </Grid>
    </Box>
    </Grid>
    
    <Grid item xs={5}>
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
         // boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          margin: 'auto 1.4rem',
          // display: 'flex',
          // flexDirection: 'column',
          flexWrap:"wrap",
          //overflowX:"auto",
          
        }}
      >

        <Box display="flex" alignItems="center" mb={1} 
 >
        <Typography variant="h6" padding="0 0 8px!important 0" >Timeline</Typography>
        <Divider/>
        
        </Box>
       <Box></Box>
        <Accordion defaultExpanded sx={accordionStyle}>
          <AccordionSummary 
            expandIcon={<ExpandMore sx={{color:"#1976D2"
}}/> }
            sx={summaryStyle}
          >
           <Box display="flex" alignItems="center" mb={1} sx={{ position: "relative", zIndex: 2, pr: 2 }}>
  <Typography variant="body2" sx={{ marginRight: "8px" }}>Upcoming & Overdue</Typography>
  <Divider sx={{ flexGrow: 1, ml: 2, borderBottomWidth: 2, backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
</Box>

           
          </AccordionSummary>
          <AccordionDetails sx={{  display:'flex' ,flexDirection: 'column',
            backgroundColor: 'white',
         
          }}>
            <Timeline sx={{ 
              [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
              '& .MuiTimelineDot-root': { 
                width: 2, 
                height: 2,
                backgroundColor:' rgba(25, 118, 210, 0.4)',

              },
              mb:1
            }}>
              {renderTimelineItems(overdueItems, showMoreOverdue)}
            </Timeline>
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}>
              <Chip 
                label={showMoreOverdue ? "View Less" : "View More"} 
                variant="outlined"
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
          <Typography variant="body2" sx={{ marginRight: "8px" }}>Completed</Typography></AccordionSummary>
          <AccordionDetails sx={{ p: 1, display: 'flex', flexDirection: 'column',
             backgroundColor: 'white',
             borderBottomLeftRadius: '8px',
             borderBottomRightRadius: '8px',
            // border: '1px solid rgba(0,0,0,0.1)',
             borderTop: 'none'
           }}>
            <Timeline sx={{ 
              [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
              '& .MuiTimelineDot-root': { 
                width: 2, 
                height: 2,
                backgroundColor: '#1976D266',
              }
            }}>
              {renderTimelineItems(completedItems, showMoreCompleted)}
            </Timeline>
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
              <Chip 
                label={showMoreCompleted ? "View Less" : "View More"} 
                variant="outlined"
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
      </TabPanel>
    </Box>
  );
}
