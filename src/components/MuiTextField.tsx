import { InputAdornment, Stack, TextField } from '@mui/material';
import { useState } from 'react';

function MuiTextField() {
  const [value, setValue] = useState('');

  return (
    <Stack
      spacing={4}
      marginTop={5}
    >
      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Name"
          variant="outlined"
        />
        <TextField
          label="Name"
          variant="filled"
        />
        <TextField
          label="Name"
          variant="standard"
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Form Input"
          size="small"
          required // with required field
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Requied' : 'Do not share your password with anyone'}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not shared your password with anyone"
          disabled // not accept click
        />
        <TextField
          label="Readonly"
          InputProps={{ readOnly: true }} // accept click, but can't change value
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
      >
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>, // in start position on textfield
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>, // in end position on textfield
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
