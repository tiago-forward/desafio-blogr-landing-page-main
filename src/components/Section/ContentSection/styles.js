import styled from "styled-components"

export const TitleMain = styled.h2`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 100px 30px 40px 30px;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        @media screen and (min-width: 1024px) {
            width: 600px;
        }
    }

    img {
        width: 100%;
        max-width: 700px;
        @media screen and (min-width: 1024px) {
            width: 50%;
        }
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`