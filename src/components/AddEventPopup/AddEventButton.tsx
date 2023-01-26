import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Badge,
	Container,
	Stack,
	Grid,
	Avatar,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Fab,
	Modal
} from "@mui/material";

type Props = {
	onClick: () => void,
};

export default function AddEventButton(props: Props){
	return (
		<Fab sx={{right:50, bottom: 50, position: 'fixed'}} color="primary" aria-label="add" onClick={props.onClick}>
			<AddIcon />
		</Fab>
	);
}