import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

function MuiSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log({ checked });

  return (
    <Box>
      <FormControlLabel
        label="Darkmode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
          />
        }
      />
    </Box>
  );
}

export default MuiSwitch;
