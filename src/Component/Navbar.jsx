import React from 'react'

import styled from "styled-components";
const Container = styled.div`
height:60px;



`
const Wrapper = styled.div`
padding: 3px 10px;
display:flex;
justify-content:space-between;
align-items:center;

`

const Left = styled.div`

display:flex;
align-items:center:
`
const Logopic=styled.div`
    width: 120px;
    height: 120px;
    margin-right: 30px;
    

`



const Logo=styled.div`
    width: 120px;
    height: 120px;
    margin-right: 10px;
`


export const Navbar = () => {
  return (

    <Container>
    <Wrapper>
    <Left>
    <Logopic>
        <img src="https://isave.mcbah.com/Content/images/logo-isave.png" alt="logo"/>
    </Logopic>
   
      <Logo>
        <img src="https://isave.mcbah.com/Content/images/logo-Mcbah.png" atl="pic"/>
      </Logo>
  
    </Left>
   
    </Wrapper>
      
    </Container>
  )
}
