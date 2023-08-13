import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

function MuiCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1600"
        // image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MuiCard;
