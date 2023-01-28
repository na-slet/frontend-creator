import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import {Badge, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useState} from "react";
import axios from "axios";

type Props = {
	access_token: string,
	event_id: string
}

export default function ListUsers(props: Props){
	const [users, setUsers] = useState([]);
	axios.get('https://creator.backend.naslet.ru/event/users', {params:{
		access_token: props.access_token,
		id: props.event_id
	}}).then((e)=>{
		setUsers(e.data);
	})
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>ФИО</TableCell>
						<TableCell align="right">Телефон</TableCell>
						<TableCell align="right">Email</TableCell>
						<TableCell align="right">Статус</TableCell>
						<TableCell align="right">Оплата</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((row) => (
						<TableRow
							key={row.user.phone}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.user.first_name + ' ' + row.user.last_name}
							</TableCell>
							<TableCell align="right">{row.user.phone}</TableCell>
							<TableCell align="right">{row.user.email}</TableCell>
							<TableCell align="right">{row.participation.participation_stage}</TableCell>
							<TableCell align="right">{row.participation.payment_id}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}