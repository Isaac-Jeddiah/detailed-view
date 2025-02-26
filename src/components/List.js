

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
  import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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
  { field: 'select', headerName: '', width: 50, sortable: false },
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
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

  // Check if actions should be disabled
  const isActionDisabled = selectedRows.length != 0;
  return (
    <Box>
      <Box>
      <Box display="flex" flexDirection="row" alignItems="center" gap="16px" padding="16px">
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
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: '250px' }}
        />
               {/* View options button with border */}
               <Button
          startIcon={<ViewKanban />}
          onClick={(e) => setViewOptionsAnchorEl(e.currentTarget)}
          endIcon={<ArrowDropDown />}
          sx={{
            color: "#c2c2c2",
            height:"40px",
            border: "1px solid #ccc",
            textTransform: 'none',
          
          }}
        >
          
        </Button>
        <Menu
          anchorEl={viewOptionsAnchorEl}
          open={Boolean(viewOptionsAnchorEl)}
          onClose={() => setViewOptionsAnchorEl(null)}
        >
          <MenuItem onClick={() => handleViewChange('kanban')}>
            <ViewKanban fontSize="small" sx={{ mr: 1 }} />
            Kanban View
          </MenuItem>
          <MenuItem onClick={() => handleViewChange('grid')}>
            <ViewModule fontSize="small" sx={{ mr: 1 }} />
            Grid View
          </MenuItem>
          <MenuItem onClick={() => handleViewChange('split')}>
            <ViewStream fontSize="small" sx={{ mr: 1 }} />
            Split View
          </MenuItem>
        </Menu>

   {/* Options button (blue) */}
   <Button
          variant="contained"
          onClick={(e) => setOptionsAnchorEl(e.currentTarget)}
          endIcon={<ArrowDropDown />}
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            
          }}
        >
          OPTIONS
        </Button>
        <Menu
          anchorEl={optionsAnchorEl}
          open={Boolean(optionsAnchorEl)}
          onClose={() => setOptionsAnchorEl(null)}
        >
          <MenuItem onClick={() => {setOpenNewDialog(true); setOptionsAnchorEl(null);}}>
            <Add fontSize="small" sx={{ mr: 1 }} />
            New
          </MenuItem>
          <MenuItem 
            onClick={() => {setOpenEditDialog(true); setOptionsAnchorEl(null);}}
            disabled={isActionDisabled}
          >
            <Edit fontSize="small" sx={{ mr: 1 }} />
            Edit
          </MenuItem>
          <MenuItem 
            onClick={handleExport}
            disabled={isActionDisabled}
          >
            <GetApp fontSize="small" sx={{ mr: 1 }} />
            Export
          </MenuItem>
          <MenuItem 
            onClick={() => {setOpenDeleteDialog(true); setOptionsAnchorEl(null);}}
            disabled={isActionDisabled}
          >
            <Delete fontSize="small" sx={{ mr: 1 }} />
            Delete
          </MenuItem>
        </Menu>

        {/* Settings icon */}
        <IconButton sx={{ border: '1px solid #ccc', borderRadius: '4px', ml: 1 }}>
          <Settings />
        </IconButton>

        {/* Filter icon */}
        <IconButton sx={{ border: '1px solid #ccc', borderRadius: '4px', ml: 1 }}
         onClick={toggleDrawer(true)}>
                    <FilterAlt />
                </IconButton>
      </Box>

      {/* Table */}
      
      {/* New Record Dialog */}
      <Dialog open={openNewDialog} onClose={() => setOpenNewDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <TextField
            label="Account Name"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Owner"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Type"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNewDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenNewDialog(false)} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Record Dialog */}
      <Dialog sx={{fontSize:theme.typography.fontSizes.subheadingsize}} open={openEditDialog} onClose={() => setOpenEditDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Account</DialogTitle>
        <DialogContent sx={{fontSize:theme.typography.fontSizes.contentSize}}>
          <TextField
            label="Account Name"
            fullWidth
            margin="normal"
            defaultValue={selectedRows.length === 1 ? accounts.find(a => a.id === selectedRows[0])?.name : ''}
          />
          <TextField
            label="Owner"
            fullWidth
            margin="normal"
            defaultValue={selectedRows.length === 1 ? accounts.find(a => a.id === selectedRows[0])?.owner : ''}
          />
          <TextField
            label="Type"
            fullWidth
            margin="normal"
            defaultValue={selectedRows.length === 1 ? accounts.find(a => a.id === selectedRows[0])?.type : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenEditDialog(false)} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog sx={{fontSize:theme.typography.fontSizes.subheadingsize}} open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Do you want to delete permanently?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenDeleteDialog(false)} variant="contained" color="error">Yes</Button>
        </DialogActions>
      </Dialog>
    </Box>

    <Box 
  sx={{ 
    height: 'calc(100vh - 120px)', 
    width: '100%', 
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto', // Added space for pagination
  }}
