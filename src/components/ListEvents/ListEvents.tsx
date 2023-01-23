import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Badge, Container, Stack, Paper} from "@mui/material";
import ListView from "./ListView.tsx"

export default function ListEvents() {
  return (
    <Paper>
      <ListView/>
    </Paper>
  );
}

