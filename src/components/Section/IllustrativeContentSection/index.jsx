import { IllustrativeContainer } from "./styles"

const IllustrativeContentSection = ({ imageIllustration, imageCircle, titleMain, paragraph, isMobile }) => {
    return (
        <IllustrativeContainer>
            {/* <div>
                <h2>{titleMain}</h2>
                <p>{paragraph}</p>
            </div>
            <div className="imgs-container">
                <div className="img-illustration">
                    <img src={imageIllustration} alt="" />
                </div>
                <div className="img-circle">
                    <img src={imageCircle} alt="" />
                </div>
            </div> */}

            <div className="circles-container">
                {/* <img src={imageCircle} className="image-circles" alt="Circles" aria-hidden="true" /> */}
            </div>
            <div className="content-container">
                <img className="image-phones" src={imageIllustration} alt="Illustration Phones" />
                <div className="content">
                    <h2>{titleMain}</h2>
                    <p>{paragraph}</p>
                </div>
            </div>

        </IllustrativeContainer>
    )
}

export { IllustrativeContentSection }