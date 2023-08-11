import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

function MuiButton() {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
  };

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
          disableRipple // stop ripple, color when clicked
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
        <IconButton
          aria-label="send"
          color="error"
          size="small"
        >
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        {/* 3 buttons near each other */}
        {/* text, contained, outlined  */}
        <ButtonGroup
          variant="contained"
          orientation="vertical" // same with direction
          color="warning"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* choose in group */}
      <Stack direction="row">
        <ToggleButtonGroup
          area-label="text formating"
          value={formats}
          onChange={handleFormatChange}
          color="error"
        >
          {/* 1 click => choose, 2 click unchoose. Accept choose all */}
          {/* ['bold', 'italic', 'underlined'] */}
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
