import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Container = styled.div
    `
   min-height:30vh;
   display:flex;
   justify-content:space-around;
   align-items:center;
   gap:30px;
   background:black;
   color:white;
`

const ColumnDesc = styled.div`
   display:flex;
   justify-content:center;
   align-item:center;
   flex-direction:column;
   width:40vh;
   gap:10px;
`

const Heading = styled.div`
   font-size:24px;
`

const Title = styled.div`
      font-size:20px;
      text-align:center;
`

const Desc = styled.div`
   font-size:14px;
`

const SocialIcon = styled.div
    `
  display:flex;
  justify-content:flex-start;
  align-items:center;
  gap:10px;
`


const List = styled.div
    `
  display: flex;
  justify-content:center;
  align-items:center;
  text-align:left;
`
const Item = styled.ul`
   padding:5px;
   text-decoration:none;
   list-style-type:none;
`
const Item1 = styled.li
    `
  font-size:16px;
  padding:5px;
`

const Item2 = styled.li
    `
  font-size:16px;
  padding:5px;
`
const Footer = () => {
    return (
        <Container>
            <ColumnDesc>
                <Heading>F.L.O.R.A</Heading>
                <Desc>Flowers are highly adapted to attract their specific pollinators such as bees,
                    flies, moths, hummingbirds, and bats just to name a few. This is why flowers are brightly
                    colored and highly scented making them the beautiful creations that they are.</Desc>
                <SocialIcon>
                    <TwitterIcon style={{ fontSize: '16px', background: 'grey', padding: '10px', borderRadius: '50%' }} />
                    <LinkedInIcon style={{ fontSize: '16px', background: 'grey', padding: '10px', borderRadius: '50%' }} />
                    <InstagramIcon style={{ fontSize: '16px', background: 'grey', padding: '10px', borderRadius: '50%' }} />
                </SocialIcon>
            </ColumnDesc>
            <ColumnDesc>
                <Title>Useful Links</Title>
                <List>
                    <Item>
                        <Item1>Home</Item1>
                        <Item1>Flower Gifts</Item1>
                        <Item1>Bouquets</Item1>
                        <Item1>whilist</Item1>
                    </Item>
                    <Item>
                        <Item2>Order Tracking</Item2>
                        <Item2>Cart</Item2>
                        <Item2>My Account</Item2>
                        <Item2>Terms</Item2>
                    </Item>
                </List>
            </ColumnDesc>
            <ColumnDesc>
                <Title>Contact</Title>
                <Item>
                    <Item1>
                        <MailOutlineIcon />
                        abc@gmail.com
                    </Item1>
                    <Item1>
                        <PhoneIcon />
                        +91 9999999999
                    </Item1>
                    <Item1>
                        <LocationOnIcon />78,yz,22,south flower road
                    </Item1>
                </Item>
            </ColumnDesc>
        </Container>
    )
}

export default Footer
