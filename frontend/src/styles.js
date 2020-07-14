import { createStyles, makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(
    createStyles({
      flex: {
        display:'flex!important',
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'space-evenly',
        width: '60vh',
        height:'50vh',
        boxShadow:'2px 2px 2px #9E9E9E',
        borderRadius:10
      },
      flex2: {
        display:'flex!important',
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'space-evenly',
        width: '60vh',
        height:'60vh',
        boxShadow:'2px 2px 2px #9E9E9E',
        borderRadius:10
      },
      flex3: {
        display:'flex!important',
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'space-evenly',
        width: '80vh',
        height:'60vh',
      },
      root: {
        display:'flex',
        flexDirection:'column',
        width:'60%'
      },
      btnLogin: {
        backgroundColor: 'blue',
        width:'60%',
        marginTop: 20,
        color: 'white'
      },
      top: {
          marginTop: 15,
          color:'red'
      },
      cadastro: {
          cursor:'pointer'
      },
      table: {
        Width: 70
      },
    })
)

export default useStyles;
