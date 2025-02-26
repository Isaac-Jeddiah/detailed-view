import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Paper,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TableViewIcon from '@mui/icons-material/TableView';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterListIcon from '@mui/icons-material/FilterList';

// Sample data from the provided image
const initialRows = [
  { id: 1, name: 'Michael Walters', title: 'Mx.', phone: '903-534-1176x79472', email: 'mary62@oliver.com', company: 'Brown-Jacobson', leadStatus: 'New', leadSource: 'LinkedIn' },
  { id: 2, name: 'Melanie Harrell', title: 'Mx.', phone: '9363515734', email: 'michael72@miller-olson.com', company: 'Peterson Inc', leadStatus: 'New', leadSource: 'LinkedIn' },
  { id: 3, name: 'Natasha King', title: 'Mx.', phone: '+1-053-634-5306x53', email: 'wpayne@gmail.com', company: 'Nelson-Alexander', leadStatus: 'Lost', leadSource: 'Google Ads' },
  { id: 4, name: 'William Foster', title: 'Miss', phone: '628.602.0012x98909', email: 'conradsean@chapman.com', company: 'Ball and Sons', leadStatus: 'Contacted', leadSource: 'Referral' },
  { id: 5, name: 'Nicole Trevino', title: 'Mr.', phone: '+1-678-292-8645', email: 'leeaustin@hotmail.com', company: 'Wilson and Sons', leadStatus: 'Contacted', leadSource: 'Cold Call' },
  { id: 6, name: 'Steven Ferrell', title: 'Ms.', phone: '(053)801-2777x1665', email: 'thomas37@hotmail.com', company: 'Braun Ltd', leadStatus: 'Qualified', leadSource: 'Google Ads' },
  { id: 7, name: 'Kenneth Dunlap', title: 'Mx.', phone: '361.009.6778', email: 'pearsondavid@gmail.com', company: 'Ayala-Fisher', leadStatus: 'Lost', leadSource: 'LinkedIn' },
  { id: 8, name: 'Tristan Nguyen', title: 'Mrs.', phone: '(440)205-2862x4910', email: 'bartonamanda@warren.com', company: 'Johnson-Jennings', leadStatus: 'Qualified', leadSource: 'LinkedIn' },
  { id: 9, name: 'Robert Butler', title: 'Misc.', phone: '+1-936-034-6566x67', email: 'mcosta@martinez.net', company: 'Lawrence-Porter', leadStatus: 'Qualified', leadSource: 'Referral' },
  { id: 10, name: 'Lead 10', title: 'Mx.', phone: '555-123-4567', email: 'lead10@example.com', company: 'Example Co', leadStatus: 'New', leadSource: 'Website' },
];

