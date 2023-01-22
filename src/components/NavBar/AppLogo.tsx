import FitbitIcon from '@mui/icons-material/Fitbit';
import IconButton from '@mui/material/IconButton';
import * as React from "react";
import {Stack, Typography} from "@mui/material";

export default function AppLogo(){
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        НА
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <FitbitIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        СЛЁТ
      </Typography>
    </Stack>

  );
}