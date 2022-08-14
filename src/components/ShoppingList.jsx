import styled from 'styled-components'

const Container = styled.div`
    min-height:100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`

const ImgContainer = styled.div
    `
    width:100%;
    flex:1;
`

const Image = styled.img
    `
    z-index:1;
    object-fit:cover;
`

const HoverScreen = styled.div
    `
 z-index:2;
`

const Hover = styled.div
    `
  background:grey;
`

const ShoppingList = () => {
    return (
        <Container>
            <ImgContainer>
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
                <Image src="./assets/flower-shop.JPG" />
            </ImgContainer>
            <HoverScreen>
                <Hover></Hover>
                <Hover></Hover>
                <Hover></Hover>
                <Hover></Hover>
                <Hover></Hover>
                <Hover></Hover>
                <Hover></Hover>
                <Hover></Hover>
            </HoverScreen>
        </Container>
    )
}

export default ShoppingList