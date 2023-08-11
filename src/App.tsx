import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiButton from './components/MuiButton';

const defaultTheme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <MuiTypography /> */}
      <MuiButton />
    </ThemeProvider>
  );
}

export default App;
