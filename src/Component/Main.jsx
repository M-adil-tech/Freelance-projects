import React,{useState} from 'react'
import Login from './Login'
import styled from "styled-components";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { mobile } from "../Responsive";
import Modal from "./Modal";
const Container = styled.div`
background-image: url("https://isave.mcbah.com/Content/Images/login-bg2.png");


`
const Wrapper = styled.div`
padding: 3px 10px;
display:flex;
justify-content:space-between;


`
const Left = styled.div`
flex:2;
display:flex;
${mobile({ padding: "0px", flexDirection:"column" })}

`
const All=styled.div`
display:flex;
justify-content:space-between;
padding:2px;

`
const Head=styled.h1`
color:white;
font-size:36px;
font-align:center;
text-align:center;
font-weight:bold;


`

const MianPara=styled.div`
color:white;
font-size:12px;
font-align:center;
margin-left:30px;

`
const Imgcontainer=styled.div`
margin-top:30px;
display:flex;
justify-content:center;

`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
${mobile({ padding: "0px", flexDirection:"column" })}
`

const Textcontainer=styled.div`

display:flex;
justify-content:center;
font-size:10px;
`








export const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);


  const handleclick = () => {
   <Modal/>
  }

  return (
    <Container>
    <Wrapper>
    <Left>
   
       <MianPara>
    <Head>
    Welcome to isave!
    </Head>
      
      
      
       Pakistan’s First Online Investment Service aimed at making Savings seamless and hassle-free.
       Now you have the power to invest anytime, anywhere
       






       <Imgcontainer>
    <img src=" https://isave.mcbah.com/Content/Images/laptop.png" alt="laptop"/>
  </Imgcontainer>


<All>
  <Textcontainer>
<h1>Create New Account</h1>


  </Textcontainer>
 
<Textcontainer>
<h1> Register Existing Account</h1>
</Textcontainer>
    
  
  </All>
  <All>
  <p>
    New to iSave? Click below to open an
account
    </p>
    <p>
    New to iSave? Click below to register your account
  </p>

  </All>

  <All>

  <Link to='/signin'>
                <Button variant="contained" color="success"

        onClick={( handleclick) => {
         
          setModalOpen(true);
         
        }}


                >
 {modalOpen && <Modal setOpenModal={setModalOpen} />}
                Signup</Button>
        
              </Link>
              <Link to='/signin'>
                <Button variant="contained" color="success" >Signup</Button>
              </Link>

  
 

  </All>









  



  
  
       </MianPara>
      

  
  
    </Left>
    <Right>
    <Login/>
   </Right>
    </Wrapper>
    
    </Container>
   
   
  )
}
