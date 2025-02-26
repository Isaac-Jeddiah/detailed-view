import './List.css'

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Menu,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  } from '@mui/material';
  import { Search, Star, FilterAlt, ViewKanbanOutlined, ArrowForwardIos, Settings } from '@mui/icons-material';
  import { ResizableBox } from 'react-resizable';
  import React, { useState } from 'react';
  import { DataGrid } from '@mui/x-data-grid';
  import { useNavigate } from 'react-router-dom';
  import { useTheme } from "@mui/material/styles";
  import { Dialog,Grid,Typography,Divider, DialogTitle, DialogContent, DialogActions } from '@mui/material';
  import { 
 ArrowDropDown, 
    Add, Edit, GetApp, Delete, ViewKanban, ViewModule, ViewStream
  } from '@mui/icons-material';
  import FilterSidebar from './filterSidebar';

// Sample data
const initialRows = [
  { id: 1, name: 'Michael Walters', title: 'Mx.', phone: '903-534-1176x79472', email: 'mary62@oliver.com', company: 'Brown-Jacobson', leadStatus: 'New', leadSource: 'LinkedIn' },
  { id: 2, name: 'Melanie Harrell', title: 'Mx.', phone: '9363515734', email: 'michael72@miller-olson.com', company: 'Peterson Inc', leadStatus: 'New', leadSource: 'LinkedIn' },
  // Add more rows here...
];

// Generate additional rows to reach 100
const generateAdditionalRows = () => {
  const additionalRows = [];
  for (let i = 3; i <= 100; i++) {
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

const allRows = [...initialRows, ...generateAdditionalRows()];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'title', headerName: 'Title', width: 100 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'email', headerName: 'Email', width: 180 },
  { field: 'company', headerName: 'Company', width: 150 },
  { field: 'leadStatus', headerName: 'Lead Status', width: 120 },
  { field: 'leadSource', headerName: 'Lead Source', width: 120 },
];

const ListTable = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [filteredRows, setFilteredRows] = useState(allRows);
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewMenuAnchorEl, setViewMenuAnchorEl] = useState(null);
  const [optionsAnchorEl, setOptionsAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();
 const [openFilterSidebar, setOpenFilterSidebar] = useState(false);
 const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
  }

  setOpenFilterSidebar(open);
};
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = allRows.filter((row) => {
      return Object.values(row).some((value) => String(value).toLowerCase().includes(query));
    });
    setFilteredRows(filtered);
  };

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);
    switch (filterName) {
      case 'All':
        setFilteredRows(allRows);
        break;
      case 'Recently Viewed':
        setFilteredRows(allRows.slice(0, 15));
        break;
      default:
        setFilteredRows(allRows);
    }
    setViewMenuAnchorEl(null);
  };

  const handleRowClick = (params) => {
    if (params.field === 'name') {
      navigate(`/detailview/${params.row.id}`);
    }
  };

  const handleViewChange = (view) => {
    // Handle view changes here
  };

  const handleOptionsClick = (event) => {
    setOptionsAnchorEl(event.currentTarget);
  };

  const handleOptionsClose = () => {
    setOptionsAnchorEl(null);
  };

  const handleNewClick = () => {
    setOpenDialog(true);
  };

  const handleEditClick = () => {
    if (selectedRows.length > 0) {
      setOpenDialog(true);
    }
  };

  const handleExportClick = () => {
    if (selectedRows.length > 0) {
      // Implement export logic here
    }
  };

  const handleDeleteClick = () => {
    if (selectedRows.length > 0) {
      // Implement delete logic here
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };
  
  const [viewOptionsAnchorEl, setViewOptionsAnchorEl] = useState(null);
  
  const [openNewDialog, setOpenNewDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentView, setCurrentView] = useState('grid');

  // Sample data
  const accounts = [
    { id: 1, name: 'Acme Corp', owner: 'John Doe', type: 'Customer' },
    { id: 2, name: 'XYZ Inc', owner: 'Jane Smith', type: 'Partner' },
    { id: 3, name: 'ABC Ltd', owner: 'Mike Johnson', type: 'Prospect' },
  ];

  // Handlers

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === accounts.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(accounts.map(account => account.id));
    }
  };

  const handleExport = () => {
    alert('Exporting selected records to XLS...');
    setOptionsAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = [
    'Login',
    'New List View',
    'Clone List View',
    'Rename List View',
    'Select Fields To Display',
    'Delete List View',
  ];
  // Check if actions should be disabled
  const isActionDisabled = selectedRows.length != 0;
  return (
    <Box>
      <Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap="16px" padding="16px" mb={"16px"}>
        {/* Left side - Filter dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{
              color: 'black',
              textTransform: 'none',
              height: '40px',
              minWidth: '80px',
              borderBottom: '1px solid #1976d2',
              borderRadius: 0,
              paddingLeft: 0
            }}
            endIcon={<ArrowDropDown />}
            onClick={(e) => setViewMenuAnchorEl(e.currentTarget)}
          >
            {activeFilter}
          </Button>
          <Menu
            anchorEl={viewMenuAnchorEl}
            open={Boolean(viewMenuAnchorEl)}
            onClose={() => setViewMenuAnchorEl(null)}
          >
            <MenuItem onClick={() => handleFilterChange('All')}>All</MenuItem>
            <MenuItem onClick={() => handleFilterChange('Recently Viewed')}>Recently Viewed</MenuItem>
          </Menu>
        </Box>

 
     
        {/* Spacer */}
        <Box sx={{ flex: 1 }} />
        {/* Search bar */}
<TextField
  size="small"
  variant="outlined"
  placeholder="Search Account"
  value={searchQuery}
  onChange={handleSearch}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <Search fontSize="small" />
      </InputAdornment>
    ),
    sx: {
      height: '40px',
      fontSize: '14px',
    }
  }}
  sx={{ 
    width: '250px',
  mr:'-6px', // Mar gin right for spacing
    '& .MuiOutlinedInput-root': {
      height: '40px',
    },
    '& .MuiInputBase-input': {
      fontSize: '14px',
      
    }
  }}
