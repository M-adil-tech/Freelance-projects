import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height:10px;



`
const Wrapper = styled.div`

display:flex;
justify-content:space-between;
align-items:center;

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center:
`
const Para=styled.div`
font-size:10px;

`
const Center= styled.div`
flex:1;
text-align:center;
`
const Logo=styled.p`

cursor:pointer
`

const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

`


export const Footer = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
    <Para>
      <p>
      Copyright(c) 2022 MCB-Arif Habib Savings and Investments Limited. All Rights Reserved.
      </p>
    </Para>
    </Left>
   <Center>
      <Logo><u>
      isave Terms&Conditions
      </u>.</Logo>
   </Center>
   <Right>

      <MenuItem><u>Helpline(+92-21 1111)</u></MenuItem>
      <MenuItem><u>Whatsapp 03004362224</u></MenuItem>
      <MenuItem>
     
      </MenuItem>

   </Right>
    </Wrapper>
      
    </Container>

  )
}
