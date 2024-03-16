import styled from "styled-components"
import { Content } from "./Content"

const ContentSection = ({title1, paragraph1, title2, paragraph2 }) => {
    return (
        <>
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