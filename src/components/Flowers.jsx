import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center; 
    min-height:20px; 
`

const Heading = styled.h1
    `
 font-size:32px;
 padding:20px;
`

const Divide = styled.div
    `
  margin:5px;
`

const Label = styled.label`
  padding:20px;
  font-size:20px;
`

const Select = styled.select
    `
  width:20vh;
  border:1px solid grey;
  padding:5px;
  margin:5px;
`
const Flowers = () => {
    return (
        <>
            <Heading>Flowers</Heading>
            <Container>
                <Divide>
                    <Label for="flowers">Filter Products :</Label>

                    <Select name="flowers">
                        <option value="Roses">Roses</option>
                        <option value="Lily">Lily</option>
                        <option value=" Sunflower">Sunflower</option>
                        <option value="Hibiscus">Hibiscus</option>
                    </Select>

                    <Select name="categories">
                        <option value="Bouquet">Bouquet</option>
                        <option value="flower">flower</option>
                        <option value="artificial">Artificial</option>
                    </Select>
                </Divide>
                <Divide>
                    <Label for="sort">Sort Products:</Label>

                    <Select name="sort">
                        <option value="prices(ASC)">prices(ASC)</option>
                        <option value="prices(DSC)">prices(ASC)</option>
                    </Select>
                </Divide>
            </Container>
        </>
    )
}

export default Flowers
