//Bibliotecas
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
//Components
import { MenuMobile } from "../../components/Header/MenuMobile";
import { Header } from "../../components/Header";
import { HomeSection } from "../../components/Section/HomeSection";
import { ContentSection } from "../../components/Section/ContentSection";
import { IllustrativeContentSection } from "../../components/Section/IllustrativeContentSection";
import { Footer } from "../../components/Footer";
//Imagens
import IllustrationEditorMobile from "../../../public/images/illustration-editor-mobile.svg"
import IllustrationEditorDesktop from "../../../public/images/illustration-editor-desktop.svg"
import IllustrationLaptopMobile from "../../../public/images/illustration-laptop-mobile.svg"
import IllustrationLaptopDesktop from "../../../public/images/illustration-laptop-desktop.svg"
import IllustrationPhones from "../../../public/images/illustration-phones.svg"
//Estilos
import { SectionContainer } from "./styles";

const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    
    const isMobile = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    const illustrationEditor = !isMobile ? IllustrationEditorMobile : IllustrationEditorDesktop;
    const illustrationLaptop = !isMobile ? IllustrationLaptopMobile : IllustrationLaptopDesktop;

    return (
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header />
            <HomeSection />
            <main>
                <SectionContainer>
                    <ContentSection
                        titleMain="Designed for the future"
                        imageTop={illustrationEditor}
                        imageRight={illustrationEditor}
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
                        imageTop={illustrationLaptop}
                        imageLeft={illustrationLaptop}
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