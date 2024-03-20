import { TitleMain, ContentContainer } from "./styles"

import { Content } from "./Content"

const ContentSection = ({ isMobile, titleMain, imageTop, imageRight, imageLeft, title1, paragraph1, title2, paragraph2 }) => {
    return (
        <>
            <TitleMain>{titleMain}</TitleMain>
            <ContentContainer>
                
                {!isMobile ? (
                    <>
                        <img src={imageTop} alt={imageTop} />
                        <div>
                            <Content
                                title={title1}
                                paragraph={paragraph1} />
                            <Content
                                title={title2}
                                paragraph={paragraph2} />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <Content
                                title={title1}
                                paragraph={paragraph1} />
                            <Content
                                title={title2}
                                paragraph={paragraph2} />
                        </div>
                        <img src={imageRight} alt={imageRight} />
                    </>
                )}

            </ContentContainer>

        </>
    )
}

export { ContentSection }