import { Snackbar, styled } from '@mui/material';

// Styled Snackbar component (if needed, otherwise use sx directly)
const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  // Add custom styles if needed, otherwise this is a placeholder
}));

const SnackBar = ({ errorMsg, error, setError }) => {
  const handleClose = () => {
    setError(false);
  };

  return (
    <StyledSnackbar
      open={error}
      autoHideDuration={3000}
      onClose={handleClose}
      message={errorMsg}
      // Apply sx prop directly for customization, if needed
      // sx={{ ...customStyles }}
    />
  );
};

export default SnackBar;
