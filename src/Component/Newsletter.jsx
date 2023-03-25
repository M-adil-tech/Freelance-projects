import React from 'react'
import { Button } from '@mui/material'
import styled from "styled-components";
const Container = styled.div`
  height: 30vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`;



const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;





export const Newsletter = () => {
    const btnstyle={margin:'8px 0'}
  return (
    <Container>
      <Title>Complete an Existing Account Application</Title>
     
      <InputContainer>
        <Input placeholder="Your Phone" />
       
       
      
      </InputContainer>
      <Button type='submit' color='primary' variant="contained" style={btnstyle} >Log in</Button>
    </Container>
  )
}
