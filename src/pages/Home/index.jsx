import { useState } from "react";
import { Header } from "../../components/Header";
import { HomeSection } from "../../components/Section/HomeSection";
import { ContentSection } from "../../components/Section/ContentSection";
import { Footer } from "../../components/Footer";

const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
            <Header />
            <HomeSection />
            <ContentSection
            title1="Introducing an extensible editor"
            paragraph1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
            title2="Robust content managgement"
            paragraph2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control." />
            
            <ContentSection
            title1="Free, open, simple"
            paragraph1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
            title2="Powerful tooling"
            paragraph2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." />

            <Footer />
        </>

    )
}

export { Home }