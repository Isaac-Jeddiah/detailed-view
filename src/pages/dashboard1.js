import React, { useEffect, useState } from 'react';
import SecondarySidebar from '../components/secondarySidebar';
import { Box, IconButton, List } from '@mui/material';
import Navbar from '../components/navbar';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import DataTable from '../components/table';
import Filterbar from '../components/filterbar';
import DetailsTable from '../components/details';
import Sidebar from '../components/sidebar';
import { FormProvider } from '../context/Formcontext';
import './dashboard1.css';

const Dashboard1 = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, [selectedIndex]);

    return (
        <Box className="dashboardContainer">
            <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Box className={`secondarySidebar ${open ? "open" : "closed"}`}>
                <SecondarySidebar selectedIndex={selectedIndex} open={open} />
                <IconButton size='small' edge='start' className="toggleButton" onClick={() => setOpen((prev) => !prev)}>
                    {open ? <ArrowBackIos className="toggleIcon" /> : <ArrowForwardIos className="toggleIcon" />}
                </IconButton>
            </Box>
            <List className="mainContent">
                <Navbar />
                <Box className="contentBox">
                    <Box className="formProviderBox">
                        <FormProvider>
                            <Filterbar />
                            <DetailsTable />
                        </FormProvider>
                    </Box>
                </Box>
            </List>
        </Box>
    );
};

export default Dashboard1;
