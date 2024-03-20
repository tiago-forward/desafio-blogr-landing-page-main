//Bibliotecas
import { useMediaQuery } from "react-responsive";
//Components
import { Header } from "../../components/Header";
import { HomeSection } from "../../components/Section/HomeSection";
import { ContentSection } from "../../components/Section/ContentSection";
import { IllustrativeContentSection } from "../../components/Section/IllustrativeContentSection";
import { Footer } from "../../components/Footer";
//Imagens
import IllustrationEditorMobile from "../../../public/images/illustration-editor-mobile.svg"
import IllustrationEditorDesktop from "../../../public/images/illustration-editor-desktop.png"
import IllustrationLaptopMobile from "../../../public/images/illustration-laptop-mobile.svg"
import IllustrationLaptopDesktop from "../../../public/images/illustration-laptop-desktop.png"
import IllustrationPhones from "../../../public/images/illustration-phones.svg"
//Estilos
import { SectionContainer, TitleMain } from "./styles";

const Home = () => {
    
    const isMobile = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    const illustrationEditor = !isMobile ? IllustrationEditorMobile : IllustrationEditorDesktop;
    const illustrationLaptop = !isMobile ? IllustrationLaptopMobile : IllustrationLaptopDesktop;

    return (
        <>
            <Header />
            <HomeSection />
            <main>
                <SectionContainer>
                    <TitleMain>Designed for the future</TitleMain>

                    <div className="container-content-one">
                        <ContentSection
                            imageTop={illustrationEditor}
                            imageRight={illustrationEditor}
                            title1="Introducing an extensible editor"
                            paragraph1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
                            title2="Robust content managgement"
                            paragraph2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control."
                            isMobile={isMobile} />
                    </div>
                </SectionContainer>
                <section>
                    <IllustrativeContentSection
                        image={IllustrationPhones}
                        titleMain="State of the Art Infrastructure"
                        paragraph="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
                        isMobile={isMobile} />
                </section>
                <SectionContainer>
                    <div className="container-content-two">
                        <ContentSection
                            imageTop={illustrationLaptop}
                            title1="Free, open, simple"
                            paragraph1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                            title2="Powerful tooling"
                            paragraph2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." />
                    </div>
                </SectionContainer>
            </main>

            <Footer />
        </>

    )
}

export { Home }