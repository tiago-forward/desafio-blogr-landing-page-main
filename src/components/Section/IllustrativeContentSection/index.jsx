import styled from "styled-components"

const IllustrativeContentSection = ({ image, titleMain, paragraph }) => {
    return (
        <>
            <Container>
            <Image src={image} alt={image} />
                <Content>
                    <TitleMain>{titleMain}</TitleMain>
                    <Paragraph>{paragraph}</Paragraph>
                </Content>
            </Container>
        </>
    )
}

export { IllustrativeContentSection }

const Container = styled.div`
    width: 100%;
    background-color: var(--very-dark-desaturated-blue);
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    padding-bottom: 100px;
    margin-top: 250px;
`

const Content = styled.div`
    background-image: url("../../../../public/images/bg-pattern-circles.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -140px;
    background-position-x: -73px;
    position: relative;
`

const Image = styled.img`
    position: absolute;
    width: 100%;
    bottom: -148%;
    z-index: 1;
`

const TitleMain = styled.h2`
    color: var(--white);
    text-align: center;
    font-size: 30px;
    padding: 200px 30px 40px 30px;
`

const Paragraph = styled.p`
    color: var(--white);
    text-align: center;
    line-height: 30px;
    padding: 0px 30px;
`