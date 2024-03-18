import styled from "styled-components"
import { Content } from "./Content"

const ContentSection = ({ isMobile, titleMain, imageTop, imageRight, imageLeft, title1, paragraph1, title2, paragraph2 }) => {
    return (
        <>
            <TitleMain>{titleMain}</TitleMain>
            <ContentContainer>
                
                {!isMobile ? (
                    <>
                        <Image src={imageTop} alt={imageTop} />
                        <Div>
                            <Content
                                title={title1}
                                paragraph={paragraph1} />
                            <Content
                                title={title2}
                                paragraph={paragraph2} />
                        </Div>
                    </>
                ) : (
                    <>
                        <Div>
                            <Content
                                title={title1}
                                paragraph={paragraph1} />
                            <Content
                                title={title2}
                                paragraph={paragraph2} />
                        </Div>
                        <Image src={imageRight} alt={imageRight} />
                    </>
                )}

            </ContentContainer>

        </>
    )
}

export { ContentSection }

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

const Image = styled.img`
    width: 100%;
    max-width: 700px;
    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`

const TitleMain = styled.h2`
    color: var(--very-dark-blue);
    text-align: center;
    font-size: 25px;
    padding: 100px 30px 40px 30px;`


const Div = styled.div`
    @media screen and (min-width: 1024px) {
        width: 600px;
    }
`