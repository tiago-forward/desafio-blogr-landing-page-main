import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Header } from "../../components/Header";
import { HomeSection } from "../../components/Section/HomeSection";
import { ContentSection } from "../../components/Section/ContentSection";
import { IllustrativeContentSection } from "../../components/Section/IllustrativeContentSection";
import { Footer } from "../../components/Footer";
import IllustrationEditorMobile from "../../../public/images/illustration-editor-mobile.svg"
import IllustrationLaptopMobile from "../../../public/images/illustration-laptop-mobile.svg"
import IllustrationPhones from "../../../public/images/illustration-phones.svg"
import styled from "styled-components"

const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const isMobile = useMediaQuery({
        query: '(min-width: 1024px)'
      })

    return (
        <>
            <Header />
            <HomeSection />
            <main>
                <SectionContainer>
                    <ContentSection
                        titleMain="Designed for the future"
                        imageTop={IllustrationEditorMobile}
                        imageRight={IllustrationEditorMobile}
                        title1="Introducing an extensible editor"
                        paragraph1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
                        title2="Robust content managgement"
                        paragraph2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control."
                        isMobile={isMobile} />
                </SectionContainer>
                <section>
                    <IllustrativeContentSection
                        image={IllustrationPhones}
                        titleMain="State of the Art Infrastructure"
                        paragraph="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
                        isMobile={isMobile} />
                </section>
                <SectionContainer>
                    <ContentSection
                        imageTop={IllustrationLaptopMobile}
                        imageLeft={IllustrationLaptopMobile}
                        title1="Free, open, simple"
                        paragraph1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                        title2="Powerful tooling"
                        paragraph2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." />
                </SectionContainer>
            </main>

            <Footer />
        </>

    )
}

export { Home }

const SectionContainer = styled.section`
    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
`