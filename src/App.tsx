import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiSelect from './components/MuiSelect';

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
      <MuiSelect />
    </ThemeProvider>
  );
}

export default App;