>
  <Box sx={{ overflow: 'hidden', width: '100%', height: '100%' }}>
    <DataGrid
      rows={filteredRows}
      columns={columns.map(column => ({
        ...column,
        resizable: true,
        headerAlign: 'left',
        flex: 1,
        minWidth: 150,
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
      pageSize={rowsPerPage || 10}
      rowsPerPageOptions={[10, 20, 50]}
      page={page}
      onPageChange={(newPage) => setPage(newPage)}
      onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
      
      checkboxSelection
      disableColumnMenu
      disableSelectionOnClick
      onSelectionModelChange={handleSelectionChange}
      autoHeight={false}
      color={"#ffff"}
      // Show footer with pagination
      hideFooter={false}
      hideFooterSelectedRowCount={false}
      
      components={{
        ColumnSeparator: () => (
          <div
            style={{
              width: '4px',
              height: '70%',
              margin: '0 -2px',
              backgroundColor: '#1926d2',
              cursor: 'col-resize',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 0,
              top: '15%',
              zIndex: 100,
              borderRadius: '2px',
            }}
          >
            <div
              style={{
                width: '1px',
                height: '60%',
                backgroundColor: 'white',
              }}
            />
          </div>
        ),
      }}
      
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'auto',
        '& .MuiDataGrid-main': {
          overflow: 'auto !important',
        },
        '& .MuiDataGrid-virtualScroller': {
          overflow: 'auto !important',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'white',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          '& .MuiDataGrid-columnHeaderTitle': {
            
            textAlign: 'left',
            fontSize: theme.typography.fontSizes.contentSize,
            fontWeight: theme.typography.fontWeight.contentweight,
          },
          '& .MuiDataGrid-columnHeader': {
            position: 'relative',
            '&:hover': {
              '& .MuiDataGrid-columnSeparator': {
                opacity: 100,
                width: '4px',
                transition: 'all',
              }
            }
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'block',
            opacity: 100,
            width:"2px",
            transition: 'all',
            opacity: 0,
            position: 'absolute',
            right: 0,
            top: '50%',
          },
          cursor: 'default'
        },
        '& .MuiDataGrid-row': {
          backgroundColor: 'white',
          fontSize: theme.typography.fontSizes.contentSize,
          cursor: 'default',
          '& .MuiDataGrid-cell': {
            textAlign: 'left',
          },
        },
        // Footer/pagination styling
        '& .MuiDataGrid-footer': {
          borderTop: '1px solid #e0e0e0',
          backgroundColor: 'white',
          color:'white'
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
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth="md"
        fullWidth
        sx={{fontSize:theme.typography.fontSizes.subheadingsize}}
      >
        <DialogTitle align="center" sx={{fontSize:theme.typography.fontSizes.subheadingsize}}>
          New Record
        </DialogTitle>
        <DialogContent sx={{fontSize:theme.typography.fontSizes.contentSize}}>
          {/* Form fields here */}
          <FormControl required sx={{ width: '100%' }}>
            <TextField
              autoFocus
              placeholder="Enter name"
              fullWidth
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button type="submit" onClick={handleDialogClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      <FilterSidebar openFilterSidebar={openFilterSidebar} toggleDrawer={toggleDrawer} />
            
    </Box>
  );
};

export default ListTable;
