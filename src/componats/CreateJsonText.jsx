import { useContext } from 'react';
import { TextareaAutosize, Typography, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  padding: 10,
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: 'local',
  backgroundRepeat: 'no-repeat',
  paddingLeft: 35,
  paddingTop: 10,
  borderColor: '#ccc',
  borderRadius: theme.shape.borderRadius,
}));

const CreateJsonText = () => {
  const { setJsonText } = useContext(DataContext);

  const onValueChange = (e) => {
    setJsonText(e.target.value);
  };

  return (
    <>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <StyledTextarea
        minRows={3}
        maxRows={5}
        onChange={onValueChange}
      />
    </>
  );
};

export default CreateJsonText;
