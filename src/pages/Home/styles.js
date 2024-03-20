import styled from "styled-components"

export const SectionContainer = styled.section`

    .container-content-two {
        margin-top: 100px;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`

export const TitleMain = styled.h2`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 100px 30px 40px 30px;
`