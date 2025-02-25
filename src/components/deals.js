import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LocationOnSharp } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import './deals.css';
import { useTheme } from "@mui/material/styles";

function createData(id, user, amount, stage, probability, closingdate, avatar) {
  return { id, user, amount, stage, probability, closingdate, avatar };
}

const rows = [
  createData(1, 'Prabodhan', '60000', "Chennai", "Active", '1/4/2025', 'https://sp.yimg.com/ib/th?id=OIP.Q6R49EFCR62g4QtakGPRFAHaHZ&pid=Api&w=148&h=148&c=7&dpr=2&rs=1'),
  createData(2, 'Donut', '20000', "Chennai", "Active", '4/10/2025', 'https://sp.yimg.com/ib/th?id=OIP.cMBe2hLXU2CkJwrCafA6yAHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1'),
  createData(3, 'Eclair', '45000', "Chennai", "Active", '6/12/2025', 'https://sp.yimg.com/ib/th?id=OIP.Q6R49EFCR62g4QtakGPRFAHaHZ&pid=Api&w=148&h=148&c=7&dpr=2&rs=1'),
  createData(4, 'Frozen yoghurt', '12345', "Chennai", "Suspended", '7/9/2024', 'https://example.com/avatar4.png'),
  createData(5, 'Gingerbread', '90000', "Chennai", "Active", '9/7/2025', 'https://sp.yimg.com/ib/th?id=OIP.ZiVXgF-nhh4u0E3otEgSkAHaHa&pid=Api&w=148&h=148&c=7&dpr=2&rs=1'),
  createData(6, 'Gingerbread', '67000', "Chennai", "Active", '7/8/2025', 'https://example.com/avatar6.png'),
  createData(7, 'Gingerbread', '9867', "Chennai", "Active", '8/6/2025', 'https://sp.yimg.com/ib/th?id=OIP.Q6R49EFCR62g4QtakGPRFAHaHZ&pid=Api&w=148&h=148&c=7&dpr=2&rs=1'),
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 'none',
  overflow: 'auto', // Remove the scrollbar
  fontSize: theme.typography.fontSizes.contentSize,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '10px',
  fontFamily: 'Roboto',
  fontSize: theme.typography.fontSizes.contentSize,
}));

const StyledTableRow = styled(TableRow)({
  height: '48px',
});

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  paddingLeft: '10px',
  fontSize: theme.typography.fontSizes.contentSize,
  fontWeight:theme.typography.fontWeight.contentWeight,
}));

export default function DealsTable() {
  const theme = useTheme();
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
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
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%', mt: 2, typography: 'body1', fontFamily: 'Roboto',mb:"16px" }}>
      <Paper sx={{ width: '100%',  boxShadow: 'none' }}>
        <StyledTableContainer className="styled-table-container">
          <Table aria-labelledby="tableTitle" size="small">
            <TableHead>
              <TableRow>
                <StyledHeaderCell className="table-header">Deal Name</StyledHeaderCell>
                <StyledHeaderCell className="table-header">Amount</StyledHeaderCell>
                <StyledHeaderCell className="table-header">Location</StyledHeaderCell>
                <StyledHeaderCell className="table-header">Account Status</StyledHeaderCell>
                <StyledHeaderCell className="table-header">Closing Date</StyledHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);

                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <StyledTableCell className="styled-cell">
                        <Box className="user-info">
                          <Avatar src={row.avatar} className="avatar" />
                          {row.user}
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell className="styled-cell">${row.amount}</StyledTableCell>
                      <StyledTableCell className="styled-cell">
                        <Box className="location-info">
                          <LocationOnSharp className="location-icon" />
                          {row.stage}
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Box sx={{
                          backgroundColor: row.probability === 'Active' ? "#ebebeb" : "#ef6c00",
                          color: row.probability === 'Active' ? "#000" : "#fff",
                          borderRadius: "15px",
                          padding: "5px 10px",
                          width: "min-content",
                          fontSize: "12px"
                        }}>
                          {row.probability}
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell className="styled-cell">{row.closingdate}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <StyledTableRow
                  style={{
                    height: 48 * emptyRows,
                  }}
                >
                  <StyledTableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>
        <TablePagination
        sx={{
          mb:'-32px'
        }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>

  );
}
