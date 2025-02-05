import React, { useEffect, useState } from 'react';
import SecondarySidebar from '../components/secondarySidebar';
import { Box, IconButton, List } from '@mui/material';
import Navbar from '../components/navbar';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import DataTable from '../components/table';
import Filterbar from '../components/filterbar';
import DetailsTable from '../components/details';
import Sidebar from '../components/sidebar';
const Dashboard1 = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, [selectedIndex]);

    return (
        <Box display="flex" height="90vh">
          <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Box
                sx={{
                    position: 'relative',
                    height: "100%",
                    width: open ? "300px" : 15,
                    backgroundColor: '#f4f5fa',
                    borderRight: '1px solid #ddd',
                }}
            >
                <SecondarySidebar selectedIndex={selectedIndex} open={open} />

                <IconButton size='small' edge='start'
                    sx={{
                        position: "absolute",
                        bottom: 16,
                        right: -12,
                        zIndex: 1,
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: "5px",
                        margin: "0",
                        ":hover": {
                            backgroundColor: "#0275f0"
                        }
                    }}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <ArrowBackIos sx={{ fontSize: "14px", transform: "translateX(3px)" }} /> : <ArrowForwardIos sx={{ fontSize: "14px", transform: "translateX(1px)" }} />}
                </IconButton>
            </Box>

            <List
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    padding: 0,
                }}
            >
                <Navbar />
                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "#f4f5fa",
                        padding: "20px",
                        marginTop: "-20px", 
                    }}
                >
                    <Filterbar />
                    <DetailsTable />
                </Box>
            </List>
        </Box>
    );
};

export default Dashboard1;
