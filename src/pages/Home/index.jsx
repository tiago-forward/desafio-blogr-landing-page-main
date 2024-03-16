import { useState } from "react";
import { Header } from "../../components/Header";
import { HomeSection } from "../../components/Section/HomeSection";

const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
            <Header />
            <HomeSection />
        </>
    )
}

export { Home }