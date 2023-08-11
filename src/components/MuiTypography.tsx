import { Typography } from '@mui/material';

function MuiTypography() {
  return (
    <>
      <Typography
        variant="h1"
        gutterBottom
        // add margin bottom in element
        // depending variant
      >
        h1
      </Typography>

      <Typography variant="h6">h6</Typography>

      {/* h6 with font-size 16 */}
      <Typography variant="subtitle1">subtitle1</Typography>

      {/* h6 with font-size 14 */}
      <Typography
        variant="subtitle2"
        gutterBottom
        // add margin bottom in element
      >
        subtitle2
      </Typography>

      {/* p with font-size 16 */}
      <Typography variant="body1">body1</Typography>

      {/* p with font-size 16 */}
      <Typography variant="body2">body2</Typography>
    </>
  );
}

export default MuiTypography;
