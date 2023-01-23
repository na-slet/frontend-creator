import ListEvents from './ListEvents/ListEvents.tsx'
import { Grid, Container } from '@mui/material';

type Props = {
	access_token: string
}
function EventManager(props: Props) {
	return (
		<Container maxWidth="xl" sx={{marginTop: 5}}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<ListEvents access_token={props.access_token}/>
				</Grid>
				<Grid item xs={9}>
				</Grid>
			</Grid>
		</Container>
	);
}

export default EventManager;
