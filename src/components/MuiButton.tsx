import { Button } from '@mui/material';

function MuiButton() {
  return (
    <>
      {/* TEXT */}
      <Button variant="text">Text</Button>
      <Button
        variant="text"
        color="error"
      >
        Text
      </Button>

      {/* CONTAINED */}
      <Button
        variant="contained"
        color="error"
      >
        Contained
      </Button>

      {/* OUTLINED */}
      <Button
        variant="outlined"
        disabled
      >
        OUTLINED
      </Button>
      <Button
        variant="outlined"
        color="error"
      >
        OUTLINED
      </Button>
    </>
  );
}

export default MuiButton;
