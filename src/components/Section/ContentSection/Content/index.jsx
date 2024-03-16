import styled from "styled-components"

const Content = ({ title, paragraph }) => {
    return (
        <>
            <Titulo>{title}</Titulo>
            <Paragraph>{paragraph}</Paragraph>
        </>
    )
}

export { Content }

const Titulo = styled.h3`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 40px 30px 40px 30px;
`

const Paragraph = styled.p`
    color: var(--very-dark-grayish-blue);
    text-align: center;
    line-height: 30px;
    padding: 0px 15px 0px 15px;
`