import { Stack } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiRating from './components/MuiRating';

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
      <Stack padding={10}>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        <MuiRating />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
