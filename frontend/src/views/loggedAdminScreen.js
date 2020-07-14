import React,{useEffect, useState} from 'react';
import { AppBar, Toolbar, Typography, Box, Container, TextField, Button } from '@material-ui/core'
import useStyles from '../styles';
import { Link, Redirect } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

function LoggedAdminScreen(props) {
  const classes = useStyles();
  const [nomeHeader, setNomeHeader] = useState('');
  const [users, setUsers] = useState([])
  
  
  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('Logged_USER'));

    setNomeHeader(userLogged.nome);
    
    axios
      .get('http://localhost:3001/verUsuarios')
      .then(res => {
        setUsers(res.data.usuarios)
      }).catch(() => console.log('Deu errado'))

  }, [])

  return (
    <React.Fragment>
        <AppBar position="fixed" style={{backgroundColor:'blue'}}>
        <Toolbar style={{justifyContent:'space-between'}}>
            <Typography > Usuario Admin</Typography>
            <Typography > {nomeHeader}</Typography>
        </Toolbar>
        </AppBar>
        <Toolbar />
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell >Nome</TableCell>
                  <TableCell >CPF</TableCell>
                  <TableCell >Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow key={row.nome}>
                    <TableCell component="th" scope="row">
                      {row.nome}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.cpf}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box>
              <Link to="/" onClick={() => localStorage.removeItem('Logged_USER')}>Sair</Link>
          </Box>
    </React.Fragment>
   
  )
}

export default LoggedAdminScreen;
