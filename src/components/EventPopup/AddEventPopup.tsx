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

type EventIcon = {
	type: string,
	file_id: string
}
enum EventTypes {
	SCOUT="Следопытский",
	TEENAGER="Подростковый",
	JUNIOR="Молодежный",
	FAMILY="Семейный"
}
enum Visibilities {
	PUBLIC="Открытый",
	PRIVATE="Скрытый"
}
enum EventCategory{
	EVENT="Слёт",
	CAMP="Лагерь"
}
type Union = {
	id: string,
	name: string,
	short_name: string
}
type Props = {
	open: boolean,
	setOpen: (open: boolean)=>void
	access_token: string,
};
type State = {
	name: string,
	description: string,
	visibility: string,
	short_description: string,
	price: number,
	logo_variant: string,
	city: string,
	reg_end_date: Dayjs,
	start_date: Dayjs,
	end_date: Dayjs,
	event_type: string,
	event_category: string,
	union: string,
	min_age: number,
	max_age: number,
	address: string,
	latitude: number,
	longitude: number,
	event_logos: Array<EventIcon>,
	unions: Array<Union>,
};

export default class AddEventPopup extends React.Component<Props, State> {
	getUnions(){
		axios.get('https://backend.naslet.ru/unions',{params:{}})
			.then((response)=>{
				this.setState({unions: response.data})
			});
	}
	getEventLogos(){
		axios.get('https://backend.naslet.ru/colors?stage=NOT_PARTICIPATED', {params:{}})
			.then((response)=>{
				this.setState({event_logos:response.data})
			});
	}
	addEvent(){
		console.log(this.state);
		axios.post('https://creator.backend.naslet.ru/event', null,{params:{
				access_token: this.props.access_token,
				name: this.state.name === null ? undefined : this.state.name,
				description: this.state.description === null ? undefined : this.state.description,
				short_description: this.state.short_description === null ? undefined : this.state.short_description,
				visibility: this.state.visibility === null ? undefined : this.state.visibility,
				price: this.state.price === null ? undefined : this.state.price,
				logo_variant: this.state.logo_variant === null ? undefined : this.state.logo_variant,
				city: this.state.city === null ? undefined : this.state.city,
				reg_end_date: this.state.reg_end_date === null ? undefined : this.state.reg_end_date.format(),
				start_date: this.state.start_date === null ? undefined : this.state.start_date.format(),
				end_date: this.state.end_date === null ? undefined : this.state.end_date.format(),
				event_type: this.state.event_type === null ? undefined : this.state.event_type,
				category_type: this.state.event_category === null ? undefined : this.state.event_category,
				union_id: this.state.union === null ? undefined : this.state.union,
				min_age: this.state.min_age === null ? undefined : this.state.min_age,
				max_age: this.state.max_age === null ? undefined : this.state.max_age,
				address: this.state.address === null ? undefined : this.state.address,
				latitude: this.state.latitude === null ? undefined : this.state.latitude,
				longitude: this.state.longitude === null ? undefined : this.state.longitude,
			}})
			.then((response)=>{
				console.log(response.data)
			}).catch((e)=>{console.log(e.toJSON())});
	}
	constructor(props: Props) {
		super(props);
		this.getEventLogos = this.getEventLogos.bind(this);
		this.getUnions = this.getUnions.bind(this);
		this.addEvent = this.addEvent.bind(this);
		this.state = {
			name: null,
			description: null,
			short_description: null,
			visibility: null,
			price: null,
			logo_variant: null,
			city: null,
			reg_end_date: null,
			start_date: null,
			end_date: null,
			event_type: null,
			event_category: null,
			union: null,
			min_age: null,
			max_age: null,
			address: null,
			latitude: null,
			longitude: null,
			event_logos: [],
			unions: [],
		}
		this.getEventLogos();
		this.getUnions();
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
				onClose={()=>{this.props.setOpen(!this.props.open)}}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Paper sx={{padding: 5, maxWidth: 500, maxHeight: 500, overflow: 'auto'}} >
					<Container sx={{width: '100%'}}>
						<Stack spacing={2}>
							<Typography>Добавить новый ивент</Typography>
							<TextField
								required
								id="outlined-required"
								label="Название"
								variant="standard"
								value={this.state.name}
								onChange={(e)=>{this.setState({name: e.target.value})}}
							/>
							<TextField
								required
								multiline
								id="outlined-required"
								label="Полное описание"
								variant="standard"
								value={this.state.description}
								onChange={(e)=>{this.setState({description: e.target.value})}}
							/>
							<TextField
								required
								multiline
								id="outlined-required"
								label="Краткое описание"
								variant="standard"
								value={this.state.short_description}
								onChange={(e)=>{this.setState({short_description: e.target.value})}}
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Цена"
								variant="standard"
								value={this.state.price}
								onChange={(e)=>{this.setState({price: parseFloat(e.target.value)})}}
							/>
							<FormLabel id="event-logo">Логотип ивента:</FormLabel>
							<ToggleButtonGroup
								value={this.state.logo_variant}
								sx={{overflowX: 'auto'}}
								exclusive
								onChange={(e,value)=>{this.setState({logo_variant: value})}}
							>
								{this.state.event_logos.map((el)=>{
									return <ToggleButton
										value={el.type}
										key={el.type}
										sx={{padding: 1}}
									>
										<img
											src={`https://backend.naslet.ru/`+el.file_id}
											loading="lazy"
											style={{
												maxWidth: '100px',
												height: "auto",
												border: 0
											}}
										/>
									</ToggleButton>
								})}
							</ToggleButtonGroup>
							<TextField
								required
								id="outlined-required"
								label="Город"
								variant="standard"
								value={this.state.city}
								onChange={(e)=>{this.setState({city: e.target.value})}}
							/>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateTimePicker
								label="Окончание регистрации"
								value={this.state.reg_end_date}
								onChange={(e)=>{this.setState({reg_end_date: e})}}
								renderInput={(params) => <TextField {...params} />}
								/>
								<DateTimePicker
									label="Начало ивента"
									value={this.state.start_date}
									onChange={(e)=>{this.setState({start_date: e})}}
									renderInput={(params) => <TextField {...params} />}
								/>
								<DateTimePicker
									label="Окончание ивента"
									value={this.state.end_date}
									onChange={(e)=>{this.setState({end_date: e})}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</LocalizationProvider>
							<FormControl>
								<FormLabel id="event-type">Тип ивента:</FormLabel>
								<RadioGroup
									row
									aria-labelledby="event-type"
									name="position"
									value={this.state.event_type}
									onChange={(e)=>{this.setState({event_type: e.target.value})}}
								>
									{Object.entries(EventTypes).map((k,v)=>{
										return <FormControlLabel
											value={k.at(0)}
											control={<Radio />}
											label={k.at(1)}
										/>
									})}
								</RadioGroup>
							</FormControl>
							<FormControl>
								<FormLabel id="event-type">Видимость ивента:</FormLabel>
								<RadioGroup
									row
									aria-labelledby="event-visibility"
									name="position"
									value={this.state.visibility}
									onChange={(e)=>{this.setState({visibility: e.target.value})}}
								>
									{Object.entries(Visibilities).map((k,v)=>{
										return <FormControlLabel
											value={k.at(0)}
											control={<Radio />}
											label={k.at(1)}
										/>
									})}
								</RadioGroup>
							</FormControl>
							<FormControl>
								<FormLabel id="event-category">Категория ивента:</FormLabel>
								<RadioGroup
									row
									aria-labelledby="event-category"
									name="position"
									value={this.state.event_category}
									onChange={(e)=>{this.setState({event_category: e.target.value})}}
								>
									{Object.entries(EventCategory).map((k,v)=>{
										return <FormControlLabel
											value={k.at(0)}
											control={<Radio />}
											label={k.at(1)}
										/>
									})}
								</RadioGroup>
							</FormControl>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Объединение:</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label="Объединение"
									value={this.state.union}
									onChange={(e)=>{this.setState({union: e.target.value})}}
								>
									{this.state.unions.map((el)=>{
										return <MenuItem key={el.id} value={el.id}>{el.short_name}</MenuItem>
									})}
								</Select>
							</FormControl>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Мин. возраст"
								variant="standard"
								value={this.state.min_age}
								onChange={(e)=>{this.setState({min_age: parseInt(e.target.value)})}}
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Макс. возраст"
								variant="standard"
								value={this.state.max_age}
								onChange={(e)=>{this.setState({max_age: parseInt(e.target.value)})}}
							/>
							<TextField
								required
								id="outlined-required"
								label="Адрес"
								variant="standard"
								value={this.state.address}
								onChange={(e)=>{this.setState({address: e.target.value})}}
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Широта"
								variant="standard"
								value={this.state.latitude}
								onChange={(e)=>{this.setState({latitude: parseFloat(e.target.value)})}}
							/>
							<TextField
								required
								type="number"
								id="outlined-required"
								label="Долгота"
								variant="standard"
								value={this.state.longitude}
								onChange={(e)=>{this.setState({longitude: parseFloat(e.target.value)})}}
							/>
							<Button variant="contained" onClick={()=>{this.addEvent()}}>Создать</Button>
						</Stack>
					</Container>
				</Paper>
			</Modal>
		);
	}
}