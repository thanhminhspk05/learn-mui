import { Box, Divider, Stack } from '@mui/material';

function MuiLayout() {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: 'flex', justifyContent: 'end' }}
      divider={
        <Divider
          orientation="vertical" // direction="row" have to using vertical. Else with direction="column"
          flexItem
        />
      }
    >
      <Box
        component="span"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        Blue Box
      </Box>

      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Green Box
      </Box>
    </Stack>
  );
}

export default MuiLayout;
