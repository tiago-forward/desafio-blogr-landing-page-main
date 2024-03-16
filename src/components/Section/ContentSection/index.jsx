import styled from "styled-components"
import { Content } from "./Content"

const ContentSection = ({ titleMain, image, title1, paragraph1, title2, paragraph2 }) => {
    return (
        <>
            <TitleMain>{titleMain}</TitleMain>
            <Image src={image} alt={image} />
            <Content
            title={title1}
            paragraph={paragraph1} />
            <Content
            title={title2}
            paragraph={paragraph2} />
        </>
    )
}

export { ContentSection }

const Image = styled.img`
    width: 100%;
`

const TitleMain = styled.h2`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 100px 30px 40px 30px;
`