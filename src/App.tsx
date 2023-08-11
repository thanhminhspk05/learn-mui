import { Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">Heading</Typography>
      <Typography variant="subtitle2">Heading</Typography>

      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
    </>
  );
}

export default App;
