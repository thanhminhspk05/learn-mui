import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function MuiTooltips() {
  return (
    <Box sx={{ width: 500 }}>
      <Grid
        container
        justifyContent="center"
      >
        <Grid item>
          <Tooltip
            title="Add"
            placement="top-start"
          >
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="top"
          >
            <Button>top</Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="top-end"
          >
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={6}
        >
          <Tooltip
            title="Add"
            placement="left-start"
          >
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip
            title="Add"
            placement="left"
          >
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip
            title="Add"
            placement="left-end"
          >
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid
          item
          container
          xs={6}
          alignItems="flex-end"
          direction="column"
        >
          <Grid item>
            <Tooltip
              title="Add"
              placement="right-start"
            >
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip
              title="Add"
              placement="right"
            >
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip
              title="Add"
              placement="right-end"
            >
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
      >
        <Grid item>
          <Tooltip
            title="Add"
            placement="bottom-start"
          >
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="bottom"
          >
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip
            title="Add"
            placement="bottom-end"
          >
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>

      <hr />

      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip
        title={
          <>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
          </>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>
    </Box>
  );
}
