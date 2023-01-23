import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Badge, Stack} from "@mui/material";

// @ts-ignore
import AppLogo from './AppLogo.tsx'
// @ts-ignore
import AuthDropdown from './AuthDropdown.tsx'


const views = [
  'Менеджер слётов',
  // <Badge badgeContent={100} max={99} color="warning">
  //   Требуют подтверждения
  // </Badge>
]

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppLogo/>
          <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: '100%'}} spacing={2}>
            {views.map(view=>(
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {view}
              </Button>
            ))}
          </Stack>
          {/*<AuthDropdown/>*/}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