/>

{/* View options button with border */}
<Button
  startIcon={<ViewKanban fontSize="small" />}
  onClick={(e) => setViewOptionsAnchorEl(e.currentTarget)}
  endIcon={<ArrowDropDown fontSize="small" />}
  sx={{
    color: "#c2c2c2",
    height: "40px",
    border: "1px solid #ccc",
    textTransform: 'none',
    fontSize: '14px',
   
     // Margin right for spacing
    minWidth: 'auto',
  }}
/>

<Menu
  anchorEl={viewOptionsAnchorEl}
  open={Boolean(viewOptionsAnchorEl)}
  onClose={() => setViewOptionsAnchorEl(null)}
  PaperProps={{
    sx: {
      '& .MuiMenuItem-root': {
        fontSize: '14px',
        height: '40px',
      }
    }
  }}
>
  <MenuItem onClick={() => handleViewChange('kanban')}>
    <ViewKanban fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    Kanban View
  </MenuItem>
  <MenuItem onClick={() => handleViewChange('grid')}>
    <ViewModule fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    Grid View
  </MenuItem>
  <MenuItem onClick={() => handleViewChange('split')}>
    <ViewStream fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    Split View
  </MenuItem>
</Menu>

{/* Options button (blue) */}
<Button
  variant="contained"
  onClick={(e) => setOptionsAnchorEl(e.currentTarget)}
  endIcon={<ArrowDropDown fontSize="small" />}
  sx={{
    backgroundColor: '#1976d2',
    color: 'white',
    height: '40px',
    fontSize: '14px',
    ml:'-6px', 
    // Margin right for spacing
  }}
>
  OPTIONS
</Button>

<Menu
  anchorEl={optionsAnchorEl}
  open={Boolean(optionsAnchorEl)}
  onClose={() => setOptionsAnchorEl(null)}
  PaperProps={{
    sx: {
      '& .MuiMenuItem-root': {
        fontSize: '14px',
        height: '40px',
      }
    }
  }}
