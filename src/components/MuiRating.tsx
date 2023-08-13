import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Rating, Stack } from '@mui/material';
import { useState } from 'react';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

// const StyledRating = styled(Rating)({
//   '& .MuiRating-iconFilled': {
//     color: '#ff6d75',
//   },
//   '& .MuiRating-iconHover': {
//     color: '#ff3d47',
//   },
// });

function MuiRating() {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
    >
      {/* using to styled color of icon, default: yellow */}
      {/* <StyledRating  */}
      <Rating
        value={value}
        onChange={handleChange}
        // onChange={(_event, newValue) => {
        //   setValue(newValue);
        // }}
        // max={10}
        precision={0.5}
        icon={
          <FavoriteIcon
            fontSize="inherit"
            color="error"
          />
        }
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />

      {value !== null && (
        <Box
          display="flex"
          alignItems="center"
        >
          {labels[value]}
        </Box>
      )}
    </Stack>
  );
}

export default MuiRating;
