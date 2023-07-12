import {Button,makeStyles,Modal, Input} from '@material-ui/core'
import React,{useState} from 'react'

function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Home = () => {

    const  classes = useStyles()
    const [modalStyle] = useState(getModalStyle)

    const [openSignup,setOpenSignup] = useState(false)
    const [openSignin,setOpenSignin] = useState(false)
  
    const [username,setusername]=useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
  
    return (
    <div className='app'>

       <Modal open={openSignup} onClose={()=>{setOpenSignup(false)}}>
        <div>
            <form>
              <center>
              <img 
            className='app__headerImage'
            src='https://st2.depositphotos.com/1364916/7670/v/950/depositphotos_76706131-stock-illustration-logo-teamwork-hands.jpg'
            alt='logo'
            width={'130'}
            height={'80'}
            /> 
              </center>
            <Input
              placeholder='Name'
              type='text'
              value={username}
              onChange ={(e) =>{setusername(e.target.value)}}
            />
            <Input
              placeholder='Email'
              type='text'
              value={email}
              onChange ={(e) =>{setEmail(e.target.value)}}
            />
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange ={(e) =>{setPassword(e.target.value)}}
            />
            </form>
        </div>
       </Modal>
          <div className='app__header'>
            <img 
            className='app__headerImage'
            src='https://st2.depositphotos.com/1364916/7670/v/950/depositphotos_76706131-stock-illustration-logo-teamwork-hands.jpg'
            alt='logo'
            width={'130'}
            height={'80'}
            />

            <div>
                <Button variant='contained' color='primary'>Sıgn In</Button>
                <span>&nbsp;&nbsp;</span>
                <Button variant='contained' color='primary'>Sıgn Up</Button>
            </div>
         </div>
    </div>
  )
}

export default Home