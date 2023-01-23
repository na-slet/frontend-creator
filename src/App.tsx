import NavBar from './components/NavBar/NavBar.tsx'
import SignIn from './components/AuthPopup/SignIn.tsx'
import Register from './components/AuthPopup/SignUp.tsx'
import {useState} from "react";



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
    </div>
  );
}

export default App;
