import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiRadioButton from './components/MuiRadioButton';

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
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      <MuiRadioButton />
    </ThemeProvider>
  );
}

export default App;
