import React, {useState} from 'react';
import { Box, Typography, Container, TextField, Button } from '@material-ui/core'
import useStyles from '../styles';
import axios from 'axios';

function SignUp(props) {
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState();
  const [senha, setSenha] = useState('');

  async function Cadastrar(){
    await axios
       .post('http://localhost:3001/criarUsuario', {
         email,
         senha,
         cpf,
         nome
       })
       .then((req) => {
        alert('Cadastro efetuado com sucesso!')

         const {usuarios} = req.data;

         const user = JSON.stringify(usuarios[0]);

         localStorage.setItem('Logged_USER', user);

         props.history.push('/usuario')
       })
       .catch(() => alert('Usuário não encontrado'));
 }

  return (
    <Container maxWidth="100%" style={{backgroundColor:'black'}}>
       <Box display="grid" gridTemplateColumns="1fr" gridRowGap="32px" gridTemplateRows="120px 1fr 140px" height="100vh">
          <header/>
          <Box display="flex" clone alignItems="center" justifyContent="center" >
            <Container classes={{root: classes.flex2}} maxWidth="md">
                <Box maxWidth="300px" width="100%">
                  <Box textAlign="center" justifyContent='flex-start'>
                    <Box clone color="blue">
                        <Typography gutterBottom variant="h5">Cadastro</Typography>
                    </Box>
                  </Box>
                </Box>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="standard-basic" value={nome} label="Nome" fullWidth onChange={event => setNome(event.target.value)}/>
                  <TextField id="standard-basic" value={cpf} label="CPF" fullWidth onChange={event => setCpf(event.target.value)} className={classes.top}/>
                  <TextField id="standard-basic" value={email} label="Email" fullWidth onChange={event => setEmail(event.target.value)} className={classes.top}/>
                  <TextField id="standard-basic" value={senha} type='password' label="Senha" fullWidth onChange={event => setSenha(event.target.value)} className={classes.top}/>
                </form>
                <Box width='100%' display='flex'  justifyContent='center'>
                  <Button variant="contained" classes={{root: classes.btnLogin}} onClick={Cadastrar}>
                        Cadastrar
                  </Button>
                </Box>
            </Container>
          </Box>
      </Box>
      <footer/>
    </Container>
   
  )
}

export default SignUp;
