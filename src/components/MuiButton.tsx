import SendIcon from '@mui/icons-material/Send';
import { Button, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';

function MuiButton() {
  return (
    <Stack
      spacing={4}
      alignItems="center"
      marginTop={5}
    >
      {/* container full width */}
      {/* BASIC */}
      <Stack
        direction="row" // default: column
        spacing={2} // add margin-left 16px between element, exclude first element
      >
        <Button
          variant="text"
          href="https://google.com"
        >
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* COLOR*/}
      <Stack
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          color="primary"
        >
          primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
        >
          secondary
        </Button>
        <Button
          variant="contained"
          color="error"
        >
          error
        </Button>
        <Button
          variant="contained"
          color="warning"
        >
          warning
        </Button>
        <Button
          variant="contained"
          color="info"
        >
          info
        </Button>
        <Button
          variant="contained"
          color="success"
        >
          success
        </Button>
      </Stack>

      {/* SIZE */}
      <Stack
        display="block"
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          size="small"
        >
          Small
        </Button>
        <Button
          variant="contained"
          size="medium"
        >
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
        >
          Large
        </Button>
      </Stack>

      {/* ICONS */}
      <Stack
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          startIcon={<SendIcon />} // start
          disableRipple
        >
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />} // end
          disableElevation // unknown
        >
          Send
        </Button>

        {/* without button component */}
        <SendIcon />

        <IconButton
          aria-label="send"
          color="error"
          size="small"
        >
          <SendIcon />
        </IconButton>

        <Button variant="contained">
          <IconButton
            aria-label="send"
            color="error"
            size="small"
          >
            <SendIcon />
          </IconButton>
          Send
        </Button>
      </Stack>
    </Stack>
  );
}

export default MuiButton;