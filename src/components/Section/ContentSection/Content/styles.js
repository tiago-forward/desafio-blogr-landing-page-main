import styled from "styled-components"

export const Titulo = styled.h3`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 40px 30px;
    @media screen and (min-width: 1024px) {
        text-align: start;
    }
`

export const Paragraph = styled.p`
    color: var(--very-dark-grayish-blue);
    text-align: center;
    line-height: 30px;
    padding: 0px 30px;

    @media screen and (min-width: 1024px) {
        text-align: start;
    }
`