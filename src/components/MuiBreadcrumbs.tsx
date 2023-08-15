import GrainIcon from '@mui/icons-material/Grain';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import * as React from 'react';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MuiBreadcrumb() {
  return (
    <div
      role="presentation"
      onClick={handleClick}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        maxItems={2} // hide between first and last element
        // itemsBeforeCollapse={3} 3 element before collapse
        // itemsAfterCollapse={3} 3 element after collapse
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          Core
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
