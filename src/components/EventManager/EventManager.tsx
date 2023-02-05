import ListUsers from "./ListEvents/ListUsers.tsx";
import {Grid, Container, Paper} from '@mui/material';
import ListEvents from "./ListEvents/ListEvents.tsx";
import * as React from "react";
import {useState} from "react";
import EditEventPopup from "./ListEvents/EditEventPopup.tsx";

type Props = {
	access_token: string,
	onPaymentPopup: (location: string) => void
}
function EventManager(props: Props) {
	const [eventId, setEventId] = useState(null);
	const [editEventId, setEditEventId] = useState(null);

	return (
		<Container maxWidth="xl" sx={{marginTop: 5}}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Paper>
						<ListEvents access_token={props.access_token} onChoose={(event_id: string) => {setEventId(event_id);console.log(event_id)}} onEdit={setEditEventId}/>
					</Paper>
				</Grid>
				<Grid item xs={9}>
					{(eventId ? <ListUsers onPaymentPopup={props.onPaymentPopup} access_token={props.access_token} event_id={eventId}/> : null)}
				</Grid>
			</Grid>
			<EditEventPopup event_id={editEventId} setOpen={setEditEventId} access_token={props.access_token} />
		</Container>
	);
}

export default EventManager;
