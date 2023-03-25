import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styled from "styled-components";
const Container = styled.div`
color:white;


`


const Pic=styled.div`
display:flex;
justify-content:space-between;
margin-top:10px;
margin-left:30px;



`
const Logo=styled.div`
display:flex;
justify-content:space-between;
margin-top:35px;
margin-left:30px;
`
const Para=styled.p`
margin-left:30px;
color:white;

`
const Head=styled.h2`

color:white;
margin-left:30px;

`
const Avatar1=styled.div`
margin-top:25px;
margin-left:25px;
`



const Login=()=>{

    
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
      <Container>
        
           
                <Grid align='center'>
                     <Avatar1>
                     <Avatar style={avatarStyle}>  <LockIcon/></Avatar>
                     </Avatar1>
                   <Head>
                   Sign In
                   </Head>
                    
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required variant="standard"/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required variant="standard"/>
                
                <Button type='submit' color="success" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                
                <Logo>
               
                <img src="https://isave.mcbah.com/Content/Images/iSave_App.png"/>
               
              
                </Logo>
                <Head>
                Download The App Now
                </Head>
                
                <Pic>
                <img src="https://isave.mcbah.com/Content/Images/play.png"/>
                
                </Pic>
                <Pic>
                <img src="https://isave.mcbah.com/Content/Images/app.png"/>
                </Pic>
           
        </Container>
      
    )
}

export default Login