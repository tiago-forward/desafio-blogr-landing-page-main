import styled from "styled-components"

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
            width: 35%;
        }
    }

    .cont-img {

    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
    }
`