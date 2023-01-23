import NavBar from './components/NavBar/NavBar.tsx'
import SignIn from './components/AuthPopup/SignIn.tsx'
import Register from './components/AuthPopup/SignUp.tsx'
import {useState} from "react";



import ListEvents from './components/ListEvents/ListEvents.tsx'
import { Grid, Container } from '@mui/material';
function App() {
  const [accessToken, setAccessToken] = useState('login');

  function updateToken(token: string){
    console.log(token);
    setAccessToken(token);
  }

  return (
    <div className="App">
      <NavBar/>
      {accessToken == 'login' ? <SignIn changeToken={updateToken}/>:null}
      {accessToken == 'register' ? <Register changeToken={updateToken}/>:null}
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
