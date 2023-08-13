import { Box, Grid, Paper } from '@mui/material';

function MuiLayout() {
  return (
    // add background color white for page
    <Paper>
      {/* <Stack
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
      </Stack> */}

      <Grid
        container
        rowSpacing={3} // gap row
        columnSpacing={1} // gap columns
      >
        <Grid
          item
          xs={6}
        >
          <Box
            bgcolor="primary.light"
            p={2}
          >
            Box 1
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box
            bgcolor="primary.light"
            p={2}
          >
            Box 2
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box
            bgcolor="primary.light"
            p={2}
          >
            Box 3
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <Box
            bgcolor="primary.light"
            p={2}
          >
            Box 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;
