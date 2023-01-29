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
import {useState} from "react";
import axios from "axios";

type Props = {
	access_token: string,
	event_id: string,
	onPaymentPopup: (location: string) => void,
}

function approveUser(access_token: string, user_id: string){
	axios.put('https://creator.backend.naslet.ru/user/event/status', null,{params:{
			access_token: access_token,
			id: user_id,
			stage: 'APPROVED'
		}}).then((e)=>{
			console.log(e)
	})
}
function declineUser(access_token: string, user_id: string){
	axios.put('https://creator.backend.naslet.ru/user/event/status', null,{params:{
			access_token: access_token,
			id: user_id,
			stage: 'DECLINED'
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
	updateUsers(props.access_token, props.event_id, setUsers);
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>ФИО участника</TableCell>
						<TableCell align="center">Аватар</TableCell>
						<TableCell align="center">Телефон</TableCell>
						<TableCell align="center">Email</TableCell>
						<TableCell align="center">Статус</TableCell>
						<TableCell align="center">Действия</TableCell>
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
							<TableCell align="center">{row.participation.participation_stage}</TableCell>
							<TableCell align="center">
								<Stack spacing={1} alignItems='center'>
									<Button
										sx={{width: 150}}
										variant="contained"
										startIcon={<DoneIcon />}
										disabled={row.participation.participation_stage != 'PAYMENT_PENDING'}
										onClick={()=>{approveUser(props.access_token, row.user.id)}}
									>
										Принять
									</Button>
									<Button
										sx={{width: 150}}
										variant="contained"
										startIcon={<ClearIcon />}
										disabled={row.participation.participation_stage == 'DECLINED'}
										onClick={()=>{declineUser(props.access_token, row.user.id)}}
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