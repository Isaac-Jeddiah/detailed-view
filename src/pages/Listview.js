import React, { useEffect, useState } from "react";
import SecondarySidebar from "../components/secondarySidebar";
import { Box, IconButton, List } from "@mui/material";
import Navbar from "../components/navbar";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import DataTable from "../components/deals";
import Filterbar from "../components/filterbar";
import ListTable from "../components/list";
import Sidebar from "../components/sidebar";
import { FormProvider } from "../context/Formcontext";
import "./dashboard1.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../theme';
const Dashboard2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [selectedIndex]);

  return (
    <ThemeProvider theme={theme}>
      <Box className="dashboardContainer">
        <Sidebar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Box className={`secondarySidebar ${open ? "open" : "closed"}`}>
          <SecondarySidebar selectedIndex={selectedIndex} open={open} />
          <IconButton
            size="small"
            edge="start"
            sx={{
              position: "absolute",
              bottom: 16,
              right: -12,
              zIndex: 1,
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "5px",
              margin: "0",
              ":hover": {
                backgroundColor: "#0275f0",
              },
            }}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <ArrowBackIos
                sx={{ fontSize: "14px", transform: "translateX(3px)" }}
              />
            ) : (
              <ArrowForwardIos
                sx={{ fontSize: "14px", transform: "translateX(1px)" }}
              />
            )}
          </IconButton>
        </Box>
        <List className="mainContent">
          <Navbar />
          <Box className="contentBox">
            <Box className="formProviderBox">
              <FormProvider>
                
                <ListTable />
              </FormProvider>
            </Box>
          </Box>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard1;
