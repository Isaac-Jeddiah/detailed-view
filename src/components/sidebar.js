import { IconButton, List, ListItem, } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import AppIcon from '../assets/appIcon';

const Sidebar = ({ selectedIndex, setSelectedIndex }) => {

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <List
            sx={{ height: "100vh", width: '100%', maxWidth: 64, bgcolor: '#283356', padding: "0", overflow: "scroll", scrollbarWidth: "none" }}
            aria-label="contacts"
        >
            <ListItem sx={{ margin: "12px", padding: "0" }} >
                <IconButton>
                    <AppIcon />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "10px 0" }} >
                <IconButton>
                    <StarIcon sx={{ color: "white" }} />
                </IconButton>
            </ListItem>


            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <StarIcon sx={{ color: selectedIndex === 1 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}>
                    <StarIcon sx={{ color: selectedIndex === 2 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}>
                    <StarIcon sx={{ color: selectedIndex === 3 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}>
                    <StarIcon sx={{ color: selectedIndex === 4 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>


            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>


            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>

            <ListItem sx={{ margin: "12px", padding: "0" }}>
                <IconButton selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}>
                    <StarIcon sx={{ color: selectedIndex === 5 ? "blue" : "white" }} />
                </IconButton>
            </ListItem>


        </List>
    )
}

export default Sidebar