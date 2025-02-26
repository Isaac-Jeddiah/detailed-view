import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowForwardIos, Home, Menu, Star } from '@mui/icons-material';
import { Link, List, ListItem, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Navbar() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
  
    const breadcrumbs = [
        { name: 'Home', path: '/', icon: <Home /> },
        { name: 'List View', path: '/listview', icon: <Star /> },
      ];
    
      if (location.pathname.startsWith('/detailview')) {
        breadcrumbs.push({ name: 'Detail View', path: location.pathname, icon: <Star /> });
      }
    
    // Update search results based on the input
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value) {
            // Mock search results based on input
            setSearchResults([`Result for "${value}" 1`, `Result for "${value}" 2`, `Result for "${value}" 3`]);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <Box>
            <AppBar position="sticky" sx={{ backgroundColor: "#f4f5fa", boxShadow: "none" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "12px 16px" }}>
                <Box sx={{ flex: 1 }}>
      <List sx={{ color: 'black', fontSize: '14px' }}>
        <ListItem>
          <Box display="flex" alignItems="center">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.path}>
                {index > 0 && <ArrowForwardIos sx={{ color: '#6b6c6e', fontSize: '14px', mx: '4px' }} />}
                 {index === 0 ? <Home sx={{ color: '#6b6c6e', fontSize: '16px', mr: '4px'}} /> : <Star sx={{ color: '#6b6c6e', fontSize: '14px', mr: '4px'}} />}
                 
                <Link underline="hover" color="black" onClick={() => navigate(breadcrumb.path)} sx={{ cursor: 'pointer' }}>
                  {breadcrumb.name}
                </Link>
              </React.Fragment>
            ))}
          </Box>
        </ListItem>
      </List>
    </Box>

                    <Box
                        className="search-bar-container"
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#ece6f0',
                            borderRadius: '20px',
                            width: "100%",
                            padding: '4px 12px',
                            maxWidth: '600px',
                            flex: 1.5,
                        }}
                    >
                        <IconButton size="small" edge="start" sx={{ mr: 2 }}>
                            <Menu sx={{ color: "#49454F" }} />
                        </IconButton>

                        <InputBase
                            sx={{ color: "#000", width: "100%" }}
                            placeholder="Global search"
                            inputProps={{ 'aria-label': 'global search' }}
                            value={searchInput}
                            onChange={handleSearchChange}  // Handle search input change
                        />

                        <IconButton size="small" edge="start">
                            <SearchIcon sx={{ color: "#49454F" }} />
                        </IconButton>

                        {/* Render Search Results Panel */}
                        {searchResults.length > 0 && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 'calc(100% + 4px)',
                                    left: 0,
                                    width: '100%',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    borderRadius: '8px',
                                    zIndex: 10,
                                    padding: '8px',
                                }}
                            >
                                {searchResults.map((result, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            padding: '8px',
                                            borderBottom: '1px solid #ececec',
                                            cursor: 'pointer',
                                            '&:last-child': { borderBottom: 'none' },
                                            '&:hover': { backgroundColor: '#f4f4f4' },
                                        }}
                                    >
                                        {result}
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>

                    <Box display="flex" flexDirection="row-reverse" justifyContent="end" flex={1}>
                        <Box size="small" edge="end" sx={{ padding: "4px 8px", backgroundColor: "#bdbdbd", borderRadius: "50%", cursor: "pointer" }}>
                            <ListItemText sx={{ color: "#fff" }} primary="HD" />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
