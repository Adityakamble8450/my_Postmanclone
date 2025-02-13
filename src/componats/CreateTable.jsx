import { useState } from 'react';
import { Box, Typography, Table, TableHead, TableBody, TableCell, TableRow, styled } from '@mui/material';
import AddRow from './AddRow';

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '7px 5px !important',
  border: '1px solid rgba(224, 224, 224, 1)',
  borderCollapse: 'collapse',
}));

const CreateTable = ({ text, data, setData }) => {
  const [rows, addRows] = useState([0]);

  return (
    <Box>
      <Typography mt={2} mb={2}>{text}</Typography>
      <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>KEY</StyledTableCell>
            <StyledTableCell>VALUE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <AddRow
              addRows={addRows}
              rowId={index}
              key={index}
              setData={setData}
              data={data}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
