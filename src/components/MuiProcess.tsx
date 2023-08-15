import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export default function MuiCircular() {
  return (
    <Stack
      sx={{ color: 'grey.500' }}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />

      <CircularProgress
        variant="determinate"
        value={25}
      />
      <CircularProgress
        variant="determinate"
        value={50}
      />
      <CircularProgress
        variant="determinate"
        value={75}
      />
      <CircularProgress
        variant="determinate"
        value={100}
      />
    </Stack>
  );
}
