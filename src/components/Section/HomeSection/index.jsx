import styled from "styled-components"

const HomeSection = () => {
    return (
        <Section>
            <Titulo>A modem publishing platform</Titulo>
            <Paragraph>Grow your audience and build your online brand</Paragraph>
            <div style={{padding: "0px 10px"}}>
                <ButtonStart>Start for Free</ButtonStart>
                <ButtonLearn>Learn More</ButtonLearn>
            </div>
        </Section>
    )
}

export { HomeSection }

const Section = styled.section`
    background: rgb(249,139,117);
    background-image: url("../../../../public/images/bg-pattern-intro-mobile.svg"), linear-gradient(111deg, rgba(249,139,117,1) 0%, rgba(250,78,95,1) 100%);
    background-repeat: no-repeat;
    background-position: 40% 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    border-bottom-left-radius: 120px;
    text-align: center;
    
    @media screen and (min-width: 1024px) {
        background-image: url("../../../../public/images/bg-pattern-intro-desktop.svg"), linear-gradient(111deg, rgba(249,139,117,1) 0%, rgba(250,78,95,1) 100%);
        background-position: center left;
    }   
`

const Titulo = styled.h1`
    
    color: var(--white);
    font-size: 32px;
    padding: 0px 25px;
    margin-bottom: 40px;
`
const Paragraph = styled.p`
    color: var(--white);
    font-size: 18px;
    margin-bottom: 40px;
    padding: 0px 15px;
`

const ButtonStart = styled.button`
    color: var(--light-red);
    background-color: var(--white);
    border: 1px solid var(--white);
    border-radius: 40px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;
    padding: 10px 20px;

    &:hover {
        background-color: var(--very-light-red);
        color: var(--white);
        border: 1px solid var(--very-light-red);
    }
`

const ButtonLearn = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    padding: 10px 20px;
    border-radius: 40px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;
    margin-left: 20px;

    &:hover {
        background-color: var(--white);
        color: var(--light-red);
    }
`