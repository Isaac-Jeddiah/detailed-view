import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useFormState } from "../context/Formcontext";
import { useTheme } from "@mui/material/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import DataTable from "./table";
import { ButtonGroup } from "@mui/material";

const US_STATES = [
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

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default function DetailsTable() {
  const theme = useTheme();

  const formContext = useFormState();

  const { formState, updateField } = formContext;

  const [activeTab, setActiveTab] = useState(0);

  const [allFieldsEditable, setAllFieldsEditable] = useState(false);

  const handleChange = (event, newValue) => setActiveTab(newValue);

  const [editingFields, setEditingFields] = useState({});
  const [editableStates, setEditableStates] = useState({
    name: false,
    phone: false,
  });

  const handleEdit1 = (fieldName) => {
    setEditingFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const [state, setState] = useState("Alabama");
  const [editableFields, setEditableFields] = useState({
    name: false,
    email: false,
    phone: false,
    state: false,
    zipcode: false,
    bio: false,
  });

  // Store temporary values while editing
  const [tempValues, setTempValues] = useState({});

  // Initialize temp values from form state when component mounts
  useEffect(() => {
    setTempValues({ ...formState });
  }, [formState]);

  // Handle text field changes (updates temp values only)
  const handleFieldChange = (field) => (event) => {
    updateField(field, event.target.value);
    setTempValues({
      ...tempValues,
      [field]: event.target.value,
    });
  };

  // Enable edit mode for a field
  const handleEdit = (field) => {
    setEditableFields({
      ...editableFields,
      [field]: true,
    });
    // Ensure temp value is synchronized with current form state
    setTempValues({
      ...tempValues,
      [field]: formState[field],
    });
  };

  // Save changes to a field
  const handleSave = (field) => {
    // Update the global form state
    localStorage.setItem("formState", JSON.stringify(formState));

    updateField(field, tempValues[field]);
    // Exit edit mode
    setEditableFields({
      ...editableFields,
      [field]: false,
    });
  };

  // Cancel editing a field
  const handleCancel = (field) => {
    // Revert temp value to current form state
    setTempValues({
      ...tempValues,
      [field]: formState[field],
    });
    // Exit edit mode
    setEditableFields({
      ...editableFields,
      [field]: false,
    });
  };

  const textFieldsContainerRef = React.useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        textFieldsContainerRef.current &&
        !textFieldsContainerRef.current.contains(event.target)
      ) {
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
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },
          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: {
        segments: [
          {
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },
          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: {
        segments: [
          {
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },
          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: {
        segments: [
          {
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },
          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
  ];

  const overdueItems = [
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: {
        segments: [
          {
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },
          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: {
        segments: [
          {
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },
          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
    {
      title: "Follow Up",
      date: "16:30:42, 4 Feb 2022",
      description: {
        segments: [
          {
            type: "link",
            text: "Meghana P",
            url: "/profile/meghana",
          },

          {
            type: "text",
            text: " has an upcoming task about a meeting at ",
          },
          {
            type: "link",
            text: "OVUM Hospitals- India",
            url: "/hospitals/ovum",
          },
          {
            type: "text",
            text: ".",
          },
        ],
      },
    },
  ];

  //Modified renderTimelineItems function
  const renderTimelineItems = (items, showMore, maxItems = 2) => {
    const displayItems = showMore ? items : items.slice(0, maxItems);

    return displayItems.map((item, index) => (
      <TimelineItem
        key={index}
        sx={{
          "&:not(:last-child)": {
            "& .MuiTimelineContent-root": {
              paddingBottom: "8px",
              marginBottom: "8px",
            },
          },
        }}
      >
        <TimelineSeparator>
          <TimelineDot
            sx={{
              width: 48, // Adjust this value as needed
              height: 48, // Keep same as width for symmetry
              backgroundColor: "transparent", // Make background transparent
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExpandMore sx={{ color: "#1976D2" }} />
          </TimelineDot>
          {index !== displayItems.length - 1 && (
            <TimelineConnector
              sx={{ bgcolor: "rgba(25, 118, 210, 0.12)", boxShadow: "none" }}
            />
          )}
        </TimelineSeparator>

        <TimelineContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography
              color="primary"
              sx={{ fontSize: theme.typography.fontSizes.contentSize }}
            >
              {item.date}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "var(--fontFamily)",
              fontSize: "var(--fontSize1rem)",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.15px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            {item.description.segments.map((segment, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--fontFamily)",
                  fontSize: theme.typography.fontSizes.contentSize,
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0.15px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  display: "inline",
                }}
              >
                {segment.type === "link" ? (
                  <Link
                    href={segment.url}
                    component="button"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Navigating to:", segment.url);
                    }}
                    sx={{
                      color: "#1976D2",
                      textDecoration: "none",
                      display: "inline",
                      "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
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

  const accordionStyle = {
    minHeight: "60px",
    height: "auto",
    border: "none",
    width: "100%",
    maxWidth: "100%",
    boxShadow: "none",
    borderTop: "none",
    marginTop: "0px !important",
    position: "relative", // Added for absolute positioning of divider
    "& .MuiAccordion-region": {
      height: "250px",
      overflow: "auto",
      "&::-webkit-scrollbar": {
        width: "0px",
      },
    },
    "&:before": {
      display: "none",
    },
    "& .MuiAccordionSummary-root": {
      borderTop: "none",
      "&:before": {
        display: "none",
      },
      "&:after": {
        // Add divider after summary
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1px",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        zIndex: 1,
      },
    },
  };

  const summaryStyle = {
    position: "relative",
    borderTop: "none",
    color: "#1976D2",
    width: "100%",
    maxWidth: "100%",
    height: "40px !important",
    minHeight: "40px !important",
    paddingRight: "16px !important",
    borderRadius: "0px",
    display: "flex",
    alignItems: "center",
    "& .MuiAccordionSummary-content": {
      margin: "0 !important",
      alignItems: "center",
      borderTop: "none",
    },
    "&.Mui-expanded": {
      height: "40px !important",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    "&:before": {
      display: "none",
    },
    "& .MuiAccordionSummary-root": {
      borderTop: "none",
      "&:before": {
        display: "none",
      },
    },
  };

  //
  const fieldSpacing = theme.typography.spaces.fieldSpacing; // Adjust field spacing here
  const dividerSpacing = theme.typography.spaces.dividerSpacing; // Adjust heading-divider spacing here
  const dividerabovespacing = theme.typography.spaces.dividerabovespacing; //Adjust divider-below spacing her
  const Overviewbottomspacing = theme.typography.spaces.Overviewbottomspacing; //Adjust Overview bottom
  return (
    <Box
      sx={{
        position: "relative",

        padding: "0px 0px 0px 0px",
      }}
    >
      <Box
        sx={{
         color: "initial", // Resets text color to browser default (usually black)
          fontStyle: "initial", // Resets font style to normal
          backgroundColor: "initial",
          position: "relative",
          width: "100%",
          height: "calc(100vh)",
          overflow: "hidden",
        }}
      >
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{
            marginBottom: "-16px",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleChange}
            sx={{
              minWidth: "444px",
              height: "4px",
              marginBottom: Overviewbottomspacing,
              backgroundColor: "#f4f5fa",
              //ml: '304px',
              "& .MuiTab-root": {
                fontSize: theme.typography.fontSizes.contentSize,
                minHeight: "4px",
              },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Related" />
          </Tabs>
        </AppBar>

        <Grid item xs={12} md={7} lg={7} ml={-4.4}>
          <Grid container columnSpacing={"16px"}>
            <Grid item xs={8}>
              <Grid container sx={{ width: "100%", flexWrap: "wrap" }}>
                <Box
                  sx={{
                    width: "100%",
                    p: 2.4,

                    mt: -2.4,
                    borderRadius: "4px",
                    overflow: "hidden",
                    flexWrap: "wrap",
                  }}
                >
                  <TabPanel value={activeTab} index={0}>
                    <Grid>
                      {/*Section heading */}
                      <Box
                        sx={{
                          height: "auto",
                          backgroundColor: "white",
                          width: "100%",

                          borderRadius: "4px",
                          // borderTop: "1px solid #747474",
                          gap: "0px",
                          p: "20px 20px 20px 20px",

                          borderRadius: "4px",
                          overflow: "hidden",
                          flexWrap: "wrap",
                        }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mb={dividerabovespacing}
                          mt={0}
                         
                        >
                          <Typography 
                           fontSize={theme.typography.fontSizes.subheadingSize}
                            fontWeight={theme.typography.fontWeight.subheadingWeight}
                            padding="0 0 8px!important 0"
                          >
                            Section Heading
                          </Typography>
                        </Box>
                        <Divider sx={{ flexGrow: 1, mb: dividerSpacing }} />

                        <Grid container spacing={fieldSpacing}>
                          <Grid item xs={6}>
                            <TextField
                              label="Name*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              value={
                                editableFields.name
                                  ? tempValues.name
                                  : formState.name
                              }
                              
                              onFocus={() => handleEdit("name")}
                              onBlur={() => {
                                //handleSaveValue("name");
                              }}
                              onChange={handleFieldChange("name")}
                              //                                disabled={!allFieldsEditable}
                              sx={{
                              
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                                
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                               
                              }}
                              InputLabelProps={{
                                sx:{
                                  fontSize:theme.typography.fontSizes.labelsize
                                },
                               
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                               
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true, // Keep label shrunk
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),
                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": {
                                        color: "#1976d2",
                                      },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <>
                                        <EditIconButton
                                          onClick={() =>
                                            setAllFieldsEditable(
                                              !allFieldsEditable
                                            )
                                          }
                                          edge="end"
                                          sx={{
                                            marginLeft: allFieldsEditable
                                              ? "4px"
                                              : "0px",
                                          }}
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
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              value={
                                editableFields.phone
                                  ? tempValues.phone
                                  : formState.phone
                              }
                              onFocus={() => handleEdit("phone")}
                              onBlur={() => {
                                //handleSaveValue("phone");
                              }}
                              onChange={handleFieldChange("phone")}
                              //                                disabled={!allFieldsEditable}
                              sx={{
                              
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                                
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                               
                              }}
                              InputLabelProps={{
                                
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                sx: {
                                  fontSize:theme.typography.fontSizes.labelsize
                                ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "#444444",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true, // Keep label shrunk
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  color: "#181818",
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),

                                 
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": {
                                        color: "#1976d2",
                                      },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <>
                                        <EditIconButton
                                          onClick={() =>
                                            setAllFieldsEditable(
                                              !allFieldsEditable
                                            )
                                          }
                                          edge="end"
                                          sx={{
                                            marginLeft: allFieldsEditable
                                              ? "4px"
                                              : "0px",
                                          }}
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
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              select
                              value={formState.state}
                              onFocus={() => handleEdit("state")}
                              onBlur={(e) => {
                                //handleSaveValue("state");
                                setState(e.target.value);
                              }}
                              onChange={(e) => {
                                updateField("state", e.target.value);
                                setState(e.target.value);
                                handleFieldChange("state", e.target.value);
                              }}
                              //                                disabled={!allFieldsEditable}
                              size="small"
                              sx={{
                                "& .MuiInput-underline:before": {
                                  borderBottomWidth: "1px",
                                  borderBottomStyle: "solid",
                                  borderBottomColor: "#d2d2d2 !important",
                                },
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                                "& .MuiInputLabel-root.MuiInputLabel-standard":
                                  {
                                    transform:
                                      "translate(0, -1.5px) scale(0.75)",
                                    transformOrigin: "top left",
                                    color: "#444444 !important",
                                  },
                                "& .MuiInputLabel-root": {
                                  color: "#444444 !important",
                                  "&.Mui-focused": {
                                    color: "#444444 !important",
                                  },
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottomWidth: "1px",
                                  borderBottomColor: "#d2d2d2",
                                },
                                "& .MuiInput-underline:hover:after": {
                                  borderBottomWidth: "1px",
                                  borderBottomColor: "#d2d2d2",
                                },
                              }}
                              InputLabelProps={{
                                
                                
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                sx: {
                                  fontSize:theme.typography.fontSizes.labelsize
                                ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "inherit",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true,
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),

                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
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
                              label="Zip Code*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              value={
                                editableFields.zipcode
                                  ? tempValues.zipcode
                                  : formState.zipcode
                              }
                              onFocus={() => handleEdit("zipcode")}
                              onBlur={() => {
                                //handleSaveValue("zipcode");
                              }}
                              onChange={handleFieldChange("zipcode")}
                              //                                disabled={!allFieldsEditable}
                              size="small"
                              sx={{
                               
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                                "& .MuiInputLabel-root.MuiInputLabel-standard":
                                  {
                                    transform:
                                      "translate(0, -1.5px) scale(0.75)",
                                    transformOrigin: "top left",
                                    color: "#444444 !important",
                                  },
                                "& .MuiInputLabel-root": {
                                  color: "#444444 !important",
                                  "&.Mui-focused": {
                                    color: "#444444 !important",
                                  },
                                },
                                
                              
                                  "& .MuiInput-underline:before": {
                                    borderBottom: "1px solid #d2d2d2",
                                  },
                                  "& .MuiInput-underline:hover:before": {
                                    borderBottom: "1px solid #d2d2d2 !important", 
                                  },
                                  "& .MuiInput-underline:after": {
                                    borderBottom: "1px solid #d2d2d2 !important",
                                  },
                                  "& .MuiInput-underline.Mui-focused:after": {
                                    borderBottom: "1px solid #d2d2d2 !important",
                                    transform: "none !important",
                                  },
                                  
                                  
                                
                              }}
                              InputLabelProps={{
                                
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                sx: { fontSize:theme.typography.fontSizes.labelsize
                                  ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "inherit",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true,
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),
                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": { color: "#1976d2" },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <EditIconButton
                                        onClick={() => {
                                          handleEdit("zipcode");
                                          setAllFieldsEditable(
                                            !allFieldsEditable
                                          );
                                        }}
                                      />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              label="Bio*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              multiline
                              rows={3}
                              value={
                                editableFields.bio
                                  ? tempValues.bio
                                  : formState.bio
                              }
                              onFocus={() => handleEdit("bio")}
                              onBlur={() => {
                                ///handleSaveValue("bio");
                              }}
                              onChange={handleFieldChange("bio")}
                              //                                disabled={!allFieldsEditable}
                              size="small"
                              sx={{
                              
                                
                                "& .MuiInputBase-root": { height: "auto" },
                                "& .MuiInput-root": { marginTop: "10px" },
                                
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                               
                              }}
                              InputLabelProps={{
                               
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                sx: { fontSize:theme.typography.fontSizes.labelsize
                                  ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "inherit",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true,
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                color: "#181818 !important",
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,

                                  color: "#181818",
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),

                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "0px",
                                      "&.Mui-disabled": { color: "#1976d2" },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <EditIconButton
                                        onClick={() => {
                                          handleEdit("bio");
                                          setAllFieldsEditable(
                                            !allFieldsEditable
                                          );
                                        }}
                                      />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      {/*Typograpgy */}
                      <Box
                        sx={{
                          backgroundColor: "white",
                          maxWidth: "100%",
                          width: "100%",

                          borderRadius: "4px",
                          //boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',

                          mt: 2.4,
                          p: 2.4,
                        }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mb={dividerabovespacing}
                          mt={0}
                        >
                          <Typography
                            sx={{
                              fontSize:
                                theme.typography.fontSizes.subheadingSize,
                                fontWeight:theme.typography.fontWeight.subheadingWeight
                            
                            }}
                            
                            padding="0 0 8px!important 0"
                          >
                            Typography
                          </Typography>
                        </Box>
                        <Divider sx={{ flexGrow: 1, mb: dividerSpacing }} />

                        <Grid container spacing={fieldSpacing}>
                          <Grid item xs={12}>
                            <TextField
                              label="Card Number*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              value={
                                editableFields.cardNumber
                                  ? tempValues.cardNumber
                                  : formState.cardNumber
                              }
                              onFocus={() => handleEdit("cardNumber")}
                              onBlur={() => {
                                //handleSaveValue("cardNumber");
                              }}
                              onChange={handleFieldChange("cardNumber")}
                              //                                disabled={!allFieldsEditable}
                              size="small"
                              sx={{
                              
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                                
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                               
                              }}
                              InputLabelProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                sx: { fontSize:theme.typography.fontSizes.labelsize
                                  ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "inherit",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true,
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "8px" }),

                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
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
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": { color: "#1976d2" },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <EditIconButton
                                        onClick={() => {
                                          handleEdit("cardNumber");
                                          setAllFieldsEditable(
                                            !allFieldsEditable
                                          );
                                        }}
                                      />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              label="Card Holder Name*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              value={
                                editableFields.cardHolder
                                  ? tempValues.cardHolder
                                  : formState.cardHolder
                              }
                              onFocus={() => handleEdit("cardHolder")}
                              onBlur={() => {
                                //handleSaveValue("cardHolder");
                              }}
                              onChange={handleFieldChange("cardHolder")}
                              //                                disabled={!allFieldsEditable}
                              size="small"
                              sx={{
                              
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                                
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                               
                              }}
                              InputLabelProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                sx: { fontSize:theme.typography.fontSizes.labelsize
                                  ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "inherit",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true,
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),

                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": { color: "#1976d2" },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <EditIconButton
                                        onClick={() => {
                                          handleEdit("cardHolder");
                                          setAllFieldsEditable(
                                            !allFieldsEditable
                                          );
                                        }}
                                      />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <TextField
                              label="Expiry*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              defaultValue={"6/28"}
                              value={
                                editableFields.expiry
                                  ? tempValues.expiry
                                  : formState.expiry
                              }
                              onFocus={() => handleEdit("expiry")}
                              onBlur={() => {
                                //handleSaveValue("expiry");
                              }}
                              onChange={handleFieldChange("expiry")}
                              //                                disabled={!allFieldsEditable}
                              size="small"
                              sx={{
                              
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                                
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                               
                              }}
                              InputLabelProps={{
                               style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },

                                sx: { fontSize:theme.typography.fontSizes.labelsize
                                  ,
                                  color: allFieldsEditable
                                    ? "#1976d2"
                                    : "inherit",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                                shrink: true,
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },

                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),

                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": { color: "#1976d2" },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <EditIconButton
                                        onClick={() => {
                                          handleEdit("expiry");
                                          setAllFieldsEditable(
                                            !allFieldsEditable
                                          );
                                        }}
                                      />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              label="CVC/CV2*"
                              variant={
                                !allFieldsEditable ? "standard" : "outlined"
                              }
                              fullWidth
                              value={
                                editableFields.cvc
                                  ? tempValues.cvc
                                  : formState.cvc
                              }
                              onFocus={() => {
                                if (!allFieldsEditable) {
                                  handleEdit("cvc");
                                }
                              }}
                              onBlur={() => {
                                //handleSaveValue("cvc");
                              }}
                              onChange={handleFieldChange("cvc")}
                              // Using readOnly instead of disabled
                              sx={{
                              
                                "& .MuiInput-underline:before": {
                                  borderBottom: "1px solid #d2d2d2",
                                },
                                "& .MuiInput-underline:hover:before": {
                                  borderBottom: "1px solid #d2d2d2 !important", 
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                },
                                "& .MuiInput-underline.Mui-focused:after": {
                                  borderBottom: "1px solid #d2d2d2 !important",
                                  transform: "none !important",
                                },
                                
                                "& .MuiInputBase-root": { height: "36px" },
                                "& .MuiInput-root": { marginTop: "3px" },
                               
                              }}
                              InputProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#181818"
                                    : "#181818",
                                },
                                readOnly: !allFieldsEditable,
                                sx: {
                                  fontSize:
                                    theme.typography.fontSizes.contentSize,
                                  ...(allFieldsEditable
                                    ? {}
                                    : { paddingTop: "5px" }),
                                  ...(allFieldsEditable && {
                                    "&:after": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                    "&:before": {
                                      borderBottom:
                                        "1px solid rgba(0, 0, 0, 0.42)",
                                    },
                                    "&:hover:before": {
                                      borderBottom: "2px solid #1976d2",
                                    },
                                  }),
                                },
                                endAdornment: (
                                  <InputAdornment
                                    position="end"
                                    sx={{
                                      position: "relative",
                                      marginRight: "4px",
                                      marginBottom: "5px",
                                      "&.Mui-disabled": { color: "#444444" },
                                    }}
                                  >
                                    {!allFieldsEditable && (
                                      <EditIconButton
                                        onClick={() => {
                                          handleEdit("cvc");
                                          setAllFieldsEditable(true);
                                        }}
                                      />
                                    )}
                                  </InputAdornment>
                                ),
                              }}
                              InputLabelProps={{
                                style: {
                                  color: allFieldsEditable
                                    ? "#444444"
                                    : "#444444",
                                },
                                shrink: true,
                                sx: { fontSize:theme.typography.fontSizes.labelsize
                                  ,
                                  color: "#444444",
                                  ...(allFieldsEditable && {
                                    backgroundColor: "white",
                                  }),
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      {/* save cancel buton*/}
                      {/* Buttons */}

                      <Box>
                        {/* Save Button */}
                        {allFieldsEditable && (
                          <>
                            <Box
                              sx={{
                                backgroundColor: "white",
                                maxWidth: "100%",
                                width: "100%",

                                borderRadius: "4px",
                                height: "30px",
                                margin: "0 auto",

                                mt: 2.4,
                                p: 2.4,
                              }}
                            >
                              <Grid
                                item
                                xs={12}
                                container
                                justifyContent="flex-end"
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    gap: 2,
                                  }}
                                >
                                  <Button
                                    onClick={() => {
                                      const savedData = JSON.parse(
                                        localStorage.getItem("formState")
                                      );

                                      if (savedData) {
                                        Object.entries(savedData).forEach(
                                          ([field, value]) => {
                                            updateField(field, value);
                                          }
                                        );
                                      }
                                      setAllFieldsEditable(!allFieldsEditable);
                                      handleCancel("email");
                                      handleCancel("phone");
                                      handleCancel("expiry");
                                      handleCancel("cvc");
                                      handleCancel("name");
                                      handleCancel("state");
                                      handleCancel("zip");
                                      handleCancel("bio");
                                      handleCancel("cardNumber");
                                      handleCancel("cardHolder");
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
                                      handleSave("name");
                                      handleSave("email");
                                      handleSave("phone");
                                      handleSave("expiry");
                                      handleSave("cvc");
                                      handleSave("cardNumber");
                                      handleSave("state");
                                      handleSave("zipcode");
                                      handleSave("bio");
                                      handleSave("cardHolder");

                                      setAllFieldsEditable(!allFieldsEditable);
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
                              </Grid>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Grid>
                  </TabPanel>
                  {/* Deals */}
                  <TabPanel value={activeTab} index={1}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        maxWidth: "100%",
                        width: "100%",

                        borderRadius: "4px",
                        height: "auto",
                        margin: "0 auto",

                        p: 2.4,
                      }}
                    >
                      <Typography
                            sx={{
                              fontSize:
                                theme.typography.fontSizes.subheadingSize,
                                fontWeight:theme.typography.fontWeight.subheadingWeight
                            
                            }}
                            mb={dividerabovespacing}
                          >
                        Deals
                      </Typography>
                      <Divider mb={dividerSpacing} />
                      <DataTable />
                    </Box>
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container sx={{ width: "100%", flexWrap: "wrap" }}>
                <Box
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "white",
                    mt: 2,
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px",
                    padding: "20px 28px",
                    gap: "0px",

                    flexWrap: "wrap",
                  }}
                >
                  {/* <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={0.5}
                      mt={1.2}
                    >
                      <Typography variant="h6" padding="0 0 8px!important 0">
                        Timeline
                      </Typography>
                    </Box> */}
                  {/* <Divider sx={{ flexGrow: 1, mb: 1.9 }} /> */}
                  <Accordion defaultExpanded sx={accordionStyle}>
                    <AccordionSummary
                      expandIcon={<ExpandMore sx={{ color: "#1976D2" }} />}
                      sx={summaryStyle}
                    >
                      <Typography sx={{ marginLeft: "-8px", fontSize:
                                theme.typography.fontSizes.subheadingSize,
                                fontWeight:theme.typography.fontWeight.subheadingWeight
                            
                               }}>
                        Upcoming & Overdue
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                      }}
                    >
                      <Timeline
                        sx={{
                          width: "100%",
                          margin: "0 ",
                          padding: "0",
                          [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                          },

                          "& .MuiTimelineDot-root": {
                            // Keep same as width for symmetry
                            width: "16px",
                            height: "16px",
                            backgroundColor: "transparent", // Make background transparent
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 0,
                            boxShadow: "none",
                            margin: "11.5px 0", // Maintain MUI Timeline spacing
                            "& .MuiSvgIcon-root": {
                              color: "#1976D2",
                              fontSize: "inherit", // Inherit the size from the parent
                            },
                          },

                          mb: 1,
                        }}
                      >
                        {renderTimelineItems(overdueItems, showMoreOverdue)}
                      </Timeline>
                      <Box
                        sx={{
                          mt: "auto",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Chip
                          label={showMoreOverdue ? "View Less" : "View More"}
                          variant={"outlined"}
                          onClick={() => setShowMoreOverdue(!showMoreOverdue)}
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion defaultExpanded sx={accordionStyle}>
                    <AccordionSummary
                      expandIcon={<ExpandMore sx={{ color: "#1976D2" }} />}
                      sx={summaryStyle}
                    >
                      <Typography sx={{ marginLeft: "-8px", fontSize:
                                theme.typography.fontSizes.subheadingSize,
                                fontWeight:theme.typography.fontWeight.subheadingWeight
                            
                               }}>
                        Completed
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                      }}
                    >
                      <Timeline
                        sx={{
                          width: "100%",
                          margin: "0 ",
                          padding: "0",
                          [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                          },

                          "& .MuiTimelineDot-root": {
                            // Keep same as width for symmetry
                            width: "16px",
                            height: "16px",
                            backgroundColor: "transparent", // Make background transparent
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 0,
                            boxShadow: "none",
                            margin: "11.5px 0", // Maintain MUI Timeline spacing
                            "& .MuiSvgIcon-root": {
                              color: "#1976D2",
                              fontSize: "inherit", // Inherit the size from the parent
                            },
                          },
                          mb: 1,
                        }}
                      >
                        {renderTimelineItems(completedItems, showMoreCompleted)}
                      </Timeline>
                      <Box
                        sx={{
                          mt: "auto",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Chip
                          label={showMoreCompleted ? "View Less" : "View More"}
                          variant={"outlined"}
                          onClick={() =>
                            setShowMoreCompleted(!showMoreCompleted)
                          }
                          sx={{ cursor: "pointer" }}
                        />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
