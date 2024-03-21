import { IllustrativeContainer } from "./styles"

const IllustrativeContentSection = ({ imageIllustration, imageCircle, titleMain, paragraph, isMobile }) => {
    return (
        <IllustrativeContainer>

            {/* <div className="circles-container">
                <img src={imageCircle} className="image-circles" alt="Circles" aria-hidden="true" />
            </div> */}
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