import styled from "styled-components"

export const SectionContainer = styled.section`

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;

        .container-content-one {
            margin-left: 100px;
        }

        .container-content-two {
            margin-right: 100px;
            margin-top: 200px;
        }

    }
`

export const TitleMain = styled.h2`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 100px 30px 40px 30px;
`