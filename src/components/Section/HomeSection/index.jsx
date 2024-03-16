// import Arrow from "../../../public/images/icon-arrow-light.svg"

import styled from "styled-components"

const HomeSection = () => {
    return (
        <Section>
            <Titulo>A modem publishing platform</Titulo>
            <Paragraph>Grow your audience and build your online brand</Paragraph>
            <div>
                <ButtonStart>Start for Free</ButtonStart>
                <ButtonLearn>Learn More</ButtonLearn>
            </div>
        </Section>
    )
}

export { HomeSection }

const Section = styled.section`
    background: rgb(249,139,117);
    background: linear-gradient(85deg, rgba(249,139,117,1) 0%, rgba(250,78,95,1) 100%);;
    height: 89vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 150px;
`

const Titulo = styled.h1`
    font-size: 70px;
    margin-bottom: 40px;
    color: var(--white);
`
const Paragraph = styled.p`
    font-size: 18px;
    margin-bottom: 40px;
    color: var(--white);
`

const ButtonStart = styled.button`
    color: orange;
    background-color: var(--white);
    border: 1px solid var(--white);
    padding: 14px 30px;
    border-radius: 40px;
`

const ButtonLearn = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    padding: 14px 30px;
    border-radius: 40px;
    margin-left: 20px;
`