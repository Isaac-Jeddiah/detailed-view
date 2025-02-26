import React, { useEffect, useState } from "react";
import SecondarySidebar from "../components/secondarySidebar";
import { Box, IconButton, List, Grid } from "@mui/material";
import Navbar from "../components/navbar";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import DataTable from "../components/deals";
import Filterbar from "../components/filterbar";
import DetailsTable from "../components/details";
import Sidebar from "../components/sidebar";
import { useTheme } from "@mui/material/styles";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
const Gridlayout = () => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(true);
  const NAVBAR_HEIGHT = 56;
  const TOP_MARGIN = 56;

  const [boxSizes, setBoxSizes] = useState({ smallBoxWidth: 0 });

  const calculateBoxSizes = () => {
    const containerWidth = window.innerWidth;
    const availableWidth = containerWidth - 544; // Adjust for sidebar
    const smallBoxWidth = availableWidth / 12;
    return { smallBoxWidth };
  };

  useEffect(() => {
    const handleResize = () => {
      setBoxSizes(calculateBoxSizes());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const windowHeight = window.innerHeight;
  const BOX_HEIGHT = boxSizes.smallBoxWidth || 50; // Default if not yet calculated
  const rows = Math.max(1, Math.floor((windowHeight - 56) / BOX_HEIGHT));
  console.log("rows", rows);

  const renderPair = (index) => {
    const isOdd = index % 2 !== 0;
    return (
      
      <Box
        key={index}
        sx={{ marginX: "8px", paddingY: "0px", marginY: "-16px",marginTop:theme.typography.spaces.filterbarabove }}
      >
        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {Array.from({ length: isOdd ? 12 : 6 }).map((_, idx) => (
              <Grid item xs={isOdd ? 1 : 2} key={idx}>
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    aspectRatio: isOdd ? "1 / 1" : "1.5 / 1",
                    bgcolor: "rgba(204, 204, 204, 1)",
                    borderRadius: "4px",
                  }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      display="flex"
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Sidebar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "290px",

          backgroundColor: "#f4f5fa",
          borderRight: "1px solid #ddd",
        }}
      >
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
            //padding: "5px",
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

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",

          minHeight: "calc(100vh - 16px)", // Ensure space from the bottom
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
            paddingBottom: "16px",
            marginBottom: "16px",
            overflowY: "auto",
            // Hide scrollbar for Chrome, Safari and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            // Hide scrollbar for IE, Edge and Firefox
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none",
            minHeight: "calc(100vh - 16px)", // Ensure space from the bottom
          }}
        >
          <Box
            sx={{
              marginTop: "62px",
              marginBottom: "16px",
              paddingBottom: "16px",
            }}
          >
            {Array.from({ length: rows }).map((_, index) =>
              renderPair(index + 1)
            )}
          </Box>
        </Box>
      </List>
    </Box>
  );
};

export default Gridlayout;
