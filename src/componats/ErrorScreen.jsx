import { Box, Typography, styled } from '@mui/material';

// Styled components
const StyledImg = styled('img')(({ theme }) => ({
  width: '80%',
  height: 'auto',
  objectPosition: 'center 0%',
  margin: 'auto',
  display: 'block', // ensures the image is centered
}));

const ErrorScreen = () => {
  const error = 'https://i.stack.imgur.com/01tZQ.png';

  return (
    <Box>
      <Typography mt={2} mb={2}>Response</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledImg src={error} alt="error" />
      </Box>
    </Box>
  );
};

export default ErrorScreen;
