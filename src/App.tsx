import NavBar from './components/NavBar/NavBar.tsx'
import SignIn from './components/AuthPopup/SignIn.tsx'
import Register from './components/AuthPopup/SignUp.tsx'
import {useState} from "react";


import EventManager from "./components/EventManager/EventManager.tsx";
import AddEventPopup from "./components/EventPopup/AddEventPopup.tsx";
import AddEventButton from "./components/EventPopup/AddEventButton.tsx";
import PaymentPopup from "./components/EventManager/ListEvents/PaymentPopup.tsx";
import { Grid, Container } from '@mui/material';
function App() {
  const [accessToken, setAccessToken] = useState('login');
  const [modelState, setModelState] = useState(false);
  const [paymentLocation, setPaymentLocation] = useState(null);

  function updateToken(token: string){
    console.log(token);
    setAccessToken(token);
  }

  return (
    <div className="App">
      <NavBar/>
      {accessToken == 'login' ? <SignIn changeToken={updateToken}/>:null}
      {accessToken == 'register' ? <Register changeToken={updateToken}/>:null}
      {accessToken != 'login' && accessToken != 'register' ? <EventManager onPaymentPopup={(location: string)=>{setPaymentLocation(location)}} access_token={accessToken}/>:null}
      <AddEventButton onClick={()=>{setModelState(!modelState)}}/>
      <AddEventPopup open={modelState} access_token={accessToken} setOpen={setModelState}/>
      <PaymentPopup open={paymentLocation} setOpen={setPaymentLocation} access_token={accessToken}/>
    </div>
  );
}

export default App;
