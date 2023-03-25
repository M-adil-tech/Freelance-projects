import React from 'react'
import styled from "styled-components";
import { Announcement } from '../Component/Announcement';
import { Footer } from '../Component/Footer';
import { Navbar } from '../Component/Navbar';
import { Newsletter } from '../Component/Newsletter';
import { Registerform } from '../Component/Registerform';




const Head=styled.h1`
color:Black;
font-size:26px;
font-align:center;
text-align:center;
font-weight:bold;


`
const MianPara=styled.div`
color:black;
font-size:20px;
font-align:center;
font-weight:bold;
text-align:center;

`


export const Register = () => {
  return (
   
    <>
    
    <Announcement/>
        <Navbar/>

        <Head>
        Welcome to Digital Account Opening!
        </Head>
        <MianPara>
        <p>
        Register for a New Account
        </p>
        </MianPara>
        <Registerform/>
        <Newsletter/>
       <Footer/>
   </>
  )
}
