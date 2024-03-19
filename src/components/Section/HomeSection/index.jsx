import { SectionContainer } from "./styles"

const HomeSection = () => {
    return (
        <SectionContainer>
            <h1>A modem publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div style={{padding: "0px 10px"}}>
                <button className="btn-start">Start for Free</button>
                <button className="btn-learn">Learn More</button>
            </div>
        </SectionContainer>
    )
}

export { HomeSection }