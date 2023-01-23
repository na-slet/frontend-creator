import NavBar from './components/NavBar/NavBar.tsx'
import ListEvents from './components/ListEvents/ListEvents.tsx'
import { Grid, Container } from '@mui/material';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container maxWidth="xl" sx={{marginTop: 5}}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ListEvents/>
          </Grid>
          <Grid item xs={9}>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
