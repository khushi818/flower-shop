import React from 'react'
import styled from 'styled-components'

const Container = styled.div
    `
 margin-top:5rem;
 display:flex;
 justify-content:space-between;
 align-item:center;
 min-height:50vh;
 gap:30px;
 padding:50px;
`

const ImgContainer = styled.div
    `
 width:50vw;
`
const Image = styled.img
    ` 
  width:100%;
  object-fit:'cover';
`


const Desc = styled.div
    ` 
 display:flex;
 justify-content:left;
 flex-direction:column;
 align-item:center;
 gap:30px;
 width:50vw;
`

const Money = styled.div
    `
  font-size:24px;
`

const Title = styled.div`
  font-size:32px;
  font-weight:300;
`
const Info = styled.div
    `
  font-size:20px;
  font-weight:400;
`

const Color = styled.div
    `
  display:flex;
  justify-content:left;
  align-item:center;
`

const Text = styled.h2
    `
 font-size:20px;
`

const Circle = styled.div
    `
    width:20px;
    border-radius:50%;
    margin-left:10px;
`

const Button = styled.button`
   padding:0.7rem 1.5rem;
   width:20%;
   background:transparent;
   cursor:pointer; 
   border:2px solid grey;
   border-radius:25px;   
`

const Set = styled.div`
  display:flex;
  justify-content:flex-start;
  align-item:center;
  gap:20px;
  font-size:20px;
`
const Count = styled.div`
   padding:0.1rem 0.5rem;
   border:1px solid grey;
   border-radius:5px;
`
const Description = () => {
    return (
        <Container>
            <ImgContainer>
                <Image src="./assets/bouquet.jpg" alt="flower" />
            </ImgContainer>
            <Desc>
                <Title>Rose Bouquet</Title>
                <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum inventore, sapiente quas quis quidem eveniet iste voluptatibus libero,
                    laboriosam fuga voluptas. Debitis esse commodi labore quo voluptatibus est enim odit.
                </Info>
                <Money>$20</Money>
                <Color>
                    <Text>Color</Text>
                    <Circle style={{ background: 'yellow' }}></Circle>
                    <Circle style={{ background: 'red' }}></Circle>
                    <Circle style={{ background: 'pink' }}> </Circle>
                </Color>
                <Set>-<Count>1</Count>+</Set>
                <Button>Add To Cart</Button>
            </Desc>
        </Container>
    )
}

export default Description
