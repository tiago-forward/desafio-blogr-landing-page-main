import { ContentContainer } from "./styles"

import { Content } from "./Content"

const ContentSection = ({ isMobile, imageTop, imageRight, title1, paragraph1, title2, paragraph2 }) => {
    return (
        <div className="container">
            <ContentContainer>
                
                {!isMobile ? (
                    <>
                        <div className="img-container">
                            <img src={imageTop} alt={imageTop} /></div>
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
                        <div className="img-container">
                            <img src={imageRight} alt={imageRight} />
                        </div>
                    </>
                )}

            </ContentContainer>

        </div>
    )
}

export { ContentSection }