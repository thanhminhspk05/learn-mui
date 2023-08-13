import { Autocomplete, Stack, TextField } from '@mui/material';
import { useState } from 'react';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'];

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log({ skill });

  return (
    <Stack
      spacing={2}
      width="250px"
    >
      {/* accept typing and select */}
      <Autocomplete
        options={skills}
        value={value}
        onChange={(_event, newValue) => setValue(newValue)}
        freeSolo // accept value outside options
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
          />
        )}
      />

      <Autocomplete
        options={skillOptions}
        value={skill}
        onChange={(_event, newValue) => setSkill(newValue)}
        selectOnFocus
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
