import { Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiAvatars from './components/MuiAvatars';

const defaultTheme = createTheme({
  typography: {
    button: {
      textTransform: 'capitalize',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Stack
        spacing={2}
        padding={2}
      >
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiAppBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumb /> */}
        {/* <MiniDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        <MuiAvatars />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
