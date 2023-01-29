import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import axios from 'axios';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Badge,
	Container,
	Stack,
	Grid,
	Avatar,
	TextField,
	Checkbox,
	Link,
	Fab,
	Modal, Paper, IconButton, Radio, MenuItem, InputLabel, Select, ToggleButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EventIcon from "@mui/icons-material/Event";
import { LocalizationProvider } from '@mui/x-date-pickers';

type Props = {
	open: string,
	setOpen: (open: string)=>void
	access_token: string,
};
type State = {
	
};

export default class PaymentPopup extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
		}
	}
	render(){
		return (
			<Modal
				sx = {{
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					position: 'fixed',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				open={this.props.open != null}
				onClose={()=>{this.props.setOpen(null)}}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Paper sx={{padding: 2, maxWidth: 500, maxHeight: 500, overflow: 'auto'}} >
					<img
						src={`https://backend.naslet.ru/`+this.props.open}
						loading="lazy"
						style={{
							maxWidth: '100%',
							height: "auto",
							border: 0
						}}
					/>
				</Paper>
			</Modal>
		);
	}
}