import { Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiAccordion from './components/MuiAccordion';

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
        spacing={4}
        padding={10}
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
        <MuiAccordion />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
