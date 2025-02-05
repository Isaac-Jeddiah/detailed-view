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
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



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
    email: { value: 'Email', edit: true },
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
    
    setFormData(prev => ({
      ...prev,
      [field]: { ...prev[field], edit: !prev[field].edit }
    }));
  };
  const [editingFields, setEditingFields] = useState({});

  const handleEdit1 = (fieldName) => {
    setEditingFields(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };
  
  const EditIconButton = ({ onClick }) => (
    <IconButton 
      size="small" 
      onClick={onClick}
      sx={{
        backgroundColor: '#e3f2fd',
        '&:hover': {
          backgroundColor: '#bbdefb',
        },
        width: 28,
        height: 28
      }}
    >
      <EditIcon fontSize="small" sx={{ color: '#1976d2' }} />
    </IconButton>
  );

  const [showMoreOverdue, setShowMoreOverdue] = useState(false);
  const [showMoreCompleted, setShowMoreCompleted] = useState(false);

  const overdueItems = [
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    }
  ];

  const completedItems = [
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: "Meghana P has an upcoming task about OVUM Hospitals- India."
    }
  ];

  const renderTimelineItems = (items, showMore, maxItems = 2) => {
    const displayItems = showMore ? items : items.slice(0, maxItems);
    
    return displayItems.map((item, index) => (
      <TimelineItem key={index}
      sx={{
        '&:not(:last-child)': {
          '& .MuiTimelineContent-root': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            paddingBottom: '16px',
            marginBottom: '16px'
          }
        }
      }}

      >
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#1976D2' }} />
          {index !== displayItems.length - 1 && <TimelineConnector sx={{ bgcolor: '#1976D2' }} />}
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>{item.title}</Typography>
            <Typography variant="caption" color="primary" sx={{ fontSize: '0.7rem' }}>
              {item.date}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
            {item.description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    ));
  };

  const accordionStyle = {
    minHeight: '60px',
    height: 'auto',
    border: 'none',
    boxShadow: 'none',
    '& .MuiAccordion-region': {
      height: '230px',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        width: '4px'
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#88888850',
        borderRadius: '4px'
      }
    }
  };

  const summaryStyle = {
    bgcolor: 'primary.main',
    color: '#fff',
    height: '40px',
    minHeight: '40px !important',
    borderRadius: '8px',
    '& .MuiAccordionSummary-content': {
      margin: '0 !important'
    },
    '&.Mui-expanded': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  };


  return (
    <Box sx={{ 
      //display: 'flex',
      //height:"100vh",
      position: 'relative',
      width: "100%", 
      height: "calc(100vh - 120px)", 
      overflow: "hidden",
      ml: 1 
    }}>
      <AppBar position="static" color="default" elevation={0}>
        <Tabs 
          value={activeTab} 
          onChange={handleChange}
          sx={{
            width: 'var(--xs)',
            height: '42px',
           // ml: '304px',
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
        <Grid container spacing={2.4}>
        
    <Grid item xs={7.5}>
      <Box 
        sx={{ 
          backgroundColor: "white",
          maxWidth: "calc(100% - 4px)",
          width: "calc(100% - 4px)",
          borderRadius: '4px',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          margin: '',
          p: 2.4,
          ml:-2.4
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Typography variant="subtitle2" sx={{ fontSize: '1.5rem' }}>
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
              label="Email*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  paddingRight:'4px',
                  
          position: 'relative',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                transform: allFieldsEditable ? 'translate(14px, -9px) scale(0.75)' : 'translate(14px, 8px) scale(1)',
       
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  shrink: allFieldsEditable,
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="State*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                
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
              label="Zip code"
              variant={allFieldsEditable ? "outlined" : "standard"}
              value="563231"
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Bio*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              multiline
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
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
          boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          margin: '0 auto',
          ml:-2.4,
          mt: 2.4,
          p: 2.4
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2, fontSize: '1.5rem' }}>Typography</Typography>
        <Grid container spacing={2.4}>
          <Grid item xs={12}
          >
            <TextField
              label="Card number*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon color="action" />
                  </InputAdornment>
                ),
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card holder name*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="MM/YY*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVC/CV2*"
              variant={allFieldsEditable ? "outlined" : "standard"}
              fullWidth
              size="small"
              InputLabelProps={{ 
                shrink: allFieldsEditable,
                sx: { 
                  fontSize: '0.75rem',
                  color: allFieldsEditable ? '#1976d2' : 'inherit',
                  ...(allFieldsEditable && {
                    backgroundColor: 'white',
                    padding: '0 4px',
                  })
                } 
              }}
              InputProps={{
                sx: { 
                  fontSize: '0.75rem',
                  ...(allFieldsEditable && {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1976d2',
                      borderWidth: '1px',
                    }
                  })
                },
                endAdornment: (
                  <InputAdornment position="end" sx={{ position: 'relative', marginRight: '4px', marginBottom:"5px" }}>
                    <EditIconButton onClick={() => {handleEdit('email'); setAllFieldsEditable(!allFieldsEditable);
                      handleEdit('phone');  handleEdit('state'); handleEdit('zipcode'); handleEdit('bio'); handleEdit('cardNumber'); handleEdit('cardHolder'); handleEdit('expiry'); handleEdit('cvc'); 
                    }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
    </Box>
    </Grid>
    
    <Grid item xs={4.5}>
      <Box 
        sx={{ 
          backgroundColor: "white",
          width: "409px",
          height: "650px",
          borderRadius: '4px',
          padding: '20px 28px',
          gap: '0px',
         // boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          margin: 'auto 1.4rem',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h6" sx={{ p: 2.4, pb: 2.4 }}>Timeline</Typography>
        
        <Accordion defaultExpanded sx={accordionStyle}>
          <AccordionSummary 
            expandIcon={<ExpandMore sx={accordionStyle}/> }
            sx={summaryStyle}
          >
            <Typography variant="body2">Upcoming & Overdue</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 1, display: 'flex', flexDirection: 'column' ,
            backgroundColor: 'white',
          //   borderBottomLeftRadius: '8px',
          //   borderBottomRightRadius: '8px',
          //  // border: '1px solid rgba(0,0,0,0.1)',
          //   borderTop: 'none',
          //   borderLeft: '1px solid rgba(0,0,0,0.1)',
          //     borderRight: '1px solid rgba(0,0,0,0.1)',
          //     borderBottom: '1px solid rgba(0,0,0,0.1)',
          // 
          }}>
            <Timeline sx={{ 
              [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
              '& .MuiTimelineDot-root': { 
                width: 2, 
                height: 2,
                backgroundColor: '#1976D266',
              },
              mb:1
            }}>
              {renderTimelineItems(overdueItems, showMoreOverdue)}
            </Timeline>
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}>
              <Chip 
                label={showMoreOverdue ? "View Less" : "View More"} 
                color="primary" 
                onClick={() => setShowMoreOverdue(!showMoreOverdue)}
                sx={{ cursor: 'pointer' }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={accordionStyle}>
          <AccordionSummary 
            expandIcon={<ExpandMore /> }
            sx={summaryStyle}
          >
            <Typography variant="body2">Completed</Typography>
          </AccordionSummary>
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
                color="primary" 
                onClick={() => setShowMoreCompleted(!showMoreCompleted)}
                sx={{ cursor: 'pointer' }}
             />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}
