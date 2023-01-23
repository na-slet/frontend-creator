import NavBar from './components/NavBar/NavBar.tsx'
import SignIn from './components/AuthPopup/SignIn.tsx'
import Register from './components/AuthPopup/SignUp.tsx'
import {useState} from "react";


import EventManager from "./components/EventManager/EventManager.tsx";
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
      {accessToken != 'login' && accessToken != 'register' ? <EventManager access_token={accessToken}/>:null}
    </div>
  );
}

export default App;
