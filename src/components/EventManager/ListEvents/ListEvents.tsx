import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Badge, Container, Stack, Paper} from "@mui/material";
import ListView from "./ListView.tsx"

type Props = {
  access_token: string
}
export default function ListEvents(props: Props) {
  return (
    <Paper>
      <ListView access_token={props.access_token}/>
    </Paper>
  );
}

