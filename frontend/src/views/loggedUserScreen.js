import React,{useEffect, useState} from 'react';
import { AppBar, Toolbar, Typography, Box, Container, TextField, Button } from '@material-ui/core'
import useStyles from '../styles';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

function LoggedUserScreen(props) {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [nomeHeader, setNomeHeader] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState();
  const [id, setId] = useState();
  
  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('Logged_USER'));

    setNome(userLogged.nome);
    setNomeHeader(userLogged.nome);
    setEmail(userLogged.email);
    setCpf(userLogged.cpf);
    setId(userLogged.id)

  }, [])

  async function Atualizar(){
    await axios
       .patch('http://localhost:3001/updateUsuario', {
         email,
         cpf,
         nome,
         id
       })
       .then((req) => {

            localStorage.removeItem('Logged_USER')

            const {usuarios} = req.data;


            console.log(req.data)

            const user = JSON.stringify(usuarios[0]);

            localStorage.setItem('Logged_USER', user);

            alert('Alteração efetuada com sucesso!')

           window.location.reload();
       })
       .catch(() => alert('Não foi possível concluir a alteração'));
 }

  return (
    <React.Fragment>
        <AppBar position="fixed" style={{backgroundColor:'blue'}}>
        <Toolbar style={{justifyContent:'space-between'}}>
            <Typography > Usuario Comum</Typography>
            <Typography > {nomeHeader}</Typography>
        </Toolbar>
        </AppBar>
        <Toolbar />
        <Box display="grid" gridTemplateColumns="1fr" gridRowGap="32px" gridTemplateRows="120px 1fr 140px" height="100vh">
        <Box display="flex" clone alignItems="center" justifyContent="center" style={{marginTop:"6%"}}>
            <Container classes={{root: classes.flex3}} maxWidth="md">
                <Box maxWidth="300px" width="100%">
                  <Box textAlign="center" justifyContent='flex-start'>
                    <Box clone color="blue">
                        <Typography gutterBottom variant="h5">Dados do Usuario</Typography>
                    </Box>
                  </Box>
                </Box>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" value={nome} label="Nome" fullWidth onChange={event => setNome(event.target.value)}/>
                  <TextField id="standard-basic" value={cpf} label="CPF" fullWidth onChange={event => setCpf(event.target.value)} className={classes.top}/>
                  <TextField id="standard-basic" value={email}label="Email" fullWidth onChange={event => setEmail(event.target.value)} className={classes.top}/>
                </form>
                <Box width='100%' display='flex'  justifyContent='center'>
                  <Button variant="contained" onClick={Atualizar} classes={{root: classes.btnLogin}}>
                    Alterar Dados
                  </Button>
                </Box>
                <Box>
                    <Link to="/" onClick={() => localStorage.removeItem('Logged_USER')}>Sair</Link>
                </Box>
            </Container>
          </Box>
          </Box>
    </React.Fragment>
   
  )
}

export default LoggedUserScreen;