// Generate additional rows to reach 100 as requested
const generateAdditionalRows = () => {
  const additionalRows = [];
  for (let i = 11; i <= 100; i++) {
    additionalRows.push({
      id: i,
      name: `Lead ${i}`,
      title: ['Mr.', 'Ms.', 'Mx.', 'Mrs.', 'Miss', 'Misc.'][Math.floor(Math.random() * 6)],
      phone: `555-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
      email: `lead${i}@example.com`,
      company: `Company ${i}`,
      leadStatus: ['New', 'Contacted', 'Qualified', 'Lost'][Math.floor(Math.random() * 4)],
      leadSource: ['LinkedIn', 'Google Ads', 'Referral', 'Cold Call', 'Website'][Math.floor(Math.random() * 5)],
    });
  }
  return additionalRows;
};

// Combine initial rows with generated ones
const allRows = [...initialRows, ...generateAdditionalRows()];

// Column headers based on the image
const columns = [
  { id: 'name', label: 'Name', minWidth: 150 },
  { id: 'title', label: 'Title', minWidth: 100 },
  { id: 'phone', label: 'Phone', minWidth: 150 },
  { id: 'email', label: 'Email', minWidth: 180 },
  { id: 'company', label: 'Company', minWidth: 150 },
  { id: 'leadStatus', label: 'Lead Status', minWidth: 120 },
  { id: 'leadSource', label: 'Lead Source', minWidth: 120 },
];

const ListTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [viewMenuAnchorEl, setViewMenuAnchorEl] = useState(null);
  const [filteredRows, setFilteredRows] = useState(allRows);
  const [activeFilter, setActiveFilter] = useState('All');

  // For column header hover state to show sort icons
  const [hoveredColumn, setHoveredColumn] = useState(null);
  
  // Anchor elems for various menus
  const [optionsAnchorEl, setOptionsAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);

  const handleViewMenuOpen = (event) => {
    setViewMenuAnchorEl(event.currentTarget);
  };

  const handleViewMenuClose = () => {
    setViewMenuAnchorEl(null);
  };

  const handleOptionsClick = (event) => {
    setOptionsAnchorEl(event.currentTarget);
  };

  const handleOptionsClose = () => {
    setOptionsAnchorEl(null);
  };

  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = filteredRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const applyFilter = (filterName) => {
    setActiveFilter(filterName);
    
    // Apply different filters based on selection
    switch(filterName) {
      case 'All':
        setFilteredRows(allRows);
        break;
      case 'Recently Viewed':
        // For demo, just show first 15 rows as "recently viewed"
        setFilteredRows(allRows.slice(0, 15));
        break;
      case 'Copy of All':
        setFilteredRows([...allRows]);
        break;
      case 'Copy of Recently Viewed':
        // For demo, show a different set of rows
        setFilteredRows(allRows.slice(20, 35));
        break;
      default:
        setFilteredRows(allRows);
    }
    
    handleViewMenuClose();
    setPage(0); // Reset to first page when filter changes
  };

  // Handle row navigation
  const handleRowNavigation = (id) => {
    console.log(`Navigating to details page for lead ID: ${id}`);
    // In a real app, you would use history.push or similar to navigate
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Sort function
  const getSortedRows = () => {
    if (!orderBy) {
      return filteredRows;
    }
    
    return [...filteredRows].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      
      if (order === 'asc') {
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue);
        }
        return aValue < bValue ? -1 : 1;
      } else {
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return bValue.localeCompare(aValue);
        }
        return bValue < aValue ? -1 : 1;
      }
    });
  };
{/**nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}
  const [filter, setFilter] = React.useState('default');
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const [openFilterSidebar, setOpenFilterSidebar] = useState(false);

    const [openDialog, setOpenDialog] = useState(false);

    const openDialogBox = () => {
        setOpenDialog(true);
    };

    const closeDialogBox = () => {
        setOpenDialog(false);
    };

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenFilterSidebar(open);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Navbar */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        {/* Left side - Filter dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ 
              textTransform: 'none', 
              height: '32px',
              minWidth: 'auto',
              borderBottom: '2px solid #1976d2',
              borderRadius: 0,
              paddingLeft: 0
            }}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleViewMenuOpen}
          >
            {activeFilter}
          </Button>
          <Menu
            anchorEl={viewMenuAnchorEl}
            open={Boolean(viewMenuAnchorEl)}
            onClose={handleViewMenuClose}
          >
            <MenuItem onClick={() => applyFilter('All')}>All</MenuItem>
            <MenuItem onClick={() => applyFilter('Recently Viewed')}>Recently Viewed</MenuItem>
            <Divider />
            <MenuItem onClick={() => applyFilter('Copy of All')}>Copy of All</MenuItem>
            <MenuItem onClick={() => applyFilter('Copy of Recently Viewed')}>Copy of Recently Viewed</MenuItem>
          </Menu>
        </Box>

        {/* Right side - Search and buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            placeholder="Search Account"
            size="small"
            sx={{ width: '250px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          
          <IconButton sx={{ border: '1px solid #e0e0e0', borderRadius: '4px' }}>
            <TableViewIcon />
          </IconButton>

          <Button
            variant="contained"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleOptionsClick}
            sx={{ textTransform: 'none', bgcolor: '#1976d2' }}
          >
            OPTIONS
          </Button>
          <Menu
            anchorEl={optionsAnchorEl}
            open={Boolean(optionsAnchorEl)}
            onClose={handleOptionsClose}
          >
            <MenuItem onClick={handleOptionsClose}>Option 1</MenuItem>
            <MenuItem onClick={handleOptionsClose}>Option 2</MenuItem>
            <MenuItem onClick={handleOptionsClose}>Option 3</MenuItem>
          </Menu>

          <IconButton onClick={handleSettingsClick} sx={{ border: '1px solid #e0e0e0', borderRadius: '4px' }}>
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={settingsAnchorEl}
            open={Boolean(settingsAnchorEl)}
            onClose={handleSettingsClose}
          >
            <MenuItem onClick={handleSettingsClose}>Settings 1</MenuItem>
            <MenuItem onClick={handleSettingsClose}>Settings 2</MenuItem>
          </Menu>

          <IconButton sx={{ border: '1px solid #e0e0e0', borderRadius: '4px' }}>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>
      
      {/* Table/List View */}
      <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none', borderRadius: '4px' }}>
        <TableContainer>
          <Table stickyHeader aria-label="leads table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" sx={{ bgcolor: '#f5f5f5', height: '54px' }}>
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < filteredRows.length}
                    checked={filteredRows.length > 0 && selected.length === filteredRows.length}
                    onChange={handleSelectAllClick}
                    inputProps={{ 'aria-label': 'select all leads' }}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="left"
                    onClick={() => handleRequestSort(column.id)}
                    onMouseEnter={() => setHoveredColumn(column.id)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    style={{ 
                      minWidth: column.minWidth,
                      fontFamily: 'Roboto',
                      fontSize: '14px',
                      bgcolor: '#f5f5f5',
                      fontWeight: 500,
                      height: '54px',
                      position: 'relative',
                      paddingLeft: '30px', // Give space for the indicator bar
                      cursor: 'pointer'
                    }}
                  >
                    {/* Indicator bar before header text */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '4px',
                        height: '16px',
                        bgcolor: '#e0e0e0',
                        borderRadius: '2px'
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {column.label}
                      {(hoveredColumn === column.id || orderBy === column.id) && (
                        <Box sx={{ display: 'flex', ml: 1 }}>
                          {orderBy === column.id ? (
                            order === 'asc' ? (
                              <ArrowUpwardIcon fontSize="small" />
                            ) : (
                              <ArrowDownwardIcon fontSize="small" />
                            )
                          ) : (
                            <ArrowDownwardIcon fontSize="small" sx={{ opacity: 0.5 }} />
                          )}
                        </Box>
                      )}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getSortedRows()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => {
                        handleClick(event, row.id);
                      }}
                      onDoubleClick={() => handleRowNavigation(row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ 
                        '&:hover': { backgroundColor: '#f5f5f5' },
                        height: '54px',
                        '& td': { 
                          fontFamily: 'Roboto',
                          fontSize: '14px',
                          height: '54px',
                          padding: '8px 16px' // Reduced padding to achieve 54px height
                        }
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': `enhanced-table-checkbox-${row.id}` }}
                        />
                      </TableCell>
                      {columns.map((column) => (
                        <TableCell 
                          key={column.id} 
                          align="left"
                          sx={{ 
                            paddingLeft: '30px', // Match header padding
                            fontFamily: 'Roboto',
                            fontSize: '14px',
                          }}
                        >
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ListTable;