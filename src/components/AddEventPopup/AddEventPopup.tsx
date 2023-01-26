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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
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
	Modal, Paper, IconButton, Radio, MenuItem, InputLabel, Select
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
	open: boolean,
};
type State = {
};

export default class AddEventPopup extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
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
				open={this.props.open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Paper sx={{padding: 5, width: 500}} >
					<Container sx={{width: '100%'}}>
						<Stack spacing={2}>
							<Typography>Добавить новый ивент</Typography>
							<TextField
								required
								id="outlined-required"
								label="Название"
								variant="standard"
							/>
							<TextField
								required
								multiline
								id="outlined-required"
								label="Полное описание"
								variant="standard"
							/>
							<TextField
								required
								multiline
								id="outlined-required"
								label="Краткое описание"
								variant="standard"
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Цена"
								variant="standard"
							/>
							<Stack direction="row">
								<IconButton aria-label="delete">
									<DeleteIcon />
								</IconButton>
								<IconButton aria-label="delete">
									<DeleteIcon />
								</IconButton>
								<IconButton aria-label="delete">
									<DeleteIcon />
								</IconButton>
								<IconButton aria-label="delete">
									<DeleteIcon />
								</IconButton>
								<IconButton aria-label="delete">
									<DeleteIcon />
								</IconButton>
								<IconButton aria-label="delete">
									<DeleteIcon />
								</IconButton>
							</Stack>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Город"
								variant="standard"
							/>
							{/*<DateTimePicker*/}
							{/*	label="Date&Time picker"*/}
							{/* 	onChange={()=>{}}*/}
							{/*	renderInput={(params) => <TextField {...params} />} value={null}/>*/}
							<FormControl>
								<FormLabel id="demo-form-control-label-placement">Категория ивента:</FormLabel>
								<RadioGroup
									row
									aria-labelledby="demo-form-control-label-placement"
									name="position"
									defaultValue="top"
								>
									<FormControlLabel
										value="top"
										control={<Radio />}
										label="Следопытский"
										labelPlacement="top"
									/>
									<FormControlLabel
										value="top"
										control={<Radio />}
										label="Подростковый"
										labelPlacement="top"
									/>
									<FormControlLabel
										value="top"
										control={<Radio />}
										label="Молодежный"
										labelPlacement="top"
									/>
									<FormControlLabel
										value="top"
										control={<Radio />}
										label="Семейный"
										labelPlacement="top"
									/>
								</RadioGroup>
							</FormControl>
							<FormControl>
								<FormLabel id="demo-form-control-label-placement">Тип ивента:</FormLabel>
								<RadioGroup
									row
									aria-labelledby="demo-form-control-label-placement"
									name="position"
									defaultValue="top"
								>
									<FormControlLabel
										value="top"
										control={<Radio />}
										label="Слёт"
										labelPlacement="top"
									/>
									<FormControlLabel
										value="top"
										control={<Radio />}
										label="Лагерь"
										labelPlacement="top"
									/>
								</RadioGroup>
							</FormControl>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Объединение:</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={1}
									label="Age"
									onChange={()=>{}}
								>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Мин. возраст"
								variant="standard"
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Макс. возраст"
								variant="standard"
							/>
							<TextField
								required
								id="outlined-required"
								label="Адрес"
								variant="standard"
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Широта"
								variant="standard"
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Долгота"
								variant="standard"
							/>
						</Stack>
					</Container>
				</Paper>
			</Modal>
		);
	}
}