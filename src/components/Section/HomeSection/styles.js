import styled from "styled-components"

export const SectionContainer = styled.section`
    background: rgb(249,139,117);
    background-image: url("../../../../public/bg-pattern-intro-mobile.svg"), linear-gradient(111deg, rgba(249,139,117,1) 0%, rgba(250,78,95,1) 100%);
    background-repeat: no-repeat;
    background-position: 40% 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    border-bottom-left-radius: 120px;
    text-align: center;

    h1 {
        color: var(--white);
        font-size: 32px;
        padding: 0px 25px;
        margin-bottom: 40px;
    }

    p {
        color: var(--white);
        font-size: 18px;
        margin-bottom: 40px;
        padding: 0px 15px;
    }

    .btn-start {
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
    }

    .btn-learn {
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
    }
    
    @media screen and (min-width: 1024px) {
        background-image: url("../../../../public/bg-pattern-intro-desktop.svg"), linear-gradient(111deg, rgba(249,139,117,1) 0%, rgba(250,78,95,1) 100%);
        background-position: center left;
    }   
`