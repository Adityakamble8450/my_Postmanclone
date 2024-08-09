import { Typography, Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Response = ({ data }) => {
  const readableObj = JSON.stringify(data, null, 2); // Convert object to a formatted JSON string

  return (
    <Box>
      <Typography mt={2} mb={2}>Response</Typography>
      <SyntaxHighlighter
        language="json"
        style={dracula} // You can choose a different style if you prefer
        showLineNumbers
        wrapLongLines
      >
        {readableObj}
      </SyntaxHighlighter>
    </Box>
  );
};

export default Response;
