import { useState } from "react";

import { SubLinksContainer } from "./styles";

const NavLinks = ({ Arrow }) => {

    const [isHovered, setIsHovered] = useState(null);

    const links = [
        { name: "Product", submenu: true, sublinks:[
            {name: "Overview", link: "/"},
            {name: "Pricing", link: "/"},
            {name: "Marketplace", link: "/"},
            {name: "Features", link: "/"},
            {name: "Integrations", link: "/"}
        ] },
        { name: "Company", submenu: true, sublinks:[
            {name: "About", link: "/"},
            {name: "Team", link: "/"},
            {name: "Blog", link: "/"},
            {name: "Careers", link: "/"}
        ] },
        { name: "Connect", submenu: true, sublinks:[
            {name: "Contact", link: "/"},
            {name: "Newsletter", link: "/"},
            {name: "Linkedin", link: "/"}
        ] }]

    return (
        <>
            {links.map((link, index) => (
                <div 
                    key={index} 
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}>

                    <li className="link-title">{link.name}
                        <img className="seta close" src={Arrow} alt="Seta" />
                    </li>
                    
                    {link.submenu && isHovered === index && (
                        <SubLinksContainer className="sublinks-container" >
                            {link.sublinks.map((sublink, index) => (
                                <li key={index}>
                                    <a href={sublink.link}>{sublink.name}</a>
                                </li>
                            ))}
                        </SubLinksContainer>
                    )}

                </div>
            ))}
        </>
    )
}

export { NavLinks }