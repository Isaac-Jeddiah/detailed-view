import * as React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore, MarginTwoTone } from '@mui/icons-material';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

function TabPanel({ children, value, index }) {
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

export default function DataTable() {
  const [activeTab, setActiveTab] = useState(0);

  const [emailEdit, setEmailEdit] = useState(true);
  const [phoneEdit, setPhoneEdit] = useState(true);
  const [stateEdit, setStateEdit] = useState(true);
  const [zipEdit, setZipEdit] = useState(true);
  const [bioEdit, setBioEdit] = useState(true);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "150vh",pt:1 }}>
      <AppBar position="static" color="default" elevation={0}>
        <Tabs value={activeTab} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab label="Overview" />
          <Tab label="Related" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: "white", width: "93%", height: "300px",p:3}}>
              <Typography variant="h5" sx={{ mb: 2 }}>Section Heading</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    disabled={emailEdit}
                    label="Email*"
                    placeholder="value@gmail.com"
                    variant="standard"
                    fullWidth
                    sx={{ width: "35ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setEmailEdit(true)}
                  />
                </Grid>
                <Grid item xs={6} >
                  <TextField
                    disabled={phoneEdit}
                    label="Phone Number*"
                    placeholder="414 414 414"
                    variant="standard"
                    fullWidth
                    sx={{ width: "35ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setPhoneEdit(!phoneEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setPhoneEdit(true)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 0 }} >
                <Grid item xs={6}>
                  <TextField
                    disabled={emailEdit}
                    label="State*"
                    placeholder="TamilNadu"
                    variant="standard"
                    fullWidth
                    sx={{ width: "35ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setEmailEdit(true)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled={phoneEdit}
                    label="Zipcode*"
                    placeholder="414 414 414"
                    variant="standard"
                    fullWidth
                    sx={{ width: "35ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setPhoneEdit(!phoneEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setPhoneEdit(true)}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{mt:5}} >
                <Grid item xs={6}>
                <TextField
                    disabled={phoneEdit}
                    label="Bio*"
                    placeholder="414 414 414"
                    variant="standard"
                    fullWidth
                    sx={{ width: "76ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setPhoneEdit(!phoneEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setPhoneEdit(true)}
                  />
                </Grid>
                
              </Grid>
            </Box>

            <Box sx={{ backgroundColor: "white", width: "93%", height: "250px", p: 3,mt:3 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Typography</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    disabled={emailEdit}
                    label="Cardnumber*"
                    placeholder="value@gmail.com"
                    variant="standard"
                    fullWidth
                    sx={{ width: "75ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setEmailEdit(true)}
                  />
                </Grid>
                
              </Grid>
              <Grid container spacing={2} sx={{ mt: 0 }} >
                <Grid item xs={12}>
                  <TextField
                    disabled={emailEdit}
                    label="Cardholdername*"
                    placeholder="TamilNadu"
                    variant="standard"
                    fullWidth
                    sx={{ width: "75ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setEmailEdit(true)}
                  />
                </Grid>
                
              </Grid>
              <Grid container sx={{mt:2}} >
                <Grid item xs={6}>
                <TextField
                    disabled={phoneEdit}
                    label="MM/YY*"
                    placeholder="414 414 414"
                    variant="standard"
                    fullWidth
                    sx={{ width: "35ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setPhoneEdit(!phoneEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setPhoneEdit(true)}
                  />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    disabled={phoneEdit}
                    label="CVC/CV2*"
                    placeholder="414 414 414"
                    variant="standard"
                    fullWidth
                    sx={{ width: "35ch" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setPhoneEdit(!phoneEdit)}>
                            <EditIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={() => setPhoneEdit(true)}
                  />
                </Grid>
              </Grid>
            </Box>
               </Grid>

          <Grid item xs={4} >
            <Box sx={{ backgroundColor: "white", width: "100%", height: "450px" }}>
              <Typography variant='h5' sx={{ padding: "20px" }}>Timeline</Typography>
              <hr style={{ border: "1px solid black", margin: "0 20px" }} />
              <Accordion defaultExpanded sx={{marginTop:"20px",marginLeft:"30px",marginRight:"20px"}}>
                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#fff' }} />} sx={{ color: '#fff', backgroundColor: '#1976D2' }}>
                  <Typography component="span">Upcoming & Overdue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#1976D2' }} />
                        <TimelineConnector sx={{ bgcolor: '#1976D2' }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box display="flex" justifyContent="space-between">
                          <Typography>Follow Up</Typography>
                          <Typography variant="caption" color='primary'>16:30:42, 4 Feb 2022</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Meghana P has an upcoming task about OVUM Hospitals- India.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                  <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#1976D2' }} />
                        <TimelineConnector sx={{ bgcolor: '#1976D2' }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box display="flex" justifyContent="space-between">
                          <Typography>Follow Up</Typography>
                          <Typography variant="caption" color='primary'>16:30:42, 4 Feb 2022</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Meghana P has an upcoming task about OVUM Hospitals- India.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded sx={{marginTop:"20px",marginLeft:"30px",marginRight:"20px"}}>
                <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#fff' }} />} sx={{ color: '#fff', backgroundColor: '#1976D2' }}>
                  <Typography component="span">Completed</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#1976D2' }} />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Box display="flex" justifyContent="space-between">
                          <Typography>Follow Up</Typography>
                          <Typography variant="caption" color='primary'>16:30:42, 4 Feb 2022</Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Meghana P has an upcoming task about OVUM Hospitals- India.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        {/* Content for the "Related" tab */}
      </TabPanel>
    </Box>
  );
}
