import { useState } from 'react';
import { TextField, Checkbox, TableCell, TableRow, styled } from '@mui/material';

const StyledTableCell = styled(TableCell)({
    padding: '2px 5px !important',
    border: '1px solid rgba(224, 224, 224, 1)',
    borderCollapse: 'collapse',
});

const StyledCheckbox = styled(Checkbox)({
    padding: '2px 5px !important',
});

const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkCheckbox, setCheckCheckbox] = useState(false);
    
    const handleChange = (e) => {
        let result = data.find(entry => entry.id === Number(e.target.name)) || {};

        if (!checkCheckbox) {
            setCheckCheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true };
        } else {
            setCheckCheckbox(false);
            result = { ...result, id: rowId, check: false };
        }

        const index = data.findIndex(value => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = [...data];
            newArray[index] = result;
            setData(newArray);    
        }
    };
    
    const onTextChange = (e) => {
        let result = data.find(entry => entry.id === rowId) || {};
        result = { ...result, id: rowId, [e.target.name]: e.target.value };

        const index = data.findIndex(value => value.id === rowId);
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = [...data];
            newArray[index] = result;
            setData(newArray);    
        }
    };

    return (
        <TableRow>
            <StyledTableCell>
                <StyledCheckbox
                    checked={checkCheckbox}
                    size="large"
                    name={String(rowId)}
                    onChange={handleChange}
                />
            </StyledTableCell>
            <StyledTableCell>
                <TextField
                    name="key"
                    onChange={onTextChange}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    fullWidth
                />
            </StyledTableCell>
            <StyledTableCell>
                <TextField
                    name="value"
                    onChange={onTextChange}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    fullWidth
                />
            </StyledTableCell>
        </TableRow>
    );
};

export default AddRow;
