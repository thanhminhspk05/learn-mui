import { Box, MenuItem, Stack, TextField } from '@mui/material';
import { useState } from 'react';

function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Stack
      spacing={4}
      margin={4}
    >
      <Box width="250px">
        <TextField
          label="Select country"
          value={countries}
          onChange={handleOnChange}
          fullWidth
          select
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default MuiSelect;
