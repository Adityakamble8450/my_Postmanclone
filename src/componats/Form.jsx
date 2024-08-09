import { useContext } from 'react';
import { Select, MenuItem, TextField, Box, Button, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const StyledBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const StyledSelect = styled(Select)({
    width: 150,
    height: 40,
    background: '#F6F6F6',
});

const StyledTextField = styled(TextField)({
    width: '100%',
    background: '#F6F6F6',
});

const StyledButton = styled(Button)({
    width: 100,
    height: 40,
    marginLeft: '5px !important',
});

const Form = ({ onSendClick }) => {
    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    };

    return (
        <StyledBox>
            <StyledSelect value={formData.type} onChange={handleChange}>
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </StyledSelect>
            <StyledTextField size="small" onChange={onUrlChange} />
            <StyledButton variant="contained" onClick={onSendClick}>
                Send
            </StyledButton>
        </StyledBox>
    );
};

export default Form;
