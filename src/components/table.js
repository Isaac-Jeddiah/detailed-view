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
import Checkbox from '@mui/material/Checkbox';
import { LocationOnSharp } from '@mui/icons-material';

function createData(id, user, email, location, accountStatus, accountId) {
    return { id, user, email, location, accountStatus, accountId };
}

const rows = [
    createData(1, 'Cupcake', 'mail@mail.com', "Chennai", "Active", 40),
    createData(2, 'Donut', 'mail@mail.com', "Chennai", "Active", 40),
    createData(3, 'Eclair', 'mail@mail.com', "Chennai", "Active", 60),
    createData(4, 'Frozen yoghurt', 'mail@mail.com', "Chennai", "Suspended", 40),
    createData(5, 'Gingerbread', 'mail@mail.com', "Chennai", "Active", 30),
    createData(6, 'Gingerbread', 'mail@mail.com', "Chennai", "Active", 30),
    createData(7, 'Gingerbread', 'mail@mail.com', "Chennai", "Active", 30),
];

export default function DataTable() {
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
        <Box sx={{ width: '100%', mt: 2 }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="small"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        indeterminate={
                                            selected.length > 0 && selected.length < rows.length
                                        }
                                        checked={rows.length > 0 && selected.length === rows.length}
                                        onChange={handleSelectAllClick}
                                    />
                                </TableCell>
                                <TableCell>user</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Account Status</TableCell>
                                <TableCell>ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${row.id}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            sx={{
                                                height: "48px", // Reduced height for row
                                            }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" sx={{ padding: "8px" }}>
                                                {row.user}
                                            </TableCell>
                                            <TableCell sx={{ padding: "8px" }}>{row.email}</TableCell>
                                            <TableCell sx={{ padding: "8px" }}>
                                                <Box display="flex" alignContent="center">
                                                    <LocationOnSharp sx={{ fontSize: "18px", color:"#707070" }} />
                                                    {row.location}
                                                </Box>
                                            </TableCell>
                                            <TableCell sx={{ padding: "8px" }}>
                                                <Box sx={{
                                                    backgroundColor: row.accountStatus === 'Active' ? "#ebebeb" : "#ef6c00",
                                                    color: row.accountStatus === 'Active' ? "#000" : "#fff",
                                                    borderRadius: "15px",
                                                    padding: "5px 10px",
                                                    width: "min-content",
                                                    fontSize: "12px"
                                                }}>
                                                    {row.accountStatus}
                                                </Box>
                                            </TableCell>
                                            <TableCell sx={{ padding: "8px" }}>{row.accountId}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
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
