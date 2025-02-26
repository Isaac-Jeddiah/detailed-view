import React, { useState, useEffect } from "react";
import { Box, Grid, List, ListItem, ListItemText, Typography, CircularProgress } from "@mui/material";

const ListTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulating API Call (Replace with actual API fetch)
    useEffect(() => {
        setTimeout(() => {
            try {
                const mockData = [
                    { id: 1, name: "Lead 1", status: "Open" },
                    { id: 2, name: "Lead 2", status: "Closed" },
                    { id: 3, name: "Lead 3", status: "Pending" },
                ];
                setData(mockData);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
        }, 1000);
    }, []);

    return (
        <Box sx={{ p: 2, width: "100%", bgcolor: "background.paper" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Leads List
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List>
                            {data.map((lead) => (
                                <ListItem key={lead.id} sx={{ borderBottom: "1px solid #ddd" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <ListItemText primary={lead.name} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <ListItemText primary={lead.status} sx={{ textAlign: "right" }} />
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default ListTable;

