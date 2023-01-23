import ListEvents from './ListEvents/ListEvents.tsx'
import { Grid, Container } from '@mui/material';
function EventManager() {
	return (
		<Container maxWidth="xl" sx={{marginTop: 5}}>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<ListEvents/>
				</Grid>
				<Grid item xs={9}>
				</Grid>
			</Grid>
		</Container>
	);
}

export default EventManager;
