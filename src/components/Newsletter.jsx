import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
   min-height:70vh;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   gap:30px;
`

const Title = styled.div
  `
  font-size:72px;
`

const Desc = styled.div`
  font-size:24px;
  font-weight:300;
`

const EmailBox = styled.div`
   width:50%;
   display:flex;
   justify-content:center;
   align-items:center;
`

const Input = styled.input`
   width: 30vw;
   padding:10px;
   border-radius:3px;
`

const Button = styled.button`
   padding:8px 20px;
   background:grey;
   color: pink;
   border-radius:3px;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely updates from your favourite products</Desc>
      <EmailBox>
        <Input type="email" value="email" />
        <Button><SendIcon style={{ fontSize: '18px' }} /></Button>
      </EmailBox>
    </Container>
  )
}

export default Newsletter
