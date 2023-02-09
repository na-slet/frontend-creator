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
import DoneIcon from '@mui/icons-material/Done';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ClearIcon from '@mui/icons-material/Clear';
import {Badge, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

type Props = {
	access_token: string,
	event_id: string,
	onPaymentPopup: (location: string) => void,
}

function approveUser(access_token: string, user_id: string, event_id: string){
	axios.put('https://creator.backend.naslet.ru/user/event/status', {
		"event_id": event_id,
		"user_id": user_id,
		"stage": "APPROVED"
	},{params:{
			access_token: access_token,
		}}).then((e)=>{
			console.log(e)
	}).catch((e)=>{
		console.log(e)
	})
}
function kickUser(access_token: string, user_id: string, event_id: string){
	axios.post('https://creator.backend.naslet.ru/user/event/kick', {
		"event_id": event_id,
		"user_id": user_id
	},{params:{
			access_token: access_token,
		}}).then((e)=>{
			console.log(e)
	})
}
function updateUsers(access_token: string, event_id: string, setUsers: (el)=>void){
	axios.get('https://creator.backend.naslet.ru/event/users', {params:{
			access_token: access_token,
			id: event_id
		}}).then((e)=>{
			setUsers(e.data);
		})
}

export default function ListUsers(props: Props){
	const [users, setUsers] = useState([]);
	useEffect(()=>{
		updateUsers(props.access_token, props.event_id, setUsers);
	},[]);
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>№ участника</TableCell>

						<TableCell align="center">ФИО участника</TableCell>
						<TableCell align="center">Аватар</TableCell>
						<TableCell align="center">Телефон</TableCell>
						<TableCell align="center">Email</TableCell>

						<TableCell align="center">Телефон родителя</TableCell>
						<TableCell align="center">ФИО родителя</TableCell>
						<TableCell align="center">Город</TableCell>
						<TableCell align="center">Дата рождения</TableCell>

						<TableCell align="center">Статус</TableCell>
						<TableCell align="center">Действия</TableCell>
					</TableRow>
				</TableHead>
				<TableBody >
					{users.map((row,idx) => (
						<TableRow
							key={row.user.phone}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{idx}
							</TableCell>
							<TableCell align="center">
								{row.user.first_name + ' ' + row.user.last_name}
							</TableCell>
							<TableCell align="center">
								<img
									src={`https://backend.naslet.ru/`+row.user.avatar_id}
									loading="lazy"
									style={{
										maxWidth: '100px',
										height: "auto",
										border: 0
									}}
								/>
							</TableCell>
							<TableCell align="center">{row.user.phone}</TableCell>
							<TableCell align="center">{row.user.email}</TableCell>
							<TableCell align="center">{row.user.parent_phone}</TableCell>
							<TableCell align="center">{row.user.parent_fio}</TableCell>
							<TableCell align="center">{row.user.city}</TableCell>
							<TableCell align="center">{row.user.birth_date}</TableCell>
							<TableCell align="center">{row.participation.participation_stage}</TableCell>
							<TableCell align="center">
								<Stack spacing={1} alignItems='center'>
									<Button
										sx={{width: 150}}
										variant="contained"
										startIcon={<DoneIcon />}
										disabled={row.participation.participation_stage != 'PAYMENT_PENDING'}
										onClick={()=>{approveUser(props.access_token, row.user.id, props.event_id)}}
									>
										Принять
									</Button>
									<Button
										sx={{width: 150}}
										variant="contained"
										startIcon={<ClearIcon />}
										disabled={row.participation.participation_stage == 'DECLINED'}
										onClick={()=>{kickUser(props.access_token, row.user.id, props.event_id)}}
									>
										Отклонить
									</Button>
									{row.participation.payment_id ?
										<Button
											sx={{width: 150}}
											variant="contained"
											startIcon={<OpenInFullIcon />}
											disabled={!row.participation.payment_id}
											onClick={()=>{props.onPaymentPopup(row.participation.payment_id)}}
										>
											Оплата
										</Button>
										: null
									}
								</Stack>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}