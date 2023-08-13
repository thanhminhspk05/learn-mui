import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { useState } from 'react';

function MuiCheckbox() {
  const [aceeptValue, setAcceptValue] = useState(false);
  const [skills, setSkills] = useState({
    HTML: false,
    CSS: false,
    Javascript: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptValue(event.target.checked);
  };

  const handleChangeSkill = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkills({
      ...skills,
      [event.target.name]: event.target.checked,
    });
  };

  const { HTML, CSS, Javascript } = skills;

  const error = Object.values(skills).filter((item) => item === true).length > 2;

  return (
    <>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={aceeptValue}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <FormControlLabel
          label="Bookmark"
          labelPlacement="start" // change label position. Default end
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              checked={aceeptValue}
              onChange={handleChange}
            />
          }
        />
      </Box>

      {/* form group */}
      <Box>
        <FormLabel>Skills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="HTML"
            control={
              <Checkbox
                checked={HTML}
                onChange={handleChangeSkill}
                name="HTML"
              />
            }
          />

          <FormControlLabel
            label="CSS"
            control={
              <Checkbox
                checked={CSS}
                onChange={handleChangeSkill}
                name="CSS"
              />
            }
          />

          <FormControlLabel
            label="Javascript"
            control={
              <Checkbox
                checked={Javascript}
                onChange={handleChangeSkill}
                name="Javascript"
              />
            }
          />
        </FormGroup>
        {error && <FormHelperText error>You only can choose maximum 2 skills</FormHelperText>}
      </Box>
    </>
  );
}

export default MuiCheckbox;
