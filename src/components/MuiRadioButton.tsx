import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { useState } from 'react';

function MuiRadioButton() {
  const [value, setValue] = useState('0-2');

  return (
    <Stack
      direction="row"
      gap={2}
    >
      {/* using when we want label and radio button inline */}
      {/* <FormLabel
        id="job-experience-group-label"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        Years of experience
      </FormLabel> */}

      <FormControl>
        <FormLabel
          id="job-experience-group-label"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Years of experience
        </FormLabel>

        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          row
        >
          <FormControlLabel
            control={<Radio />}
            label="0-2"
            value="0-2"
            // size="small"
            // color="secondary"
          />
          <FormControlLabel
            control={<Radio />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText
          error
          sx={{ margin: '0' }} // to algn some with first radio
        >
          Invalid selection
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}

export default MuiRadioButton;
