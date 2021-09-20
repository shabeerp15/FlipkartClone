import { useState } from "react";
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from "@material-ui/core"
import { authenticateSignup, authenticateLogin } from "../../service/api";


const useStyle = makeStyles({
    component:{
        height: '70vh',
        width:'90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background:'#2874f0',
        backgroundRepeat:'no-repeat',
        height:'70vh',
        width:'40%',
        backgroundPosition:'center 85%',
        padding:'45px 35px',
        '& > *':{
            color:'#ffffff',
            fontWeight: 600,

        }
    },
    login:{
        padding:'15px 35px',
        display: 'flex',
        flex: 1,
        flexDirection:'column',
        '& > *':{
            marginTop:20
        }
        
    },
    text:{
        color:'#878787',
        fontSize:12,
    },
    loginBtn:{
        background:'#fb641b',
        textTransform:'none',
        color:'#ffffff',
        height:48,
        borderRadius:2,
        fontWeight:600,
        '&:hover':{
            background:'#fb641b',
        }
    },
    requestBtn:{
        background:'#ffffff',
        textTransform:'none',
        color:'#2874f0',
        height:48,
        borderRadius:2,
        fontWeight:600,
        '&:hover':{
            background:'none',
        }
    },
    createText:{
        textAlign:'center',
        fontSize:14,
        color:'#2874f0',
        marginTop:'auto',
        fontWeight:600,
        cursor:'pointer'
    },
    error:{
        color:'#ff6161',
        fontSize:10,
        marginTop:2,
        fontWeight:600
    }
})


const signupInitialValues = {
    username : '',
    email : '',
    password : '',
    mobile : '',
}


const loginInitialValues = {
    username :  '',
    password : ''
}

const Login = (props) => {

    const { open, setOpen, setAccount } =props
    const classes = useStyle()

    const [account , toggleAccount] = useState('login')
    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false)

    const handleClose= () =>{
        setOpen(false);
        toggleAccount('login')
    }

    const toggleUserAccount = ()=>{
        toggleAccount('signup')
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return
        handleClose()
        setAccount(signup.username)
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) {
            setError(true)
            return
        }
        handleClose()
        setAccount(login.username)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]:e.target.value})
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]:e.target.value})
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
            {
                account === 'login' ?
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">Login</Typography>
                        <Typography style={{marginTop:20}}>Get Access your Orders, Wishlist and Recommendations</Typography>
                    </Box>
                    <Box className={classes.login}>
                            <TextField onChange={ (e) => onValueChange(e)} name='username' label='Enter Email / Mobile Number' />
                            <TextField onChange={ (e) => onValueChange(e)} name='password' label='Enter Password' />
                            {error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant='contained' onClick={ () => loginUser() } className={classes.loginBtn} >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>Or</Typography>
                            <Button variant='contained' className={classes.requestBtn} >Request OTP</Button>
                            <Typography onClick={()=> toggleUserAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                    </Box>  
                </Box> :
                <Box style={{display:'flex'}}> 
                    <Box className={classes.image}>
                        <Typography variant="h5">Looks like you're new here!</Typography>
                        <Typography style={{marginTop:20}}>Sign up with your mobile number to get started</Typography>
                    </Box>
                    <Box className={classes.login}>
                        <TextField onChange={ (e) => onInputChange(e)} name='username' label='Enter Username' />
                        <TextField onChange={ (e) => onInputChange(e)} name='email' label='Enter Email ' />
                        <TextField onChange={ (e) => onInputChange(e)} name='password' label='Enter Password' />
                        <TextField onChange={ (e) => onInputChange(e)} name='mobile' label='Enter Mobile Number' />
                        <Button onClick={ () => signupUser()} variant='contained' className={classes.loginBtn} >Sign Up</Button>
                        <Button onClick={ ()=> toggleAccount('login') } variant='contained' className={classes.requestBtn} >Existing User? Login</Button>
                    </Box> 
                </Box>
                    
            }
            </DialogContent>
        </Dialog>
    )
}

export default Login
