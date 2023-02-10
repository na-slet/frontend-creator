import ListUsers from "./ListEvents/ListUsers.tsx";
import {Grid, Container, Paper, CircularProgress, Typography} from '@mui/material';
import ListEvents from "./ListEvents/ListEvents.tsx";
import * as React from "react";
import {useEffect, useState} from "react";
import EditEventPopup from "./ListEvents/EditEventPopup.tsx";
import axios from "axios";

type Props = {
	access_token: string,
	onPaymentPopup: (location: string) => void
}

function deleteEvent(access_token: string, event_id: string, setEvents): void {
	axios.delete('https://creator.backend.naslet.ru/event', {
		params: {
			access_token: access_token,
			id: event_id
		}
	}).then((resp) => {
		updateEvents(access_token, setEvents);
	})
}

function updateEvents(access_token: string, setEvents): void {
	axios.get('https://creator.backend.naslet.ru/user/events', {
		params: {
			access_token: access_token
		}
	}).then((resp) => {
		setEvents(resp.data)
	})
}

function EventManager(props: Props) {
	const [eventId, setEventId] = useState(null);
	const [editEventId, setEditEventId] = useState(null);
	const [events, setEvents] = useState(null);
	useEffect(() => {
		updateEvents(props.access_token, setEvents);
	}, []);

	return (
		<Container maxWidth="xl" sx={{marginTop: 5}}>
			{events === null ? <CircularProgress/> :
				<Grid container spacing={2}>
					<Grid item xs={3}>
						{events.length != 0 ?
							<Paper>
								<ListEvents access_token={props.access_token} events={events} onDelete={(event_id: string) => {
									if (window.confirm("Вы точно хотите удалить мероприятие?")){
										deleteEvent(props.access_token, event_id, setEvents);
								}
								}} onChoose={(event_id: string) => {
									setEventId(event_id);
									console.log(event_id)
								}} onEdit={setEditEventId}/>
							</Paper>
							: <Typography>Нет созданных ивентов. Создайте по нажатию на +</Typography>}
					</Grid>
					<Grid item xs={9}>
						{(eventId ? <ListUsers onPaymentPopup={props.onPaymentPopup} access_token={props.access_token}
																	 event_id={eventId}/> : null)}
					</Grid>
				</Grid>
			}
			<EditEventPopup event_id={editEventId} setOpen={setEditEventId} access_token={props.access_token}/>
		</Container>
	);
}

export default EventManager;
