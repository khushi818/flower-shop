import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BiSearchAlt2 } from 'react-icons/bi'

const Container = styled.div`
     margin-bottom:10px;
`
const Wrapper = styled.div`
   padding:20px;
   display:flex;
   justify-content:space-between;
   align-items:center;
`;

const Left = styled.div`
  display:flex;
  justify-content:left;
  align-items:center;
  gap:30px;
  padding:5px;
  flex:1;
`;

const Right = styled.div`
   display:flex;
   justify-content:flex-end;
   align-items:center;
   gap:30px;
   flex:1;   
`;


const Center = styled.div`
  flex:1;
  text-align:center;
`;


const Language = styled.div`
    font-size:14px;
    cursor:pointer;
`

const Logo = styled.h1`
  font-weight:bold
`;

const Search = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  color:lightgrey;
  border:0.5px solid lightgrey;
  padding:5px;
  gap:10px;
`
const Input = styled.input
    `
   border:none;
`

const Menuitem = styled.h1`
font-size:18px;
padding:5px;
color:grey;
cursor:pointer;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <Search>
                        <Input />
                        <BiSearchAlt2 />
                    </Search>
                </Left>
                <Center>
                    <Logo>Flora</Logo>
                </Center>
                <Right>
                    <Menuitem>Register</Menuitem>
                    <Menuitem>Login</Menuitem>
                    <Menuitem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </Menuitem>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar
