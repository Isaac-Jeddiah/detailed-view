import React, { useEffect, useState } from 'react';
import SecondarySidebar from '../components/secondarySidebar';
import { Box, IconButton, List, Grid } from '@mui/material';
import Navbar from '../components/navbar';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import DataTable from '../components/table';
import Filterbar from '../components/filterbar';
import DetailsTable from '../components/details';
import Sidebar from '../components/sidebar';

const Gridlayout = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [open, setOpen] = useState(true);
    const TOP_MARGIN = 56;
  const NAVBAR_HEIGHT = 56;

  const [dimensions, setDimensions] = useState({
    width: 0,
    rows: 0
  });

    const calculateBoxSizes = () => {
      const containerWidth = window.innerWidth ;
console.log(window.innerHeight)

      const MARGIN = 24;
      const GAPS = 11 * MARGIN; 
      const CONTAINER_PADDING = 2 * 24;
    var a=0;
    if(containerWidth > 1429){a=5}
    if(containerWidth>1583){a=30}
      const availableWidth = containerWidth - 544;
      const smallBoxWidth = ((availableWidth) / 12);
      const bigBoxWidth = (smallBoxWidth * 2) + 16;
      return { smallBoxWidth, bigBoxWidth };
    };
  
    const [boxSizes, setBoxSizes] = React.useState({ smallBoxWidth: 0, bigBoxWidth: 0 });
  
    React.useEffect(() => {
      const handleResize = () => {
        setBoxSizes(calculateBoxSizes());
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const windowHeight = window.innerHeight;

    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
      const handleResize = () => setHeight(window.innerHeight);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      const calculateDimensions = () => {
       
        const containerWidth = window.innerWidth ;
        console.log(window.innerHeight)
        
        const MARGIN = 16;
        const availableHeight = window.innerHeight - TOP_MARGIN - NAVBAR_HEIGHT;
        const rowPairHeight = (BOX_HEIGHT * 2) + (MARGIN * 2);
        const pairs = Math.floor(availableHeight / rowPairHeight)-1;
  
        setDimensions({
          width: containerWidth,
          
          rows: pairs
        });
      };
  
     
  

      calculateDimensions();
      window.addEventListener('resize', calculateDimensions);
      return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

  const BOX_HEIGHT = boxSizes.smallBoxWidth;
  const rows=Math.floor((windowHeight)/(boxSizes.smallBoxWidth*2))-1;
console.log("rows",rows);

 

    const renderPair = (index) => (
      
      <Box sx={{ marginX: "8px", paddingY: "0px",marginY: "-16px" }} >
                    
      <Box sx={{ padding: 2 }}>
      
        <Grid container spacing={"16px"} justifyContent="center">
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={1} key={index}>
              <Box
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  display: "flex",
                  bgcolor: 'rgba(204, 204, 204, 1)',
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "1 / 1", // Makes it a square
                }}
              >
              
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginY: "16px" }} /> 

      
        <Grid container spacing={"16px"} justifyContent="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: 'rgba(204, 204, 204, 1)',
                  justifyContent: "center",
                  aspectRatio: "1.5 / 1", // Makes it a square
                }}
              >
                
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      </Box>
);

    return (
        <Box display="flex" 
        sx={{
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0
        }}>
          <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <Box
                sx={{
                    position: 'relative',
                    height: "100%",
                    width: "290px" ,

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
                        //padding: "5px",
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
                <Box>
                <Navbar />
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "#f4f5fa",
                        marginTop: "-20px",
                        
                    }}
                >
                      <Box sx={{marginTop: "62px",  }}>
           
                         {Array.from({ length: rows }).map((_, index) => (
                            renderPair()
                        ))}   
                      </Box>
               </Box>
                
            </List>
        </Box>
    );
};

export default Gridlayout;

