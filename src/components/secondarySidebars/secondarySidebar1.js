import React from 'react';
import { Star } from '@mui/icons-material';
import { Wifi } from '@mui/icons-material';
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
} from '@mui/material';
import AppIcon from '../../assets/appIcon';
import { Archive, ExpandLess, ExpandMore, Home, Mail, Favorite, Settings } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
const SecondarySidebar1 = ({ open }) => {
    const [openStates, setOpenStates] = React.useState({});

    const handleClick = (index) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
const theme= useTheme();
    return (
        <List
            sx={{
                height: '100vh',
                width: '100%',
                maxWidth: 256,
                bgcolor: '#fff',
                marginRight: '1px',
                padding: '0',
                boxShadow: '0px 2px 1px 1px #00000033',
                overflow: 'hidden',
                display: open ? 'flex' : 'none',
                flexDirection: 'column',
                fontSize:theme.typography.fontSizes.contentSize
            }}
            aria-label="contacts"
        >
            <ListItem sx={{ paddingTop: '20px', paddingBottom: '10px', gap: '5px' }}>
                <AppIcon />
                <ListItemText
                    primary="LogoIpsum"
                    sx={{ margin: '0' }}
                    slotProps={{ primary: { sx: { fontWeight: '700' } } }}
                />
            </ListItem>

            {/* Add your placeholder TextField here */}
            <ListItem sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
                <TextField 
                    size='small' 
                    id="outlined-basic" 
                    placeholder='Placeholder' 
                    variant="outlined" 
                    fullWidth 
                />
            </ListItem>

            <List
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    marginBottom: '50px',
                    position: 'relative',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                        transition: 'background-color 0.3s, opacity 0.3s',
                        opacity: 0,
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                        transition: 'background-color 0.3s',
                    },
                    '&:hover::-webkit-scrollbar-thumb': {
                        backgroundColor: "#999",
                        borderRadius: '4px',
                        opacity: 1,
                    },
                    '&:hover::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#555',
                    },
                    '&:hover::-webkit-scrollbar-track': {
                        backgroundColor: '#f0f0f0',
                    },
                }}
            >
                <ListItemButton onClick={() => handleClick(0)}>
                    <ListItemIcon>
                        <Home /> {/* Home Icon */}
                    </ListItemIcon>
                    <ListItemText primary="List item 1" />
                    {openStates[0] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStates[0]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Favorite />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Archive />
                            </ListItemIcon>
                            <ListItemText primary="Archived" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={() => handleClick(1)}>
                    <ListItemIcon>
                        <Star /> {/* Mail Icon */}
                    </ListItemIcon>
                    <ListItemText primary="List item 2" />
                    {openStates[1] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStates[1]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Star />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Archive />
                            </ListItemIcon>
                            <ListItemText primary="Archived" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={() => handleClick(2)}>
                    <ListItemIcon>
                        <Star /> {/* Settings Icon */}
                    </ListItemIcon>
                    <ListItemText primary="List item 3" />
                    {openStates[2] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStates[2]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Star />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Archive />
                            </ListItemIcon>
                            <ListItemText primary="Archived" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Now these are the three different icons */}
                {Array.from({ length: 3 }).map((_, index) => {
                    let IconComponent;
                    switch (index) {
                        case 0:
                            IconComponent = <Home />;
                            break;
                        case 1:
                            IconComponent = <Star />;
                            break;
                        case 2:
                            IconComponent = < Wifi />;
                            break;
                        default:
                            IconComponent = <Home />;
                            break;
                    }
                    return (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                                {IconComponent}
                            </ListItemIcon>
                            <ListItemText primary={`List Item ${index + 4}`} />
                        </ListItemButton>
                    );
                })}
            </List>
        </List>
    );
};

export default SecondarySidebar1;

