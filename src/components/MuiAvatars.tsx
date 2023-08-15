import { AvatarGroup, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import generateName from '../ultis';

const names = Array.from(new Array(50)).map(() => generateName());

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0.1)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function MuiAvatars() {
  console.log({ names });
  return (
    <>
      <AvatarGroup max={10}>
        {names.map((item, index) => (
          <Avatar
            key={index}
            alt={item}
            src={`https://source.unsplash.com/random/200x200?sig=${index + 1}}`}
          />
        ))}
      </AvatarGroup>

      <Stack
        direction="row"
        spacing={2}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot" // diferrent dot, using badgeContent
        >
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/200x200?sig=200"
          />
        </StyledBadge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/random/200x200?sig=400"
            />
          }
        >
          <Avatar
            alt="Travis Howard"
            src="https://source.unsplash.com/random/200x200?sig=300"
          />
        </Badge>
      </Stack>
    </>
  );
}
