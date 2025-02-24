import { IconButton, List, ListItem, } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import AppIcon from '../assets/appIcon';
import './Sidebar.css'
const Sidebar = ({ selectedIndex, setSelectedIndex }) => {

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


const listItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
    <ListItem className="sidebar-listItem" key={index}>
        <IconButton
            className="sidebar-iconButton"
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
        >
            <StarIcon
                className={`sidebar-starIcon ${
                    selectedIndex === index ? 'sidebar-starIcon-selected' : ''
                }`}
            />
        </IconButton>
    </ListItem>
));
    return (
        <List className="sidebar-list" aria-label="contacts">
            
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

         
        </List>
    )
}

export default Sidebar