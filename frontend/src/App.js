import React, {useState} from 'react';
import { Box, Typography, Container, TextField, Button } from '@material-ui/core'
import useStyles from './styles';
import { Link, Redirect } from 'react-router-dom'
import './App.css';
import axios from 'axios'



function App(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function Login(){
     await axios
        .post('http://localhost:3001/loginUsuario', {
          email,
          senha
        })
        .then((req) => {
          const {usuarios} = req.data;

          const user = JSON.stringify(usuarios[0]);

          if(!usuarios[0].ativo)
            return alert('Usuário desativado')

          localStorage.setItem('Logged_USER', user);

          if(!usuarios[0].admin)
            return props.history.push('/usuario')


          props.history.push('/admin')
        })
        .catch((err) => alert(err.response.data.message));
  }

  return (
    <Container maxWidth="100%" style={{backgroundColor:'black'}}>
       <Box display="grid" gridTemplateColumns="1fr" gridRowGap="32px" gridTemplateRows="120px 1fr 140px" height="100vh">
          <header/>
          <Box display="flex" clone alignItems="center" justifyContent="center" >
            <Container classes={{root: classes.flex}} maxWidth="md">
                <Box maxWidth="300px" width="100%">
                  <Box textAlign="center" justifyContent='flex-start'>
                    <Box clone color="blue">
                        <Typography gutterBottom variant="h5">Login</Typography>
                    </Box>
                  </Box>
                </Box>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" value={email} label="Email" fullWidth onChange={event => setEmail(event.target.value)}/>
                  <TextField id="standard-basic" type='password' value={senha} label="Senha" fullWidth onChange={event => setSenha(event.target.value)} className={classes.top}/>
                </form>
                <Box width='100%' display='flex'  justifyContent='center'>
                  <Button variant="contained" classes={{root: classes.btnLogin}}
                    onClick={Login} 
                    >
                    Entrar
                  </Button>
                </Box>
                <Box>
                    <Link to="/cadastro">Cadastre-se</Link>
                </Box>
            </Container>
          </Box>
      </Box>
      <footer/>
    </Container>
   
  )
}

export default App;
