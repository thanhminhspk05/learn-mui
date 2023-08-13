import { Autocomplete, Stack, TextField } from '@mui/material';

const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'];

function MuiAutoComplete() {
  return (
    <Stack
      spacing={2}
      width="250px"
    >
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
          />
        )}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
