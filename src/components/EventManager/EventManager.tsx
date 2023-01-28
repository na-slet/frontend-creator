import ListUsers from "./ListEvents/ListUsers.tsx";
import {Grid, Container, Paper} from '@mui/material';
import ListView from "./ListEvents/ListView.tsx";
import * as React from "react";
import {useState} from "react";

type Props = {
	access_token: string
}
function EventManager(props: Props) {
	const [eventId, setEventId] = useState(null);
	return (
		<Container maxWidth="xl" sx={{marginTop: 5}}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Paper>
						<ListView access_token={props.access_token} onChoose={(event_id: string) => {setEventId(event_id);console.log(event_id)}}/>
					</Paper>
				</Grid>
				<Grid item xs={9}>
					{(eventId ? <ListUsers access_token={props.access_token} event_id={eventId}/> : null)}
				</Grid>
			</Grid>
		</Container>
	);
}

export default EventManager;
