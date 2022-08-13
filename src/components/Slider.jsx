import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bedflower from '../assets/bedflowers1.png'
import bouquet from '../assets/bouquet.jpg'
import promiseflower from '../assets/promiseflower.jpg'
const Container = styled.div
    `
  display:flex;
  justify-content:space-between;
  align-items:center;
  min-height:70vh;
  width:100%; 
`

const Arrow = styled.div`
   width:20px;
   padding: 40px 10px;
   color: white;
   opacity:0.5;
   background:grey;
   cursor:pointer;
`;

const Slide = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   width:100%;
`

const ImgContainer = styled.div
    `
    text-align:center;
    flex:1;
`
const InfoContainer = styled.div
    `
    height:500px;
    padding:8.5rem 0 0.5rem 0;
    text-align:center;
    line-height: 1.5;
    flex:1;     
`
const Title = styled.h1`
    font-size:64px;
`

const Desc = styled.h3`
   font-size:20px;
   font-weight:200;
   padding:1rem;
`

const Button = styled.button`
   padding:0.7rem 1.5rem;
   background:transparent;
   cursor:pointer; 
   border:2px solid grey;
   border-radius:25px;   
`

const Image = styled.img
    `
  width:100%;
  object-fit:'fit';
`
//json for slider
const data = [
    {
        "id": 1,
        "image": bedflower,
        "title": "flower-shop",
        "desc": "Select Bouquet for your loved ones",
        "click": "Show Me"
    },
    {
        "id": 2,
        "image": bouquet,
        "title": "flower-shop",
        "desc": "Select Bouquet for your loved ones",
        "click": "Show Me"
    },
    {
        "id": 3,
        "image": promiseflower,
        "title": "flower-shop",
        "desc": "Select Bouquet for your loved ones",
        "click": "Show Me"
    }
]

const Slider = () => {
    const [index, setIndex] = useState(0);
    const { id, image, title, desc, click } = data[index];

    //setInterval(() => setIndex((index) => index === 0 ? 2 : index - 1), 3000);

    return (
        <Container key={id}>
            <Arrow>
                <ArrowBackIosNewIcon onClick={() => setIndex((index) => index === 0 ? 2 : index - 1)} />
            </Arrow>
            <Slide>
                <ImgContainer>
                    <Image src={`${image}`} alt="flower" />
                </ImgContainer>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                    <Button>{click}</Button>
                </InfoContainer>
            </Slide>
            <Arrow>
                <ArrowForwardIosIcon onClick={() => setIndex((index) => index === 2 ? 0 : index + 1)} />
            </Arrow>
        </Container>
    )
}

export default Slider
