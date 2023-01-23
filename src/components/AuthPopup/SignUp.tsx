import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Badge, Container, Stack, Grid, Avatar, TextField, FormControlLabel, Checkbox, Link} from "@mui/material";

type Props = {
  changeToken: (token: string) => void,
};
type State = {
  email: string,
  password: string
};

export default class SignIn extends React.Component<Props, State> {
  state: State = {email:'',password:''};
  constructor(props: Props) {
    super(props);
  }
  getAccessToken(){
    console.log(this.state.email, this.state.password)
    axios.post('https://backend.naslet.ru/user/register',null,{params:{
        email: this.state.email,
        password: this.state.password
      }}).then((response)=>{
      this.props.changeToken(response.data.access_token);
    });
  }
  render(){
    this.getAccessToken = this.getAccessToken.bind(this);
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email адрес"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => this.setState({email: event.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => this.setState({password: event.target.value})}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={this.getAccessToken}
            >
              Зарегистрироваться
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{this.props.changeToken('login')}}>
                  {"Есть аккаунт? Войти"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}