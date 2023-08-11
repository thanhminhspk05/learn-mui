import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiTextField from './components/MuiTextField';

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
      <MuiTextField />
    </ThemeProvider>
  );
}

export default App;
