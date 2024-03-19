import { Titulo, Paragraph } from "./styles"

const Content = ({ title, paragraph }) => {
    return (
        <>
            <Titulo>{title}</Titulo>
            <Paragraph>{paragraph}</Paragraph>
        </>
    )
}

export { Content }