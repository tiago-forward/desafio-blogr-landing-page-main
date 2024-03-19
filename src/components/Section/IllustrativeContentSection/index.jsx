import { IllustrativeContainer } from "./styles"

const IllustrativeContentSection = ({ image, titleMain, paragraph }) => {
    return (
        <IllustrativeContainer>
            <div className="illustrative">
                <img className="img" src={image} alt={image} />
            </div>
            <div className="text-container">
                <div className="container">
                    <h2 className="title-main">{titleMain}</h2>
                    <p>{paragraph}</p>
                </div>
            </div>
        </IllustrativeContainer>
    )
}

export { IllustrativeContentSection }