>
  <MenuItem onClick={() => {setOpenNewDialog(true); setOptionsAnchorEl(null);}}>
    <Add fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    New
  </MenuItem>
  <MenuItem 
    onClick={() => {setOpenEditDialog(true); setOptionsAnchorEl(null);}}
    disabled={isActionDisabled}
  >
    <Edit fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    Edit
  </MenuItem>
  <MenuItem 
    onClick={handleExport}
    disabled={isActionDisabled}
  >
    <GetApp fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    Export
  </MenuItem>
  <MenuItem 
    onClick={() => {setOpenDeleteDialog(true); setOptionsAnchorEl(null);}}
    disabled={isActionDisabled}
  >
    <Delete fontSize="small" sx={{ mr: 1, color: theme.typography.color.icon }} />
    Delete
  </MenuItem>
</Menu>

{/* Settings icon */}
<div style={{ border: '1px solid #ccc',marginLeft:'-6px',borderRadius:'4px',position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
  <IconButton
    sx={{
     
      borderRadius: '4px',
      height: '40px',
      width: '40px',
    }}
    aria-label="settings"
    aria-controls="basic-menu"
    aria-haspopup="true"
    onClick={handleClick}
  >
    <Settings fontSize="small" />
  </IconButton>
  <IconButton
    sx={{
      
      borderRadius: '4px',
      borderLeft: 'none',
      height: '40px',
      width: '24px',
      marginLeft: '-1px',
    }}
    aria-label="settings dropdown"
    onClick={handleClick}
  >
    <ArrowDropDown fontSize="small" />
  </IconButton>
  <Menu
  
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
    sx={{
      '& .MuiMenuItem-root': {
        fontSize: '14px'
      }
    }}
  >
    {menuOptions.map((option) => (
      <MenuItem onClick={handleClose} key={option} sx={{ paddingLeft: '16px' }}>
        {option}
      </MenuItem>
    ))}
  </Menu>
</div>
{/* Filter icon */}
<IconButton 
  sx={{ 
    border: '1px solid #ccc', 
    borderRadius: '4px',
    height: '40px',
    width: '40px',
    ml:'-6px', 
  }}
  onClick={toggleDrawer(true)}
>
  <FilterAlt fontSize="small" />
</IconButton>
</Box>     
      {/* New Record Dialog */}
      {/* New Account Dialog */}
      <Dialog
  open={openNewDialog}
  onClose={() => setOpenNewDialog(false)}
  maxWidth="sm"
  fullWidth
  PaperProps={{
    sx: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "90vh",
      overflowY: "auto",
      padding: "20px",
      margin: 0,
    boxSizing: "border-box",
    },
  }}
>
  <DialogTitle
    sx={{
      fontSize: theme.typography.fontSizes.subheadingSize,
      fontWeight: theme.typography.fontWeight.subheadingWeight,
      padding: "0",
      marginBottom: "16px",
    }}
  >
    New Account
  </DialogTitle>
  <DialogContent
    sx={{
      padding: "0",
    }}
  >
    <Box>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <TextField
            label="Account Name"
            fullWidth
            size="small"
            margin="dense"
            InputProps={{
              sx: { fontSize: theme.typography.fontSizes.contentSize },
            }}
            InputLabelProps={{
              sx: {
                fontSize: theme.typography.fontSizes.contentSize,
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Owner"
            fullWidth
            size="small"
            margin="dense"
            InputProps={{
              sx: { fontSize: theme.typography.fontSizes.contentSize },
            }}
            InputLabelProps={{
              sx: {
                fontSize: theme.typography.fontSizes.contentSize,
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Type"
            fullWidth
            size="small"
            margin="dense"
            InputProps={{
              sx: { fontSize: theme.typography.fontSizes.contentSize },
            }}
            InputLabelProps={{
              sx: {
                fontSize: theme.typography.fontSizes.contentSize,
                shrink: true,
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  </DialogContent>
  <DialogActions
    sx={{
      padding: "0",
      marginTop: "24px",
      justifyContent: "flex-end",
    }}
  >
    <Box className="buttonContainer">
      <Button
        onClick={() => {
          setOpenNewDialog(false);
        }}
        variant="outlined"
        className="cancelButton"
        sx={{ marginRight: "10px" }}
      >
        CANCEL
      </Button>
      <Button
        onClick={() => {
          setOpenNewDialog(false);
        }}
        type="submit"
        variant="contained"
        className="submitButton"
      >
        SUBMIT
      </Button>
    </Box>
  </DialogActions>
</Dialog>

{/* Edit Record Dialog */}
<Dialog
  open={openEditDialog}
  onClose={() => setOpenEditDialog(false)}
  maxWidth="sm"
  fullWidth
  PaperProps={{
    sx: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "90vh",
      overflowY: "auto",
      padding: "20px",
      margin: 0,
    boxSizing: "border-box",
    },
  }}
>
  <DialogTitle
    sx={{
      fontSize: theme.typography.fontSizes.subheadingSize,
      fontWeight: theme.typography.fontWeight.subheadingWeight,
      padding: "0",
      marginBottom: "16px",
    }}
  >
    Edit Account
  </DialogTitle>
  <DialogContent
    sx={{
      padding: "0",
    }}
  >
    <Box>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <TextField
            label="Account Name"
            fullWidth
            size="small"
            margin="dense"
            defaultValue={
              selectedRows.length === 1
                ? accounts.find((a) => a.id === selectedRows[0])?.name
                : ""
            }
            InputProps={{
              sx: { fontSize: theme.typography.fontSizes.contentSize },
            }}
            InputLabelProps={{
              sx: {
                fontSize: theme.typography.fontSizes.contentSize,
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Owner"
            fullWidth
            size="small"
            margin="dense"
            defaultValue={
              selectedRows.length === 1
                ? accounts.find((a) => a.id === selectedRows[0])?.owner
                : ""
            }
            InputProps={{
              sx: { fontSize: theme.typography.fontSizes.contentSize },
            }}
            InputLabelProps={{
              sx: {
                fontSize: theme.typography.fontSizes.contentSize,
                shrink: true,
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Type"
            fullWidth
            size="small"
            margin="dense"
            defaultValue={
              selectedRows.length === 1
                ? accounts.find((a) => a.id === selectedRows[0])?.type
                : ""
            }
            InputProps={{
              sx: { fontSize: theme.typography.fontSizes.contentSize },
            }}
            InputLabelProps={{
              sx: {
                fontSize: theme.typography.fontSizes.contentSize,
                shrink: true,
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  </DialogContent>
  <DialogActions
    sx={{
      padding: "0",
      marginTop: "24px",
      justifyContent: "flex-end",
    }}
  >
    <Box className="buttonContainer">
      <Button
        onClick={() => {
          setOpenEditDialog(false);
        }}
        variant="outlined"
        className="cancelButton"
      >
        CANCEL
      </Button>
      <Button
        onClick={() => {
          setOpenEditDialog(false);
        }}
        type="submit"
        variant="contained"
        className="submitButton"
      >
        SUBMIT
      </Button>
    </Box>
  </DialogActions>
</Dialog>

{/* Delete Confirmation Dialog */}
<Dialog
  open={openDeleteDialog}
  onClose={() => setOpenDeleteDialog(false)}
  maxWidth="xs"
  fullWidth
  PaperProps={{
    sx: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      margin: 0,
    boxSizing: "border-box",
    },
  }}
>
  <DialogTitle
    sx={{
      fontSize: theme.typography.fontSizes.subheadingSize,
      fontWeight: theme.typography.fontWeight.subheadingWeight,
      padding: "0",
      marginBottom: "16px",
    }}
  >
    Confirm Delete
  </DialogTitle>
  <DialogContent
    sx={{
      padding: "0",
    }}
  >
    <Typography sx={{ fontSize: theme.typography.fontSizes.contentSize }}>
      If you delete these rows, all these rows will be permanently removed for
      all users with access. Are you sure you want to delete these 1 rows?
    </Typography>
  </DialogContent>
  <DialogActions
    sx={{
      padding: "0",
      marginTop: "24px",
      justifyContent: "flex-end",
    }}
  >
    <Box className="buttonContainer">
      <Button
        onClick={() => {
          setOpenDeleteDialog(false);
        }}
        variant="outlined"
        className="cancelButton"
      >
        CANCEL
      </Button>
      <Button
        onClick={() => {
          setOpenDeleteDialog(false);
        }}
        type="submit"
        variant="contained"
        className="submitButton"
      >
        CANCEL
      </Button>
    </Box>
  </DialogActions>
</Dialog>

{/* New Record Dialog */}
<Dialog
  open={openDialog}
  onClose={handleDialogClose}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "90vh",
      overflowY: "auto",
      padding: "20px",
    },
  }}
>
  <DialogTitle
    align="center"
    sx={{
      fontSize: theme.typography.fontSizes.subheadingSize,
      fontWeight: theme.typography.fontWeight.subheadingWeight,
      padding: "0",
      marginBottom: "16px",
    }}
  >
    New Record
  </DialogTitle>
  <DialogContent
    sx={{
      padding: "0",
    }}
  >
    <Box>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <FormControl required sx={{ width: "100%" }}>
            <TextField
              autoFocus
              placeholder="Enter name"
              fullWidth
              size="small"
              margin="dense"
              InputProps={{
                sx: { fontSize: theme.typography.fontSizes.contentSize },
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  </DialogContent>
  <DialogActions
    sx={{
      padding: "0",
      marginTop: "24px",
      justifyContent: "flex-end",
    }}
  >
    <Box className="buttonContainer">
      <Button
        onClick={() => {
          handleDialogClose();
        }}
        variant="outlined"
        className="cancelButton"
      >
        CANCEL
      </Button>
      <Button
        onClick={() => {
          handleDialogClose();
        }}
        type="submit"
        variant="contained"
        className="submitButton"
      >
        SUBMIT
      </Button>
    </Box>
  </DialogActions>
</Dialog>

    </Box>
 {/* Table */}
 <Box 
  sx={{ 
    height: 'calc(100vh - 120px)', 
    width: '100%', 
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto',
  }}
>
  <Box sx={{ overflow: 'hidden', width: '100%'}}>
    <DataGrid
    pageSizeOptions={[10, 25, 50]}
      rows={filteredRows}
      columns={columns.map(column => ({
        ...column,
        flex: 1, // Make all columns equal width
        minWidth: 100, // Minimum width for each column
        resizable: true,
        headerAlign: 'left',
        renderCell: column.field === 'name' ? 
          (params) => (
            <Box 
              sx={{ cursor: 'pointer', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
              onClick={() => navigate(`/detailview/${params.row.id}`)}
            >
              {params.value}
            </Box>
          ) : undefined
      }))}
      
      // Pagination properties
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      
      checkboxSelection
      disableColumnMenu
      disableSelectionOnClick
      onSelectionModelChange={handleSelectionChange}
      autoHeight={false}
      
      // Show footer with pagination
      hideFooter={false}
      hideFooterSelectedRowCount={false}
      
     
      
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'auto',
        backgroundColor: 'white',
        '& .MuiDataGrid-main': {
          overflow: 'auto !important',
        },
        '& .MuiDataGrid-virtualScroller': {
          overflow: 'auto !important',
          backgroundColor: 'white',
        },
       
        '& .MuiDataGrid-row': {
          backgroundColor: 'white',
          fontSize: theme.typography.fontSizes.contentSize,
          cursor: 'default',
          '&:not(:last-child)': {
            borderBottom: '1px solid #f0f0f0',
          },
          '& .MuiDataGrid-cell': {
            textAlign: 'left',
            borderRight: 'none', // Remove cell borders
          },
        },
        // Footer/pagination styling
        '& .MuiDataGrid-footer': {
          borderTop: '1px solid #e0e0e0',
          backgroundColor: 'white',
        },
        // Custom scrollbar styling
        '& ::-webkit-scrollbar': {
          height: '0px',
          width: '0px',
        },
        '& ::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '& ::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '4px',
        },
        '& ::-webkit-scrollbar-thumb:hover': {
          background: '#a8a8a8',
        },
      }}
    />
  </Box>
</Box>

      
      <FilterSidebar openFilterSidebar={openFilterSidebar} toggleDrawer={toggleDrawer} />
            
    </Box>
  );
};

export default ListTable;
