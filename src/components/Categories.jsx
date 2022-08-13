import React from 'react';
import styled from 'styled-components'
import CategoriesData from './CategoriesData'

const Container = styled.div
    ` 
  min-height: 100vh;
  display:flex;
  justiy-content:center;
  align-items:center;
  gap:30px;
  padding:20px;
`
const InfoBox = styled.div
    `
  width:100%;
  height:500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align:center;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  gap:20px;
`
const Title = styled.div
    `
 font-size:32px;
`
const Desc = styled.div
    `
 font-size:20px;
`
const Button = styled.button
    `
   padding:0.7rem 1.5rem;
   background:transparent;
   cursor:pointer; 
   border:2px solid black;
   border-radius:25px;
`
const Categories = () => {
    return (

        <Container>
            {CategoriesData.map(({ id, title, img, info, goTo }) => {
                return (<InfoBox key={id} style={{ backgroundImage: `url(${img})` }}>
                    <Title>{title}</Title>
                    <Desc>{info}</Desc>
                    <Button>{goTo}</Button>
                </InfoBox>
                )
            })}
        </Container>

    )
}

export default Categories